# 🎁 Looting in EverQuest

Looting seems simple — kill mob, take stuff — but EQ has a surprisingly deep set of rules, systems, and etiquette around it. This guide covers everything from clicking a corpse for the first time to advanced loot distribution in groups.

---

## 📦 The Basics: Looting a Corpse

When a monster dies, its **corpse appears on the ground** and glows slightly to indicate it's lootable. You have a limited window before it decays and the items are lost forever.

### Step-by-Step: Looting a Corpse

1. **Target the corpse** — left-click it, or use `/target corpse`
2. **Right-click the corpse** to open the **Loot Window**
3. The loot window shows all items and coin on the corpse
4. **Click individual items** to move them to your inventory, OR
5. Click **"Loot All"** to grab everything at once
6. Coin is taken automatically when you click Loot All

> 💡 If you can't right-click a corpse, you may be too far away. Walk right up to it — you need to be within melee range.

### Loot Window Layout

```
┌────────────────────────────────┐
│  Corpse of a gnoll             │
├────────────────────────────────┤
│  [Gnoll Fang]    [Banded Belt] │
│  [5 cp]  [2 sp]               │
├────────────────────────────────┤
│  [Loot All]      [Done]        │
└────────────────────────────────┘
```

- Click an **item slot** to pick up that item
- Click **Loot All** to take everything
- Click **Done** to close without looting

---

## ⏱️ Corpse Decay: Don't Wait Too Long

Corpses do not last forever. Once you loot everything (or the timer expires), the corpse disappears.

| Server Type | Approximate Decay Time |
|-------------|----------------------|
| EQLive | ~30 minutes (empty corpse despawns faster) |
| P1999 | Up to several hours for player corpses; NPC corpses decay faster after looting |

> ⚠️ On classic/P1999 servers, **player corpses persist longer** than NPC corpses, but NPC corpses can disappear in as little as a few minutes after being looted. Don't kill a mob and wander off — loot it promptly.

---

## 🤝 Who Can Loot? (Loot Rights)

### Solo Play
Simple: **you can always loot mobs you killed alone.**

### Group Play
In a group, **everyone in the group** can loot any mob the group killed — but this is governed by **loot rules** the group agrees on. See the [Group Loot Rules](#-group-loot-rules) section below.

### Loot Contests (No Group)
If two ungrouped players are fighting the same mob, loot typically goes to:
- The player who **dealt the most damage** (on most servers)
- Or whoever **clicks the corpse first** in ambiguous situations

This is why "kill stealing" (KS) is such a serious social offense in EQ — not only do you take the XP, but you may take the loot too.

### Loot Lockout Timers (EQLive Instanced Content)
In instanced zones on EQLive, each player has their own loot eligibility based on their participation. The game tracks who can loot what automatically.

---

## 📋 Group Loot Rules

Before settling into a camp with a group, establish loot rules. This prevents drama.

### Free For All (FFA)
- **Anyone can loot anything at any time**
- Common for casual grouping on trash mobs
- Works fine when everything is vendor trash
- Can get messy when something good drops

### Master Looter
- **Only one designated person** (usually the group leader) loots
- They distribute items to whoever needs them
- Reduces drama but requires a trusted leader
- Common in more organized groups

### Need / Greed / Pass
Less formalized in classic EQ, but the concept:
- If an item is a clear upgrade for someone, **ask before taking**
- "Does anyone need [Shiny Brass Shield]?" — if no one speaks up, you're good
- If two people want it, **roll for it** (see below)

### Rolling for Loot
```
/random 1 100
```
Everyone who wants the item types this. **Highest roll wins.** Simple, fair, universally respected.

> 💡 It's considered good form to acknowledge when you win a roll: "Nice, thanks for rolling" or "Thanks, this is a big upgrade for me." EQ has a strong social culture around loot.

---

## 🚫 Loot Etiquette: The Unwritten Rules

EQ's tight-knit community has strong opinions about loot. Violating these will follow your character's reputation for a long time.

### ✅ Always Do This
- **Ask before taking** any item that isn't clearly vendor trash
- **Pass on items your class can't use** — don't take a Robe of the Oracle as a Warrior
- **Announce good drops in group chat**: "Nice, [Flowing Black Silk Sash] dropped — anyone need?"
- **Wait for the looter** in a Master Looter group — don't click the corpse yourself
- **Be honest about upgrades** — if something is only a minor upgrade for you but a massive upgrade for someone else, pass

### ❌ Never Do This
- **Ninja loot** — taking items without group knowledge or consent. This is one of the worst things you can do in EQ. People **remember** and will warn others on the server.
- **Loot over someone else's tagged mob** if you're not in their group
- **Take rare drops without asking** in a casual group ("I'm just gonna take this 500pp item, bye")
- **Lie about needing an item** to win a roll, then sell it immediately

> ⚠️ **EQ servers are small communities.** A ninja looter's name spreads quickly. On P1999 especially, your reputation is everything — a bad reputation can make it nearly impossible to get groups or guild invites.

---

## 🧹 Managing Corpses and Clutter

After an intense fight, corpses pile up and become visual noise. EQ gives you tools to clean this up.

### Hide Looted Corpses
```
/hidecorpse looted
```
Hides all corpses you've already fully looted. **Use this constantly** — it keeps your camp clean and makes it easier to see what still needs looting.

### Hide All Corpses
```
/hidecorpse all
```
Hides ALL nearby corpses regardless of loot status. **Use with caution** — you might hide corpses that still have loot.

### Show All Corpses Again
```
/hidecorpse none
```
Restores visibility of all corpses.

> 💡 **Best practice:** Use `/hidecorpse looted` after each kill cycle rather than `/hidecorpse all`. You'll never accidentally hide something you forgot to loot.

---

## 💀 Your Own Corpse: Death Looting

When **you** die, you drop a corpse — and in classic EQ, **your entire inventory is on that corpse**. You spawn at your bind point with only your coins.

### Retrieving Your Own Corpse

1. Run back to where you died (the infamous **corpse run**)
2. Target your corpse: `/target corpse` or just click it
3. Right-click and loot your own gear back
4. You can loot your own corpse for free — no competition

### Important: Your Corpse Has a Location
Your corpse stays exactly where you died. If you died in the middle of a dungeon:
- Other players can **drag your corpse** to the entrance for you (`/corpse` command while next to it)
- A Necromancer or Shadowknight can **summon your corpse** to you with the Sense the Dead / Call of the Bones line of spells

### Corpse Summoning (Necromancer / EQLive)
On EQLive and with a helpful Necromancer on P1999:
```
/summon corpse
```
(Or the Necromancer casts the corpse-summoning spell on your behalf)

This pulls your corpse to your current location — critical if you died deep in a dungeon and can't safely retrieve it.

### Corpse Decay and Item Loss
- Player corpses persist for a long time (hours on P1999, varies on EQLive)
- **If a player corpse decays before you loot it, the items are gone forever**
- Don't panic — but do get back to it within a reasonable time
- You can ask a GM for corpse restoration in truly extreme cases (rare, not guaranteed)

---

## 🏹 Ranged Ammo and Loot

If you use a bow or throwing weapons:
- **Arrows and bolts** are consumed on use — they vanish when fired
- Some ammo types are **retrievable** (notably some thrown weapons) — check the item description
- Factor ammo cost into your expenses as a Ranger or Bard using ranged weapons

---

## 💎 Identifying Loot Value

Not all loot is equal. Quick guide to assessing what you found:

| Drop Type | What to Do |
|-----------|-----------|
| **Coin (cp/sp/gp/pp)** | Auto-looted — keep it |
| **Common armor/weapons** | Check stats vs. your gear; vendor if no upgrade |
| **Items with `NO DROP` flag** | Can't be traded — either equip it or destroy it |
| **Items with `LORE` flag** | Can only have one — equip or destroy if you already have one |
| **Items marked `QUEST`** | May be needed for a quest — check before vendoring |
| **Unknown `?` items** | Get them **Identified** before deciding |
| **Named mob drops** | Look them up on EQ wiki/Allakhazam BEFORE vendoring |
| **Tradeskill components** | Often worth more selling to players than to vendors |
| **Spell scrolls** | Check if any group member or class can use them — sell to players |
| **Gems** | Usually vendor fodder, but some have tradeskill uses — verify |

---

## 🔑 Advanced: Loot on EQLive

EQLive has added several modern convenience features:

### Advanced Loot Window
On EQLive (post-Rain of Fear era), you can enable the **Advanced Loot Window**:
- Type `/advloot` to toggle it
- Shows all lootable corpses in the area in one consolidated list
- Assign items to **Need**, **Greed**, or **Pass** for automated distribution
- Each group member's rolls happen automatically
- Much faster for high-volume farming

### Auto Loot
In Options → General → enable **Auto Loot**:
- Automatically opens the loot window when you click a corpse
- Can be set to auto-grab coins even if you don't take items

### Loot Filters
In Options, you can set filters to **automatically loot** certain item types (e.g., always auto-loot coin, never auto-loot NO DROP items, etc.)

---

## ⚡ Quick Loot Reference

```
Right-click corpse       Open loot window
Loot All button          Take everything at once
/target corpse           Target nearest corpse
/loot                    Open loot window on targeted corpse
/hidecorpse looted       Hide already-looted corpses
/hidecorpse all          Hide all corpses
/hidecorpse none         Show all corpses again
/random 1 100            Roll for a contested item
/advloot                 Toggle advanced loot window (EQLive)
```
