# 🐾 Pets in EverQuest

Four classes in EQ rely heavily on **summoned pets** — creatures you control in combat. If you're playing a Necromancer, Magician, Enchanter, or Beastlord, understanding how pets work is fundamental. Even classes that use pets situationally (Shadow Knight, Shaman at high levels) will benefit from this guide.

---

## 🧙 Pet Classes Overview

| Class | Pet Type | Role | How Essential |
|-------|---------|------|--------------|
| **Magician** | Elemental (fire/air/water/earth) | Primary tank/DPS | 🔴 Core mechanic — Mage IS their pet |
| **Necromancer** | Undead (skeletons, zombies) | Combat/utility | 🔴 Core mechanic — primary solo tool |
| **Enchanter** | Charmed mob | Situational tank/DPS | 🟡 Very powerful but risky |
| **Beastlord** | Warder (animal companion) | Combat partner | 🔴 Always active — part of class identity |
| **Shadow Knight** | Undead pet (higher levels) | Supplemental DPS | 🟡 Useful but not primary |

---

## 🔮 Summoning a Pet

### Magician & Necromancer
You summon pets by **casting a pet spell**:
1. Memorize your pet spell in a spell gem
2. Cast it — a new pet appears
3. You can only have **one pet at a time** — summoning a new one dismisses the old one

**Pet spells scale with level** — always use the highest-level pet spell you have available. A level 20 pet is dramatically stronger than a level 16 pet.

> 💡 **Magicians:** You have four types of pets (fire, air, water, earth) each with different strengths. Air pets have a chance to stun on every hit. Earth pets are tanky with a snare. Fire pets deal high DPS. Water pets have a damage shield.

### Beastlord
Beastlords' **Warder** is summoned with a pet spell, but unlike Mage/Necro pets, it levels with you and has more personality in terms of type (based on your race):
- Iksar Beastlords get a reptile warder
- Vah Shir Beastlords get a cat warder
- Ogre Beastlords get a bear warder
- etc.

### Enchanter
Enchanters don't summon permanent pets — they **charm existing mobs** using the Charm spell line. The charmed mob fights for you temporarily, but Charm can break unpredictably (especially in high-level content), at which point the mob attacks you. Charm pets are extremely powerful but require active management.

---

## 🎮 Controlling Your Pet

All pet commands are sent via `/pet` slash commands or pet hotkeys:

### Core Pet Commands

| Command | What It Does |
|---------|-------------|
| `/pet attack` | Send pet to attack your current target |
| `/pet back off` | Recall pet from combat immediately |
| `/pet follow me` | Pet follows you as you move |
| `/pet guard here` | Pet stays in place and guards |
| `/pet guard me` | Pet follows and attacks anything that attacks you |
| `/pet sit` | Pet sits (stops moving, rests) |
| `/pet stand` | Pet stands up |
| `/pet taunt on` | Enable pet taunting (it tries to hold aggro) |
| `/pet taunt off` | Disable pet taunting (useful in groups — see below) |
| `/pet report health` | Pet tells you its current HP% |
| `/pet get lost` | Dismisses your pet permanently |

### Hotbar Pet Commands
Put the most-used pet commands on your hotbar for fast access:
- **Attack** — send pet on your current target
- **Back off** — emergency recall
- **Taunt off** — before joining a group (see below)

---

## 🛡️ Equipping Your Pet (Magician)

Magicians can **summon equipment** to give their pets:

### Pet-Wearable Items
Items with **"pet"** in their description or that are summoned by Magician pet-equipment spells can be given to pets:
1. Summon the item (Magician has spells: Summon Sword, Summon Shield, etc.)
2. Right-click your pet to open a trade window
3. Give the item to the pet
4. Pet equips it automatically

### Summoned Pet Items (Magician Spells)
Magicians have a whole line of spells specifically for their pets:
- **Summon Dagger, Sword, Mace** — basic weapons
- **Summon Shield** — improves pet AC
- **Summon Haste** — temporarily speeds up pet attack rate
- **Summon Pet Armor** — higher-level spell line providing significant AC boost

> 💡 **Always equip your Magician pet.** An unequipped Mage pet is significantly weaker. At minimum, give it a weapon and shield. At higher levels, full pet armor is standard.

---

## 💊 Healing Your Pet

Pets can be healed just like players:
- **Necromancers** have a pet heal spell line (**Renew Bones**, etc.)
- **Magicians** should ask a Cleric or Druid to heal the pet — Mages don't have a heal
- **Beastlords** have a limited heal for their warder
- Any **Cleric/Druid/Shaman** can heal pets by targeting them and casting heals

### Buffing Your Pet
Most buffs work on pets — target your pet and cast:
- Strength buffs
- AC buffs
- Haste (very impactful)
- Regen

**AA note:** The **Pet Affinity** AA (available to pet classes) makes many group buffs automatically apply to your pet when cast on you — very convenient.

---

## ⚠️ Pet Etiquette in Groups

Pet classes in groups need to follow specific rules to avoid causing chaos:

### Turn Off Pet Taunt in Groups
When joining a group with a tank, **turn off your pet's taunt**:
```
/pet taunt off
```
If your pet taunts, it will randomly steal aggro from the tank, causing the mob to attack your pet, your pet to get destroyed, and the tank to lose control of the pull. In groups, the **tank taunts**, not your pet.

### Position Your Pet
After the tank engages:
1. Target the same mob the tank is on (assist the tank)
2. `/pet attack` — send your pet to the same mob
3. Your pet should be fighting alongside everyone else, not running off at random mobs

### Watch Pet Aggro
Even with taunt off, a high-DPS pet can pull aggro on weak trash mobs. Watch the combat and use `/pet back off` if your pet is running at something unexpected.

---

## 🧟 Necromancer Pets: Special Notes

Necromancer pets have unique mechanics worth knowing:

### Pet Types
As a Necromancer levels up, they get progressively stronger pet spells:
- **Bone Chips** — most Necromancer pet spells require Bone Chips as a reagent. Keep a large stack.
- Higher-level pets hit harder, have more HP, and have better spell resistance

### Lich / Undead Pet Synergy
Necromancers can instruct their pet to **cast spells** — later-level undead pets can dispel, backstab, or use special undead abilities.

### Using Pet as a Solo Tool
The Necromancer's core solo strategy:
1. Send pet to attack a mob
2. Cast **DoT spells** on the mob (Darkness, Poison, Disease DoTs)
3. The mob is killing your pet but also dying from DoTs
4. Use **pet heals** to keep the pet alive
5. You stay at range — mob can't reach you

This "kite with DoTs while pet tanks" strategy makes Necromancers one of the best solo classes in the game.

---

## 🌟 Magician Pets: Special Notes

Magicians are sometimes called a **"pet class"** because their entire class identity revolves around the pet. The Mage spell book is largely pet buffs, pet equipment, and pet power spells.

### Pet Type Selection
At each level tier, Magicians choose between fire, air, water, and earth pets:
- **Air pet** — hits fast, chance to stun enemies on every hit (excellent for slowing mob attack speed)
- **Earth pet** — tanky, has a root proc (mob gets rooted occasionally)
- **Fire pet** — high damage, glass cannon
- **Water pet** — damage shield (mobs take damage for hitting the pet)

**For solo play:** Air or Earth are usually best. Air's stun proc is extremely powerful.
**For groups:** Fire or Air for DPS; Earth for extra control.

### Focus Items
**Focus items** are special items that enhance Magician pet spells. They give the pet more HP, damage, or special abilities. Look for items with focus effects on the EQ wiki — they're a major power source for Magicians.

---

## 🎭 Enchanter Charm: The Most Powerful (and Dangerous) Pet

Enchanters can charm mobs — turning enemies into temporary allies. A charmed high-level mob can be devastatingly powerful, but the mechanic is high risk:

### How Charm Works
1. Target a mob that's **lower level than you** (safer) or similar level (risky)
2. Cast **Charm** — if it lands, the mob follows you and will attack on `/pet attack`
3. The charm **can break at any time** — the mob then attacks you with full aggro
4. Recast Charm quickly when it breaks (watch for the "Your charm spell has worn off" message)

### Charm Safety Tips
- **Always have Mez memorized** alongside Charm — when Charm breaks, immediately Mez the mob so you can recharm without being killed
- Don't charm mobs significantly higher level than your Charm spell can handle
- Inform your group you're charming — a charmed mob breaking in a group can wipe everyone
- Keep your Mez spell accessible at all times while charming

---

## ⚡ Quick Pet Reference

```
/pet attack          Attack current target
/pet back off        Stop fighting, return to me
/pet follow me       Follow me around
/pet guard here      Stay and guard this spot
/pet taunt on/off    Enable/disable aggro taunting
/pet report health   Pet reports its HP
/pet get lost        Dismiss pet permanently
```
