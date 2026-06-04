# ⌨️ Hotkeys, Keybinds & Looting in EverQuest 🎮

Mastering EQ's hotkey system is the difference between surviving a chaotic fight and dying because you couldn't react fast enough. This guide covers targeting, looting, UI keybinds, and how to set up a hotbar that actually works.

---

## 🏃 Auto-Run

Auto-run lets you move forward hands-free — useful for long cross-zone runs.

| Key | Action |
|-----|--------|
| **Num Lock** | Toggle auto-run on/off (default) |
| **\`** (backtick) | Alternative auto-run key on some setups |

- Press **Num Lock** once to start running forward — you'll keep moving without holding any key
- Press it again (or tap **W/↑**) to stop
- You can still turn left/right while auto-running
- Rebind it via **Alt+O → Keys → "Auto Run"** if Num Lock is inconvenient

> 💡 **Tip:** Auto-run is great for zoning across long stretches (like the Commonlands), but be careful in dungeons — you'll run straight into mobs.

---

## 📦 Auto-Loot: How to Loot After a Kill

### 🖱️ Basic Looting
After killing a mob, its **corpse glows** and becomes clickable.

1. **Right-click the corpse** to open the loot window
2. Click individual items to loot them, or...
3. Click **"Loot All"** to grab everything at once

### 🔧 Auto-Loot Setting (EQLive)
EQLive has a built-in auto-loot option:
- Go to **Options** → **General** tab
- Enable **"Auto Loot"** — corpses will be looted automatically when you click them or when the loot window opens

### ⌨️ Looting via Hotkey
You can set a hotkey to open the nearest corpse loot window:
1. Open a **Hotbar slot** (right-click an empty slot → Assign)
2. Type the following in the text box:
   ```
   /loot
   ```
3. Press that hotkey after a kill to instantly open the loot window on your target's corpse

### 💀 Loot the Closest Corpse (without clicking it)
Target the corpse first using `/target` or nearest-target keys (see below), then `/loot`.

---

## 🎯 Targeting System

EQ's targeting can be awkward without the right setup. Here's what you need to know.

### 🖱️ Basic Targeting
- **Left-click** a mob or player to target them
- **Tab** — cycles through nearby targets (default; can be rebound)
- **F8** — targets the nearest NPC/mob **(most useful hotkey in the game)**
- **F7** — targets the nearest PC (player character)
- **Esc** — clears your current target

### 📋 Targeting Commands

| Command | What It Does |
|---------|-------------|
| 🎯 `/target <name>` | Target a specific mob or player by name |
| 💀 `/target corpse` | Target the nearest corpse (your own or others') |
| 🛡️ `/assist` | Target whatever your target is targeting (great for groups) |
| 🛡️ `/assist <name>` | Assist a specific player — target what they're fighting |

### 🔄 Cycling Targets
- **Tab** (default) cycles through targets in range
- You can rebind Tab to something more ergonomic (see Keybind section below)
- In a dungeon with many mobs, use **F8** to snap to the nearest enemy quickly

---

## ⌨️ Setting Up Hotbars

EQ has multiple **hotbars** (banks of 12 buttons each). You can have several visible at once.

### Opening a New Hotbar
- Right-click any hotbar → **Add Hotbar**

### Assigning a Hotkey Slot
1. Right-click an empty slot on the hotbar
2. Choose what type:
   - ⚔️ **Ability** — a combat skill or AA ability
   - 🪄 **Spell** — cast from your memorized spells
   - 📦 **Item** — use an item from your inventory
   - 📋 **Command** — a slash command (most flexible)
   - 💬 **Text** — sends a text macro

### 🔑 Essential Hotkeys to Set Up Immediately

| Hotkey | Type | What to Put In It |
|--------|------|-------------------|
| 🎯 Target Nearest Enemy | Command | `/target` (or use F8 natively) |
| 🛡️ Assist Main Tank | Command | `/assist <tankname>` |
| 🧘 Sit / Stand Toggle | Command | `/sit` |
| 📦 Loot | Command | `/loot` |
| 🔍 Consider Target | Command | `/con` |
| 💀 Target Corpse | Command | `/target corpse` |
| 📣 Call for Help | Command | `/ooc LFG, need help at /loc` |
| 🚪 Gate (emergency) | Spell | Your Gate spell (returns you to bind point) |
| 📍 My Bind | Command | `/loc` — shout your position |

---

## 🎯 Targeting Hotkeys: The Big Three

These three deserve dedicated, easy-to-reach keys:

### 1. 🎯 Target Nearest NPC (F8)
```
F8
```
Snaps to the closest mob. Use this constantly in combat to re-acquire targets or pick up a new mob after your current one dies.

### 2. 💀 Target Nearest Corpse
Set a hotkey with:
```
/target corpse
```
Instantly targets the nearest corpse for looting. Combine this with `/loot` on adjacent keys for fast looting after a fight.

### 3. 🛡️ Assist (Follow Tank's Target)
```
/assist <MainTankName>
```
Or just `/assist` if you have the tank targeted. Everyone in the group should be assisting the main tank — this ensures you're all hitting the same mob and not accidentally breaking mez.

---

## 🔧 Rebinding Keys (Options Menu)

You can customize nearly every keybind in EQ:

1. Open **Options** (press **Alt+O** or click the EQ button)
2. Go to the **Keys** tab
3. Scroll to find the action you want to rebind
4. Click the current key, press your new key

### 💡 Recommended Rebinds for New Players

| Action | Default | Suggested Rebind |
|--------|---------|-----------------|
| 🎯 Target Nearest NPC | F8 | Keep F8, or move to a mouse button |
| 👤 Target Nearest PC | F7 | Keep F7 |
| 🔄 Next Target | Tab | Keep Tab or use mouse wheel |
| ⚔️ Auto-Attack | A (hold) | Keep — but be careful not to toggle off in panic |
| 🧘 Sit/Stand | — | Set to **X** for quick medding |
| 🎮 Strafe Left/Right | , / . | Rebind to **Q** and **E** if using WASD |

---

## 📋 Useful Slash Commands to Macro

These are worth putting on your hotbar for quick access:

```
/loc                    — Shows your current X, Y, Z coordinates
/con                    — Checks the difficulty of your target
/who all <name>         — Finds any player on the server
/invite <name>          — Invites someone to your group
/disband                — Leaves your current group
/camp                   — Safely logs out (takes 30 seconds, use in a safe spot!)
/q                      — Quit immediately (risky — no safe logout, can get you killed)
/book                   — Opens your spellbook
/mp                     — Opens your map (EQLive)
/hidecorpse looted      — Hides corpses you've already looted (cleans up the screen)
/hidecorpse all         — Hides ALL nearby corpses (use carefully)
/shownames              — Toggles player/NPC name display overhead
/pet guard here         — Orders your pet to guard current location
/pet follow me          — Orders your pet to follow you
/pet attack             — Sends your pet to attack your current target
/pet back off           — Recalls your pet from combat
```

---

## 📦 Looting Tips & Etiquette

### ⚡ Speed Looting in a Group
- After a mob dies, the **group leader** or designated looter should loot quickly
- ⚠️ Don't wait too long — corpse decay is a real thing on classic servers
- Use `/hidecorpse looted` to clean up after a long camp session

### 💰 Master Loot vs. Free-For-All
Discuss loot rules when you join a group:
- 🟢 **Free For All (FFA)** — everyone can loot anything. Works for trash loot in casual groups.
- 🛡️ **Master Looter** — only one person (usually the leader) loots, then distributes
- 🎲 **Random** — type `/random 1 100` and highest roll wins a disputed item

### ✅ Loot Etiquette
- ❓ **Ask before you take** anything that isn't clearly vendor trash
- ❌ **Don't ninja loot** — taking items without group agreement is a serious reputation killer in EQ's tight-knit community
- 🤝 **Pass on upgrades others need more** — it comes back around

### 💀 Your Own Corpse
If you die, `/target corpse` then `/loot` will work if you can get back to your body. On P1999, your corpse persists for several hours — don't panic, but don't dawdle either.

---

## 📋 Quick Reference Card

```
=== COMBAT ===
F8              Target nearest mob
Tab             Cycle targets
/assist <name>  Attack what tank is attacking
A               Toggle auto-attack
Esc             Clear target

=== LOOTING ===
Right-click corpse  Open loot window
/loot               Loot targeted corpse
/target corpse      Target nearest corpse
/hidecorpse looted  Clean up looted bodies

=== MOVEMENT ===
W / ↑           Move forward
S / ↓           Move backward
Q / E           Strafe (if rebound)
X               Sit/Med (if rebound)

=== SOCIAL ===
/say            Talk nearby
/ooc            Zone-wide chat
/tell <name>    Private message
/gsay           Group chat
/who            See zone population

=== SURVIVAL ===
/loc            Show your coordinates
/bind           Set respawn point
/camp           Safe log out (30 sec)
/con            Check mob difficulty
```
