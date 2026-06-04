# 🤖 EverQuest Macro Guide for New Players 🎮

---

## 🎯 Target Cycling: Selecting the Right Enemy

Before any macro fires, you need the right target. EQ has several ways to cycle and select targets — mastering these is as important as any macro.

### 🔑 Default Target Keys

| Key | What It Does |
|-----|-------------|
| **F8** | Target the **nearest NPC/mob** — most useful key in the game |
| **F7** | Target the nearest **PC (player character)** |
| **Tab** | Cycle through nearby targets in order |
| **Esc** | Clear current target |
| **Left-click** | Click directly on a mob to target it |

### ♻️ Cycling Through Targets

**Tab** cycles through every targetable entity in range. By default it includes NPCs, players, and objects — which can be noisy in a busy zone.

**Recommended rebinds** (Options → Keys):
- Bind **"Target Next NPC"** to a mouse thumb button or `~` for fast cycling through mobs only
- Keep **F8** for snapping to the single nearest mob

### 🏹 Targeting by Name or Type

```
/target <name>         — Target by exact name (partial names work too)
/target corpse         — Target nearest corpse
/target npc            — Target nearest NPC (same as F8)
/target pc             — Target nearest player
/target pet            — Target nearest pet
```

Example: `/target a gnoll` targets the nearest mob whose name contains "gnoll".

### 🔁 Assist Targeting (Groups)

```
/assist                — Target what your current target is targeting
/assist <name>         — Target what a specific player is targeting
```

In a group: press your assist hotkey → your target becomes the tank's target → attack. This is the single most important targeting habit in group play.

### 💀 Target Your Own Corpse

```
/target corpse
```

After dying, this immediately selects your corpse so you can right-click it to loot your gear back. Put this on a hotbar slot.

---

## 📋 How EQ Macros Work

EverQuest macros are called **Socials**. They let you chain up to 5 slash commands that execute in sequence when you press a button.

### ⌨️ Creating a Social
1. **Right-click any hotbar slot** and choose **"Socials"** from the menu.
2. You'll see a grid of blank social slots — click one to open the editor.
3. Give your social a **Name** (this appears on the hotbar button).
4. Fill in up to **5 lines**, each a slash command.
5. Click **OK** — the social now lives on that hotbar slot.

You can also assign a **hotkey** by right-clicking the finished hotbar button and choosing "Change Hotkey."

### 🔑 Key Syntax Rules

| Syntax | What it does |
|---|---|
| `%t` | Replaced with your current target's name |
| `/pause X` | Pauses `X/10` seconds (e.g. `/pause 30` = 3-second pause) |
| `/cast #` | Casts the spell in gem slot # (1–8) |
| `/doability #` | Activates a combat ability by its slot number in your Abilities window |
| `/notify WndName BtnName leftmouseup` | Simulates clicking a UI button — used for auto-looting |

> 💡 **Tip:** `/pause` must be on its own line and counts as one of your 5 lines, so use it sparingly.

### ⚔️ Socials vs. /doability

- **Socials** are multi-line macros you build in the Socials window. They can combine any slash commands.
- **`/doability #`** triggers a single combat ability (like Taunt, Feign Death, or Kick) by its position in your Abilities (Alt+A) window. You can call `/doability` from inside a Social.

---

## 🎁 Auto-Loot Macros

### 📦 Basic: Target + Open Loot Window
Targets the nearest corpse and opens the loot window — you still click "Loot All" manually.
```
/target corpse
/loot
```

### ⚡ Advanced: Auto-Loot Without Clicking (Skip the Confirmation Window)

EQ's `/notify` command simulates clicking UI buttons. This sequence opens the loot window **and automatically clicks "Loot All"** — no mouse interaction needed:

```
/target corpse
/loot
/pause 5
/notify LootWnd LootAll leftmouseup
```

**How it works:**
- Line 1: Targets the nearest corpse
- Line 2: Opens the loot window
- Line 3: Waits 0.5 seconds for the window to load
- Line 4: Simulates clicking the "Loot All" button inside the loot window

> 💡 **Set this to a single easy key** (like `F`) — after every kill, tap it once and your loot is collected instantly.

> ⚠️ If the loot window fails to open (you're too far from the corpse, or nothing is left on it), the `/notify` line does nothing — it's safe to fire even on empty corpses.

### 🧹 Auto-Loot + Hide Corpse
Loots automatically, then hides the corpse to clean up your screen:
```
/target corpse
/loot
/pause 5
/notify LootWnd LootAll leftmouseup
/hidecorpse looted
```

> ⚠️ Five lines is the maximum. This macro uses all 5 — it won't fit anything else.

### 🔄 Loot All Nearby (Repeat Tapping)
There's no single macro to loop through multiple corpses, but binding your auto-loot macro to a fast key and tapping it repeatedly works well. Each press targets the next nearest corpse in sequence.

---

## 👤 Essential Solo Macros

### ⚔️ Target Nearest + Attack
Snap to the closest mob and start swinging in one keystroke:
```
/target npc
/attack on
```

### 🤝 Assist Main Tank + Attack
For groups — assists the tank and immediately engages:
```
/assist <TankName>
/attack on
```

### 🏃 Follow + Attack (Box or Groupmate)
Follow a player, then when you're near them, switch to attack their target:
```
/follow <PlayerName>
/assist <PlayerName>
/attack on
```
> 💡 **Note:** `/follow` and `/assist` are instant but `/follow` needs a moment to path. Use a pause if the box is frequently attacking before catching up: replace line 2 with `/pause 20` then add `/assist <PlayerName>` on line 3.

### 🧙 Sit to Med (Quick Mana Regen)
```
/sit
/say Medding - back in a moment
```

### 🚪 Gate Macro (Emergency Escape)
```
/cast 8
```
> Adjust slot number to match where Gate is memorized on your spell bar.

### ⚠️ Call for Help
```
/ooc HELP! Being attacked by %t
/loc
```

### 📍 Announce Your Location
```
/say My loc:
/loc
```

### 🐾 Pet Attack Current Target
```
/pet attack
/say Sending pet on %t
```

### 🐾 Pet Back Off + Med
```
/pet back off
/sit
```

### 💀 Feign Death + Med (Necromancer / Monk)
```
/doability 1
/pause 20
/sit
```
> Adjust `/doability 1` to the Feign Death slot in your Abilities window (Alt+A).

### 🪄 Buff Announcement
```
/ooc Buffing - /tell me for SoW or Clarity
/cast 1
```

### 🎯 Pull Announcement
```
/gsay Pulling %t - incoming!
/attack on
```

---

## ⚔️ Combat Sequence Macros

### Full Kill Cycle: Assist → Attack → Loot
Chain three separate hotkeys together mentally:
1. **Hotkey 1 — Engage:** `/assist <tank>` + `/attack on`
2. **Hotkey 2 — Kill confirmation:** (manual — watch mob die)
3. **Hotkey 3 — Loot:** `/target corpse` + `/loot` + `/pause 5` + `/notify LootWnd LootAll leftmouseup` + `/hidecorpse looted`

> EQ's 5-line limit means you can't put a full kill cycle in one macro — split it across two buttons.

### 🗡️ Warrior Combat Macro (Taunt + Bash)
Taunts to hold aggro then bashes. Adjust doability slot numbers to match your Abilities window.
```
/doability 1
/pause 5
/doability 2
```

### 🥷 Rogue Backstab Opener
Moves behind target, triggers backstab, announces to group:
```
/face
/doability 1
/gsay Backstabbing %t
```

### 🧙 Nuke + Announce (Wizard)
Casts your main nuke (slot 1) and tells the group:
```
/gsay Nuking %t
/cast 1
```

### 💊 Emergency Heal Self (Any Healer)
Targets yourself immediately and casts the heal in slot 1:
```
/target <YourName>
/cast 1
```
> Replace `<YourName>` with your character's actual name. This is faster than clicking your own portrait.

---

## 🔗 2-Boxing Macros (Playing Two Characters Simultaneously)

### 💻 What Is 2-Boxing?

2-boxing means running **two EverQuest accounts at the same time** — typically on two computers or two windows on the same machine. One character is your **main** (actively controlled), the other is your **box** (semi-automated).

- ✅ **EQLive (live servers):** Officially permitted
- ❌ **Project 1999:** Officially prohibited — check server rules

**Common 2-Box Combos:**

| Combo | Why It Works |
|---|---|
| 🛡️💊 Warrior + Cleric | Survivable tank with a dedicated healer |
| 🗡️🧙 Shadowknight + Shaman | Self-sufficient with buffs, slows, and lifetaps |
| 💀🧙 Necromancer + Enchanter | DoTs + crowd control = efficient XP |
| 🪄🎵 Magician + Bard | Pet DPS + mana/speed songs for sustained pulls |
| 🌿⚕️ Druid + Anything | Ports, heals, snare, and versatility |

---

### 🏃 Box Follow Main
Place on the **box's** hotbar. Keeps the box glued to your main:
```
/follow <MainName>
```

### ⚔️ Box Assist + Attack
Box targets and attacks whatever your main is currently fighting:
```
/assist <MainName>
/attack on
```

### ⚔️ Box Follow + Assist + Attack (All-in-One)
Great for a melee box that should stay near you and always fight your target:
```
/follow <MainName>
/pause 10
/assist <MainName>
/attack on
```

### 💊 Box Heal Main (Cleric / Druid Box)
Box targets your main and casts the heal in slot 1:
```
/target <MainName>
/cast 1
```

### 🪄 Box Buff Main
Targets main and casts the buff in slot 2 (e.g. Clarity, Haste, Symbol):
```
/target <MainName>
/cast 2
```

### 🐾 Box Pet Assist (Mage / Necro Box)
Box assists your main's target and sends the pet:
```
/assist <MainName>
/pet attack
```

### 🛑 Box Stop Everything (Emergency)
Instantly halts all box activity:
```
/attack off
/pet back off
/follow off
/sit
```

### 🧟 Box Auto-Loot After Kill
Run this on your box after mobs die to clean up corpses automatically:
```
/target corpse
/loot
/pause 5
/notify LootWnd LootAll leftmouseup
/hidecorpse looted
```

---

## 💡 Tips for 2-Boxing

- 🧙 **Keep the box's spell bar simple** — heals, one buff, one nuke. Don't overcomplicate it.
- ⌨️ **Use a programmable keypad** (like a Razer Tartarus or Logitech G13) for box commands so you don't fumble your main's controls.
- 🔑 **"Assist Main" is your most-used 2-box key** — put it somewhere you can hit without looking.
- 🏃 **Keep the box on `/follow` between fights** — if your main moves to a new camp, the box comes with you automatically.
- 💊 **A Cleric box should auto-med** — put `/sit` on a post-combat key so it recovers mana between pulls.
- ⚠️ **Watch the box's mana bar** — a healer box that goes OOM mid-fight is dangerous. Slow down pulls or let it sit longer.
- ✅ **Start simple** — follow + assist + one heal is all you need to learn 2-boxing. Add complexity over time.
