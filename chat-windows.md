# 💬 Chat Windows & Filters in EverQuest

EverQuest's chat system is one of its most powerful features — and one of the most confusing for new players. By default, everything goes into one chaotic window: combat spam, group chat, tells, spell messages, loot notifications, and experience messages all jumbled together. This guide shows you how to tame it.

---

## 🤔 Why Multiple Chat Windows?

A single chat window fills up so fast during combat that you'll miss tells, miss group chat, and have no idea what's actually happening socially. The solution is to **split your chat into purpose-built windows**, each showing only what matters for that context.

**The core problem with one window:**
- 🔴 A friend sends you a `/tell` — you miss it because 40 combat messages just scrolled past
- 🔴 Your group asks a question — buried under melee hit spam
- 🔴 You can't tell if you got a skill-up or a loot drop without scrolling back
- 🔴 Zone `/ooc` and `/auction` chatter drowns out everything else

---

## 🪟 How Many Windows Should You Have?

**Recommended: 3–4 windows** for most players. Here's the sweet spot:

| Window | Purpose |
|--------|---------|
| 🗣️ **Main Chat** | Social channels — `/say`, `/tell`, `/group`, `/guild`, `/ooc` |
| ⚔️ **Combat** | Melee hits, spell damage, misses, resists, deaths |
| 📢 **Zone/Trade** | `/shout`, `/auction`, zone announcements |
| 📋 **Spam/System** | Skill-ups, experience messages, loot, system messages (optional — can go in combat) |

> **2-boxers** may want a 5th window on the box character showing only `/tells` so you don't miss messages to the box.

---

## 🔧 How to Create a New Chat Window

1. **Right-click** any existing chat window tab
2. Select **"Create New Chat Window"** (or **"Add Tab"** depending on your EQ version)
3. A new floating window appears
4. Give it a name by right-clicking its tab → **"Rename Tab"**
5. **Filter** it (see below) to control what appears

Alternatively:
- Right-click a tab → **"Undock"** to pull it into its own floating window
- Drag tabs to reposition them

---

## 🎛️ Setting Chat Filters (What Goes In Each Window)

This is the most important step. EQ has dozens of filter categories you can toggle per window.

### How to Open the Filter Settings

1. **Right-click** the chat window you want to configure
2. Select **"Filter"** or **"Message Filter"** from the menu
3. A filter panel opens — check/uncheck categories for this window

You can set each category to:
- ✅ **Show** — display in this window
- ❌ **Hide** — suppress entirely (careful — you may miss important info)
- Or just toggle it off for that window and on for another

---

## 🗣️ Window 1: Main Chat (Social)

**What to show here:** All the social, personal, and group communication you actually need to read.

| Filter Category | Include? | Notes |
|----------------|----------|-------|
| `/say` | ✅ Yes | Local conversation |
| `/tell` (incoming) | ✅ Yes | **Critical** — never miss a tell |
| `/tell` (outgoing) | ✅ Yes | See your own tells for context |
| `/group` (`/gsay`) | ✅ Yes | Your group chat |
| `/guild` | ✅ Yes | Guild chat |
| `/fellowship` | ✅ Yes | Fellowship channel |
| `/ooc` | ✅ Yes | Out of Character zone chat |
| `/shout` | ⚠️ Optional | Can be spammy; consider window 3 |
| `/auction` | ❌ No | Move to Trade window |
| General/custom channels | ✅ Yes | Any `/join`ed channels |
| System messages | ❌ No | Move to Spam/System window |
| Combat messages | ❌ No | Move to Combat window |

> 💡 **Tip:** Make this window large and keep it where your eyes naturally rest. You need to see tells and group chat instantly.

---

## ⚔️ Window 2: Combat

**What to show here:** Everything that happens during a fight — but you don't need to read this closely in real time. It's mostly for post-fight review or noticing procs/resists.

| Filter Category | Include? | Notes |
|----------------|----------|-------|
| Melee hits (you hitting) | ✅ Yes | Your swings |
| Melee hits (hitting you) | ✅ Yes | Enemy attacks |
| Spell damage (you) | ✅ Yes | Your nukes/DoT ticks |
| Spell damage (others) | ✅ Yes | Groupmates casting |
| Spell resists | ✅ Yes | Know when spells fail |
| Combat abilities | ✅ Yes | Kicks, backstabs, procs |
| Pet messages | ✅ Yes | Pet attacks, pet death |
| Death messages | ✅ Yes | Know when someone/something dies |
| XP messages | ⚠️ Optional | Can go here or Spam window |
| Loot messages | ⚠️ Optional | Can go here or Spam window |
| `/say` | ❌ No | Stays in Main Chat |
| `/tell` | ❌ No | Stays in Main Chat |
| `/group` | ❌ No | Stays in Main Chat |

> 💡 **Tip:** Make this window smaller than Main Chat. You glance at it, not read it. Position it below or beside your main chat window.

---

## 📢 Window 3: Zone / Trade

**What to show here:** Zone-wide chatter that's useful but shouldn't interrupt social or combat windows.

| Filter Category | Include? | Notes |
|----------------|----------|-------|
| `/ooc` | ✅ Yes | Zone social/trade chatter |
| `/shout` | ✅ Yes | Zone announcements |
| `/auction` | ✅ Yes | People selling items |
| `/say` | ❌ No | Keep in Main Chat |
| Combat | ❌ No | Keep in Combat window |

> 💡 **Tip:** On P1999, `/auction` in the East Commonlands tunnel is THE marketplace. This window is how you catch deals. Keep it visible when shopping.

---

## 📋 Window 4: Spam / System (Optional but Recommended)

**What to show here:** Informational noise that you want logged but don't need front-and-center.

| Filter Category | Include? | Notes |
|----------------|----------|-------|
| Experience gained | ✅ Yes | Satisfying to see — keep it here |
| Skill-up messages | ✅ Yes | "Your skill in 1H Slashing has increased" |
| Loot messages | ✅ Yes | What you and others looted |
| Spell memorization | ✅ Yes | "Beginning to memorize..." |
| Zoning messages | ✅ Yes | Entering/leaving zones |
| System messages | ✅ Yes | Server notices, GM messages |
| Food/drink messages | ✅ Yes | "You are no longer hungry" |
| Random flavor text | ✅ Yes | Zone flavor, ambient messages |
| Combat | ❌ No | Keep in Combat window |
| Tells | ❌ No | Keep in Main Chat |

> 💡 **Tip:** Make this the smallest window. You check it occasionally but don't monitor it live.

---

## 🔤 Adjusting Chat Text Size

EQ lets you change font size independently per chat window.

### Method 1: Right-Click → Font Size (EQLive)
1. **Right-click** inside the chat window
2. Look for **"Font Size"** or **"Text Size"** in the menu
3. Select your preferred size (options vary: Small, Medium, Large, or specific point sizes)

### Method 2: Mouse Wheel on Chat Window
- On some UI versions, hold **Ctrl** and scroll the mouse wheel while hovering over a chat window to resize text

### Method 3: UI Options
1. Press **Alt+O** → **Display** tab
2. Look for Chat Font settings
3. Adjust globally or per-window depending on your EQ version

### 💡 Font Size Tips
- **4K / High-res monitor users:** Bump font to Large or the biggest option. Even at 1080p, the default font is small during busy combat.
- **Main Chat window:** Use a larger font — you need to read tells quickly
- **Combat window:** Use a smaller font — it's high-volume and you're just skimming
- **Spam window:** Smallest font is fine — you rarely need to read this in real time

---

## 🎨 Chat Text Colors

EQ color-codes different message types to help you distinguish them at a glance:

| Message Type | Default Color |
|-------------|--------------|
| `/say` | White |
| `/tell` (incoming) | Light Purple / Magenta |
| `/tell` (outgoing) | Dark Purple |
| `/group` | Cyan / Light Blue |
| `/guild` | Green |
| `/ooc` | Blue-Green |
| `/shout` | Red |
| `/auction` | Green-Yellow |
| Combat (you hit) | White/Light |
| Combat (you're hit) | Reddish |
| Spells | Yellow/Orange |
| System messages | Gray |
| XP gain | Cyan |

> You can customize these colors in **Options → Colors** (EQLive) by clicking on a message type and picking a new color.

---

## 📐 Recommended Layout

Here's a practical window arrangement for 1080p:

```
┌──────────────────────────────────────────┬──────────────────┐
│                                          │  ⚔️ COMBAT        │
│                                          │  (smaller,        │
│           3D Game World                  │   scrolling fast) │
│                                          │                   │
│                                          ├──────────────────┤
│                                          │  📢 ZONE/TRADE    │
│                                          │  /ooc /shout      │
│                                          │  /auction         │
├──────────────────────────────────────────┴──────────────────┤
│  🗣️ MAIN CHAT (large, easy to read)                          │
│  /say /tell /group /guild — LARGEST FONT                     │
├─────────────────────────────────────────────────────────────┤
│  📋 SPAM (small, narrow) — XP, skill-ups, loot, system       │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚡ Quick Setup Checklist

- [ ] Create **Main Chat** window → enable: say, tell, group, guild, ooc, fellowship
- [ ] Create **Combat** window → enable: melee, spell dmg, resists, abilities, pet, deaths
- [ ] Create **Zone/Trade** window → enable: ooc, shout, auction
- [ ] Create **Spam** window → enable: XP, skill-ups, loot, system, zoning
- [ ] **Disable** combat/system spam from Main Chat
- [ ] **Disable** tells/group from Combat window
- [ ] Set **larger font** on Main Chat, smaller on Combat and Spam
- [ ] **Lock** windows once positioned (right-click → Lock Window)
- [ ] On P1999: keep Zone/Trade visible whenever in EC tunnel or PoK

---

## 💾 Saving Your Layout

Your chat layout is saved per-character in:
```
<EQ Folder>\<CharName>_<Server>_UI.ini
```

This file is created automatically. If you want to **copy your layout to another character**, copy this file and rename it for the new character/server combination.

> ⚠️ If EQ ever resets your windows, it's usually because this file got corrupted or was overwritten. Keep a backup!
