# 😡 Aggro & Threat in EverQuest

"Don't steal aggro" is one of the first things experienced players tell newcomers — but what does it actually mean, how does aggro work, and what happens when you get it wrong? This guide explains EQ's threat system and how to stay alive by respecting it.

---

## 🎯 What Is Aggro?

**Aggro** (short for *aggression*) is the mechanic that determines **which player a monster is trying to kill**. In any fight, the monster is always targeting *someone* — that someone has aggro.

In a well-run group:
- The **tank has aggro** — the monster beats on them
- The tank is built to **survive hits** (high HP, high AC, defense skills)
- Everyone else attacks from relative safety

When aggro goes wrong:
- The monster switches to the **healer** — the healer stops healing, the tank dies
- The monster switches to the **caster nuke-spammer** — glass cannon gets one-shotted
- This is called **stealing aggro** and it's one of the most common causes of group wipes

---

## 📊 How Aggro Is Generated

EQ doesn't show a threat meter — but here's how aggro works under the hood:

| Action | Aggro Generated |
|--------|----------------|
| Dealing damage | High — scales with damage dealt |
| Healing | High — each heal generates significant threat |
| Taunting | Immediate — overrides current target |
| Debuffing/DoT | Moderate |
| Buffing (target enemy) | Low |
| Being near the mob | Minimal (proximity aggro) |

The player who has generated the **most total threat** is the one the monster attacks.

### Why Healers Get Aggro
Every heal on the tank generates threat. A Cleric who spam-heals through a tough fight can build up more threat than the tank — and suddenly the mob turns and kills the healer. This is why healers must **manage their heal output** and why tanks must constantly taunt.

---

## 🛡️ How Tanks Hold Aggro

Tanks have specific tools to maintain aggro:

### Taunt
Every tank has a **Taunt** ability (melee skill). It:
- **Forces the monster to attack you** for a brief window
- Resets the threat order so you're on top

To use: Put Taunt on your hotbar (it's in your abilities/skills) and use it whenever the mob switches targets.

> 💡 **Taunt has a chance to fail.** If your Taunt skill is low, it might not work. Level it by taunting constantly — even on mobs you don't need to taunt.

### Bashing / Stunning
- **Warriors, Paladins, Shadow Knights** can bash with a shield — generates additional aggro
- Stuns pause enemy attacks AND build threat

### Discipline / Combat Abilities
Higher level tanks get disciplines and abilities specifically designed to hold aggro. As a new tank, focus on Taunt and Bash for now.

---

## ❌ How to NOT Steal Aggro

These are the most common mistakes that cause aggro problems:

### 1. Nuking Before the Tank Has Aggro
The most common mistake. The pull happens, mob runs in, and the Wizard fires a 1,000-damage nuke immediately — mob turns and destroys the Wizard.

**Fix:** Wait 2–3 seconds after the tank engages before dealing damage. Give the tank time to taunt and build threat first.

### 2. Assist the Main Tank (MA)
Always, always, always attack the **same mob as the main tank**. If you attack a different mob:
- That mob now has aggro on YOU because you've dealt it the most damage
- You're now the tank on a second mob with no help

**Fix:** Set up an assist hotkey:
```
/assist <MainTankName>
```
Press it before attacking. Attack whatever the tank is attacking.

### 3. AoE (Area of Effect) Spells
AoE spells hit every mob in range. If your group has two mobs — one being fought, one being mezzed — an AoE **breaks the mez** AND generates aggro on both mobs.

**Fix:** Never use AoE spells in a group unless the group leader specifically asks for it. Stick to single-target attacks.

### 4. Healing at the Wrong Time
Healer generates massive aggro by over-healing. A Cleric casting three large heals in a row can rocket to the top of the threat list.

**Fix (Healers):**
- Use **smaller, efficient heals** rather than maximum heals when the tank is only slightly damaged
- Let the tank's HP dip a little — the mob doesn't deal burst damage, so you have time
- Heal reactively, not preemptively spamming

### 5. Breaking Mez
An Enchanter or Bard mezzed a second mob so the group can fight one at a time. Someone hits the mezzed mob — it wakes up, charges them (they have max aggro because they hit it), and chaos ensues.

**Fix:** **Never touch a mezzed mob.** Watch your AoE. If you're not sure which mob is mezzed, **stop attacking** and ask.

---

## 🔴 The Con System and Aggro Range

Mobs also have a **passive aggro radius** — get too close and they attack without being provoked:

| Con Color | Aggro Behavior |
|----------|---------------|
| 🔴 Red | Very aggressive — may aggro from far away |
| 🟡 Yellow | Moderately aggressive |
| ⚪ White | Normal aggro range |
| 🔵 Blue | Normal aggro range |
| 🟢 Green | Usually won't aggro unless you walk right up to them |

Additionally, some mob **types** are inherently more aggressive:
- **Undead** — often aggros on sight regardless of level
- **Named mobs** — usually have larger aggro ranges
- **Dungeon mobs** — tend to be more aggressive than outdoor mobs

---

## 💀 When You DO Get Aggro

If the mob switches to you and you're not the tank:

### Option 1: Run to the Tank
Run toward the tank — the mob will likely switch back to the tank when the tank taunts.

### Option 2: Stop Dealing Damage
Stop attacking entirely. Your threat will stop increasing and the tank can retaunt.

### Option 3: Zone (Emergency)
If you're about to die and the tank can't get aggro back — **run to a zone line**. The mob stops at the zone boundary (usually). You'll lose your spot in the group but stay alive.

### Option 4: Feign Death (Monk / Necromancer Only)
FD (Feign Death) drops all aggro instantly. Use it, let the tank retaunt, then stand back up.

---

## 🧙 Class-Specific Aggro Notes

| Class | Notes |
|-------|-------|
| **Wizard** | Highest DPS = highest aggro risk. Wait for tank to establish aggro before nuking. |
| **Cleric** | Heals generate massive threat. Don't over-heal. |
| **Enchanter** | AoEs are dangerous in grouped content. Avoid them. |
| **Necromancer** | DoTs generate ongoing threat every tick. Start slowly. |
| **Ranger** | Archery can pull from range — be careful pulling unintended mobs. |
| **Rogue** | Backstab generates high threat. Give tank 2–3 seconds before engaging. |
| **Monk** | FD is your panic button — use it when you steal aggro. |
| **Shaman** | Slow is extremely valuable but can generate initial aggro on the mob. Time it after the tank engages. |

---

## ⚡ Quick Aggro Checklist

- [ ] Always **assist the main tank** — `/assist <tankname>` before every fight
- [ ] **Wait 2–3 seconds** after the tank engages before dealing damage
- [ ] **Never use AoE** spells unless instructed to
- [ ] **Never break mez** — identify mezzed mobs and don't touch them
- [ ] Healers: **use smaller heals** reactively, don't spam big heals preemptively
- [ ] If you get aggro: **stop attacking** and let the tank retaunt
- [ ] Tanks: keep **Taunt** on your hotbar and use it constantly
