# ⚔️ Combat Basics in EverQuest

EverQuest's combat is slower and more deliberate than most modern MMOs. There's no frantic button-mashing or ability rotation to memorize in the early game — but understanding the mechanics underneath makes the difference between dying constantly and surviving efficiently. This guide explains how combat actually works.

---

## 🎯 Starting a Fight

### Pulling
In EQ, fights rarely come to you — you go get them. The act of initiating combat is called a **pull**.

**How to pull:**
1. **Target the mob** (left-click, or F8 for nearest)
2. `/con` it to verify the difficulty
3. Engage with an attack, spell, or ranged shot to draw it to you
4. In a group: the designated **puller** (often a Monk, Bard, or Ranger) fetches the mob while the rest of the group waits at the camp

> 💡 **Never pull more than your group can handle.** In dungeons, careless pulls that bring 2–3 mobs at once are the most common cause of wipes.

### Auto-Attack
To start swinging your weapon:
- Press **A** (default) to toggle auto-attack **on**
- Your character will automatically swing at their target repeatedly
- Press **A** again to toggle it **off**
- Auto-attack continues until the mob dies, you clear target, or you toggle it off

> ⚠️ **Don't accidentally turn off auto-attack mid-fight** by pressing A. This is a surprisingly common mistake that suddenly stops all your melee damage.

---

## 🗡️ The Combat Round

EQ combat is turn-based at its core, running on a **timer system**:

- Each weapon has a **delay** — the time between swings (shown on the weapon as "Delay: 28" = 2.8 second swing timer)
- Faster weapons (low delay) swing more often but hit for less per swing
- Slower weapons (high delay) swing less often but hit harder per swing
- Your **Haste** buff and **Offense** skill affect how quickly you swing

### A Single Attack Roll
Each swing goes through several checks:
1. **Miss** — your Offense skill and DEX vs. the mob's Defense and AGI
2. **Hit** — if it lands, damage is calculated from your weapon's damage range + STR bonus
3. **Special** — chance for a proc (see below), critical hit, or riposte

---

## 🔮 Spell Casting

Casters cast spells from their **memorized spell gems** (the glowing icons in your spell bar).

### How to Cast
1. Click a **spell gem** or press the corresponding number key (1–8 by default)
2. A **casting bar** appears — don't move or get hit during this time
3. The spell fires when the bar completes

### Casting Time
Each spell has a casting time:
- **Instant** — fires immediately (rare)
- **Fast** (under 2 seconds) — quick heals, short buffs
- **Standard** (2–5 seconds) — most nukes and heals
- **Long** (5+ seconds) — powerful spells, summons, complex buffs

### Interrupts
If you take a hit while casting, the spell **may be interrupted** and must be recast. This is why:
- Casters **do not want to be hit** — position behind the tank
- The **Channeling skill** reduces your interrupt chance — level it diligently

### Fizzles
Sometimes a spell simply **fizzles** — it fails to cast despite no interruption. This happens more often with:
- Low skill level relative to the spell
- Level of the spell being much higher than your current skill
- Certain debuff spells on resistant mobs

---

## 📊 Combat Stats That Matter

| Stat | Effect on Combat |
|------|----------------|
| **Offense** | Your chance to hit enemies with melee attacks |
| **Defense** | Your chance to avoid being hit |
| **Dodge** | Chance to dodge attacks entirely (separate from Defense) |
| **Parry** | Chance to parry attacks with a weapon |
| **Riposte** | Chance to riposte (counter-attack) after a parry |
| **Channeling** | Reduces spell interrupt chance when taking damage |
| **Weapon skill** | Your proficiency with the weapon type you're using |

All of these improve through use — see the [Skills & Spells guide](skills-and-spells.md).

---

## 🎲 Procs (Weapon Effects)

Many weapons have a **proc** — a special effect that triggers randomly on a hit:

- Shown in the weapon description as: *"Effect: Flame Lick (Combat)"*
- Fires at a percentage chance each swing — not every hit
- Effects include: extra damage, debuffs on the enemy, heals, temporary buffs
- **DEX** increases your proc rate — more Dexterity = procs trigger more often
- Enchanter **haste spells** also increase proc rate (more swings = more proc chances)

> 💡 Proc weapons are popular because they add significant bonus damage over time, especially with a high DEX stat and haste buff.

---

## 🩸 Damage Types

EQ tracks what **type** of damage is being dealt:

| Type | Source |
|------|--------|
| Slashing | Swords, axes |
| Blunt | Maces, hammers, staves |
| Piercing | Daggers, spears |
| Hand to Hand | Monk unarmed or H2H weapons |
| Magic | Most spells |
| Fire | Fire spells |
| Cold | Ice spells |
| Disease | Disease-based spells/effects |
| Poison | Poison effects |
| Physical | Some special abilities |

### Why It Matters: Magic Weapons
Some monsters can **only be hit by magic weapons**. If your attacks consistently do **0 damage**, the mob is magic-resistant to physical attacks. You need:
- A weapon with the `MAGIC` flag
- Or a caster to deal the damage instead

Common mobs requiring magic weapons: skeletons, spectres, some undead.

---

## 🛡️ Taking Damage

When mobs hit you, damage is reduced by:
1. **AC (Armor Class)** — reduces damage per hit
2. **AGI** — affects avoidance (dodge/parry chances)
3. **Mitigation skills** — Defense, Dodge, Parry, Riposte

### Resistances
Spells are mitigated by your **resistances**:

| Resistance | Protects Against |
|-----------|-----------------|
| **Magic Resist (MR)** | Most magic effects, mezzes, slows |
| **Fire Resist (FR)** | Fire spells and effects |
| **Cold Resist (CR)** | Ice and cold spells |
| **Disease Resist (DR)** | Disease DoTs and debuffs |
| **Poison Resist (PR)** | Poison effects |

High resistances cause spells to **resist** — the spell message shows *"[Mob Name] resisted your [Spell Name]."* Getting your resistances buffed before tough fights (especially raids) is important.

---

## 💤 Between Fights: Recovery

EQ combat is slow partly because **recovery takes real time**:

### HP Regeneration
- Standing: very slow natural regen
- **Sitting**: significantly faster HP regen
- Sitting near a fire: slightly faster (classic lore mechanic)
- Regeneration buffs (Druid spells): dramatically faster
- Food and drink: small passive boost

### Mana Regeneration (Casters)
- Sitting alone: moderate regen
- Sitting + open spellbook (**B**): **Meditate** skill activates — fastest regen
- Clarity/Breeze buffs from Enchanters: dramatically boost regen rate
- Higher Meditate skill = faster regen

> 💡 **The sit-and-med rhythm is the heartbeat of EQ group play.** Kill a mob, everyone sits, healer meds back to near-full mana, stand up, pull the next mob. Rushing this leads to running dry and wiping.

---

## ⚡ Disciplines and Combat Abilities

As you level, melee classes unlock **Disciplines** — powerful combat abilities activated from your Skills/Abilities window:

| Class | Example Disciplines |
|-------|-------------------|
| Warrior | Mighty Strike, Warrior's Charge |
| Monk | Thunderkick, Voiddance |
| Rogue | Killing Spree |
| Ranger | Trueshot |

Disciplines typically have long **reuse timers** (minutes to hours). Use them at key moments — boss fights, emergencies — not on every trash pull.

---

## 🎯 Combat Flow: Putting It Together

A typical group combat encounter looks like this:

```
1. Puller fetches a mob (sneak/FD pull for single, bow pull from range)
2. Mob arrives at camp
3. Tank engages — toggles auto-attack, uses Taunt
4. DPS waits 2-3 seconds, then /assist tank and attack
5. Healer watches tank HP, heals as needed (not spamming)
6. Enchanter mezzed a second mob — nobody touches it
7. First mob dies
8. Tank picks up the mezzed mob
9. Everyone sits, meds up
10. Puller goes for next mob
```

This rhythm — pull, fight, sit, recover, repeat — is the core loop of EQ. Master it and you can sustain a camp indefinitely.

---

## 🧠 Combat Tips

> ⏱️ **Don't rush the puller.** If the healer is at 40% mana, say "LOM" and wait. A 60-second recovery now prevents a 10-minute corpse run later.

> 🎯 **Always assist.** Every DPS player should type `/assist <tankname>` before swinging. All focus on one mob = fastest kills = fewest deaths.

> 🧊 **Don't break mez.** If the Enchanter mezzed something, it's invisible to combat. AoE spells, area-effect procs, and careless targeting will break it and cause chaos.

> 💊 **Carry HP and mana potions.** They're not cheap, but using one to survive a dangerous pull is worth the cost.

> 📍 **Face your target.** EQ requires you to be **facing** an enemy to melee it effectively. Strafing around a mob during combat causes missed swings.
