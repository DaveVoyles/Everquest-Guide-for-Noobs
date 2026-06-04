/* webgl.js — Three.js animated starfield background
   Uses a point-cloud star field + large glowing nebula sprites
   for a mystical, cosmic EverQuest atmosphere.               */

(function initWebGL() {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  // ── Renderer ───────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x02020f, 1);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.z = 90;

  // ── Helpers ─────────────────────────────────────────────────
  function rand(min, max) { return min + Math.random() * (max - min); }

  function spherePoint(rMin, rMax) {
    const theta = Math.random() * Math.PI * 2;
    const phi   = Math.acos(2 * Math.random() - 1);
    const r     = rand(rMin, rMax);
    return [
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    ];
  }

  // ── Star Field ──────────────────────────────────────────────
  const STAR_COUNT = 4000;
  const pos   = new Float32Array(STAR_COUNT * 3);
  const color = new Float32Array(STAR_COUNT * 3);

  for (let i = 0; i < STAR_COUNT; i++) {
    const [x, y, z] = spherePoint(80, 500);
    pos[i * 3]     = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;

    // Gold 20%, blue 18%, cold-white rest
    const t = Math.random();
    if (t < 0.20) {
      color[i * 3] = 0.85; color[i * 3 + 1] = 0.70; color[i * 3 + 2] = 0.22; // gold
    } else if (t < 0.38) {
      color[i * 3] = 0.35; color[i * 3 + 1] = 0.60; color[i * 3 + 2] = 1.00; // blue
    } else {
      color[i * 3] = 0.88; color[i * 3 + 1] = 0.90; color[i * 3 + 2] = 1.00; // white
    }
  }

  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  starGeo.setAttribute('color',    new THREE.BufferAttribute(color, 3));

  const starMat = new THREE.PointsMaterial({
    size: 0.75,
    vertexColors: true,
    transparent: true,
    opacity: 0.88,
    sizeAttenuation: true,
  });

  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // ── Nebula Glow Sprites ─────────────────────────────────────
  function makeGlowTex(r, g, b) {
    const sz  = 128;
    const cvs = document.createElement('canvas');
    cvs.width = cvs.height = sz;
    const ctx  = cvs.getContext('2d');
    const grad = ctx.createRadialGradient(sz / 2, sz / 2, 0, sz / 2, sz / 2, sz / 2);
    grad.addColorStop(0,    `rgba(${r},${g},${b},0.55)`);
    grad.addColorStop(0.35, `rgba(${r},${g},${b},0.18)`);
    grad.addColorStop(0.70, `rgba(${r},${g},${b},0.05)`);
    grad.addColorStop(1,    `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, sz, sz);
    return new THREE.CanvasTexture(cvs);
  }

  const matGold   = new THREE.SpriteMaterial({ map: makeGlowTex(201, 168, 76),  transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const matBlue   = new THREE.SpriteMaterial({ map: makeGlowTex(74,  158, 255), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const matPurple = new THREE.SpriteMaterial({ map: makeGlowTex(120, 60,  220), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });

  const nebulaConfigs = [
    { mat: matGold,   count: 10, scaleMin: 40, scaleMax: 100 },
    { mat: matBlue,   count: 8,  scaleMin: 50, scaleMax: 120 },
    { mat: matPurple, count: 6,  scaleMin: 60, scaleMax: 140 },
  ];

  const nebulae = [];
  nebulaConfigs.forEach(({ mat, count, scaleMin, scaleMax }) => {
    for (let i = 0; i < count; i++) {
      const sprite = new THREE.Sprite(mat.clone());
      const s = rand(scaleMin, scaleMax);
      sprite.scale.set(s, s, 1);
      const [x, y, z] = spherePoint(60, 250);
      sprite.position.set(x, y, z - 30);
      sprite.userData.baseScale = s;
      sprite.userData.phase     = Math.random() * Math.PI * 2;
      scene.add(sprite);
      nebulae.push(sprite);
    }
  });

  // ── Mouse Parallax ──────────────────────────────────────────
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Animation Loop ──────────────────────────────────────────
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.0004;

    // Slow star-field rotation
    stars.rotation.y = t * 0.08;
    stars.rotation.x = t * 0.03;

    // Nebula pulsing
    nebulae.forEach((n, i) => {
      const pulse = 1 + 0.08 * Math.sin(t * 60 + n.userData.phase);
      const s = n.userData.baseScale * pulse;
      n.scale.set(s, s, 1);
    });

    // Gentle camera parallax
    camera.position.x += (mouseX * 6 - camera.position.x) * 0.012;
    camera.position.y += (-mouseY * 4 - camera.position.y) * 0.012;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  // ── Resize ──────────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

})();
