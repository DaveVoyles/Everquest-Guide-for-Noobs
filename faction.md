# 🏴 Faction in EverQuest

Faction is EQ's reputation system — a hidden score that tracks how various groups across Norrath feel about your character. Faction determines whether NPCs will talk to you, sell to you, give you quests, or try to kill you on sight. It's one of the most consequential and least-explained systems for new players. This guide demystifies it.

---

## 🤔 What Is Faction?

Every **NPC group** in EQ has a faction — a named reputation track like:
- **Guards of Qeynos**
- **Priests of Life**
- **Ring of Scale**
- **Dark Reign**
- **Coldain** (dwarves of Velious)

Your character has a **faction score** with each of these groups, ranging from very low (KOS — Kill on Sight) to very high (Ally). This score changes based on your actions in the world.

---

## 📊 Faction Levels

Faction is tracked in tiers:

| Tier | Status | What It Means |
|------|--------|--------------|
| **Ally** | 🟢 Maximum positive | NPCs give you better prices, special dialogue, unique quests |
| **Warmly** | 🟢 Very positive | Full access to merchants and quests |
| **Kindly** | 🟢 Positive | Good standing, can use services |
| **Amiably** | 🟡 Slightly positive | Normal NPC interactions |
| **Indifferent** | ⚪ Neutral | Default for most players — vendors work, no quests |
| **Dubiously** | 🟡 Slightly negative | NPCs may give attitude; some may refuse services |
| **Apprehensively** | 🟠 Negative | Many NPCs refuse to talk or trade |
| **Threateningly** | 🔴 Hostile | NPCs will attack you if you approach |
| **KOS (Kill on Sight)** | 🔴 Maximum negative | NPCs attack you on sight, no interaction possible |

To check your faction with your current target:
```
/con
```
The `/con` command shows both the mob's difficulty AND your faction standing with it.

---

## 🎯 How Faction Changes

### Killing NPCs
Every time you kill an NPC, you:
- **Lose faction** with that NPC's faction group
- Often **gain faction** with their enemies

Example: Killing a **gnoll** in Blackburrow:
- ❌ Lose faction: **Sabertooth Gnolls**
- ✅ Gain faction: **Guards of Qeynos**, **Merchants of Qeynos**

This is the most common way faction shifts for leveling players — you're constantly fighting mobs that are enemies of the civilized races, which naturally keeps you in good standing with cities.

### Completing Quests
Turn-in quests reward **faction gains** with associated groups. Some quests exist entirely to help you rebuild or build faction:
- "Bring me 10 gnoll fangs" → Gain faction with Qeynos guards
- "Deliver this letter to the Temple" → Gain faction with the Priests of Life

### Race and Class Alignment
Your starting faction is determined partly by your **race** and **class**:
- A **Wood Elf** starts with good faction in Kelethin and allied cities
- A **Dark Elf** starts KOS to most "good" aligned cities
- A **Necromancer** starts with poor faction in temples and "good" cities regardless of race
- **Evil races** (Iksar, Troll, Ogre, Dark Elf) must work harder to use "good" faction cities

---

## 🌍 Faction and Cities

Different cities and their NPC factions have complex relationships. As a new player, the most important thing to know:

### Good-Aligned Cities (Welcome Good Races)
- **Qeynos** — welcomes Humans, Gnomes, Half-Elves, Halflings, Dwarves, Wood Elves, High Elves, Barbarians
- **Freeport** — more neutral; accepts most races but has dark corners
- **Kelethin** — Wood Elf city, friendly to elves and druids
- **Felwithe** — High Elf city, unfriendly to some races
- **Erudin** — Erudite city; scholars and wizards

### Neutral Cities
- **Freeport** — complex multi-faction city; guards may be hostile depending on your quests
- **Neriak** — Dark Elf city; evil faction, hostile to good races
- **Grobb** — Troll city

### Evil-Aligned Cities
- **Neriak, Grobb, Oggok, Cabilis** — hostile to most "good" players

> 💡 **As a new player, stick to cities that match your race's alignment.** If you're a Human from Qeynos, don't wander into Neriak — you'll be KOS immediately.

---

## 🔧 How to Check Your Faction

### /con While Targeting an NPC
```
/con
```
The response tells you their difficulty AND your faction:
> *"[Guard Duncan] regards you as an ally."*
> *"[Guard Duncan] looks at you threateningly."*

### The Faction Window (EQLive)
On EQLive, you can open a **Faction window** that lists your tracked faction standings. Open it through the EQ menu or by pressing **Alt+F** (varies by UI).

---

## ⚠️ When Faction Becomes a Problem

### KOS in a City You Need
If you did quests that hurt the wrong faction (common with Freeport if you did Militia vs. Corrupt Guard quests without understanding the consequences), city guards may attack you.

**Solutions:**
1. **Faction quests** — find NPCs who offer repeatable quests that restore your faction
2. **Invisibility** — sneak through the city while invisible (caster spell or Rogue skill)
3. **Disguise items** — some items change your appearance to a different race
4. **Illusion spells** — Enchanters and Druids can cast illusions that change your faction

### Dark Elf / Evil Race in Good Cities
Evil-race characters start KOS in most good cities. Common workarounds:
- **Illusion items** — make yourself appear as an approved race
- **High Charisma + sneak** (Rogues can sneak past guards)
- **Faction grinding** — do enough quests for that city to raise your standing
- Just stick to neutral/evil cities for vendors

---

## 🔄 Repairing Faction

If you accidentally destroyed your faction with an important group, you can repair it:

### Find a Faction Quest
Every major faction group has at least one repeatable quest designed for faction grinding:
- Turn in items (fangs, pelts, hides) repeatedly
- Each turn-in gives faction gain
- Tedious but effective

### Examples of Common Faction Repair Quests

| Faction | Quest | Turn-In Item |
|---------|-------|-------------|
| Guards of Qeynos | Gnoll Head quest | Gnoll Scalps |
| Merchants of Qeynos | Various | Common goods |
| Priests of Life | Various temple quests | Gems/items |
| Dark Elf factions | Various Neriak quests | Varies |
| Coldain (Velious) | Coldain Shawl quest series | Major reputation grind |

---

## 💡 Faction Tips for New Players

> 🗺️ **Stick to your home city at first.** As a new player, you'll naturally have good faction in the city that matches your race. Expand slowly.

> 🧐 **Always `/con` before killing named NPCs.** Some "named" NPCs in cities are quest-givers with important factions. Killing them by mistake can lock you out of content.

> 📖 **Research before doing quests in contested cities** (especially Freeport). Freeport has two rival factions — the **Militia** and the **Corrupt Guards** — and helping one hurts the other. Many new players accidentally make themselves KOS to one side without realizing it.

> 🧙 **Enchanters are the faction fix-it class.** Their illusion spells can make you appear as nearly any race, bypassing most faction checks. If you have an Enchanter friend, faction problems become much more manageable.

> 📋 **Keep notes on quests that affect faction.** If a quest description mentions faction consequences, note it. Faction damage from quest choices is one of the hardest things to undo.
