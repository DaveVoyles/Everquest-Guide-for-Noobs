# 🗺️ Maps & Navigation in EverQuest

EverQuest's world is enormous, and navigation can be one of the biggest challenges for new players — especially since there are no quest arrows or GPS-style markers like modern MMOs. This guide covers the in-game map, the Find feature, and how to install vastly superior community maps.

---

## 🗺️ The In-Game Map

### Opening the Map
- Press **M** (default) to open the map window
- Or click the Map button in your UI

### What the Default Map Shows
- **Zone geometry** — walls, roads, and zone outlines
- **Your position** — shown as a moving marker
- **Waypoints you've set** — small markers you can place manually
- **NPC/player labels** — shown if they've been mapped in your map files

### Map Controls
| Action | How |
|--------|-----|
| Zoom in/out | Mouse wheel, or the +/– buttons on the map |
| Pan | Click and drag the map |
| Toggle player tracking | Click the compass/player icon |
| Toggle map layers | Some zones have multiple layers (e.g. dungeon floors) — use the layer dropdown |
| Show/hide labels | Right-click the map for display options |

### Map Limitations (Default)
The default EQ map files are sparse. Many zones have no geometry at all, and NPCs/vendors are rarely labeled. This is especially true on **Project 1999** and classic-era content. The community has solved this with third-party map packs — see below.

---

## 🔍 The Find Feature (EQLive)

The **Find** window is one of EQLive's most useful quality-of-life features. It lets you search for NPCs, vendors, bankers, and points of interest within the current zone — and draws a **glowing trail on the ground** leading you to them.

### Opening Find
- Press **Ctrl+F** (default)
- Or click the **Find** button on your map window (small magnifying glass icon)

### How to Use Find

1. Press **Ctrl+F** to open the Find window
2. A list of **known NPCs and locations** in the current zone appears
3. Type in the search box to filter — e.g. type "bank" to find the banker, "bind" to find a bindable location, "armor" for armor vendors
4. Click a result to **highlight it on the map**
5. A **glowing yellow/gold trail of lights** appears on the ground in the 3D world, leading you directly to the target
6. Follow the trail — it updates as you move

### What You Can Find
- **Merchants / Vendors** — search for weapon, armor, spell, or food vendors
- **Bankers** — find the nearest bank NPC
- **Guild Masters** — find your class trainer
- **Quest NPCs** — many named quest givers are listed
- **Zone Exits / Translocators** — helpful in large cities like Plane of Knowledge
- **Bindable locations** — search "bind" or "soulbinder"

> 💡 **Best use:** In large, confusing cities (Plane of Knowledge, Freeport, Qeynos, Shar Vahl), Find is absolutely essential. Open it the moment you arrive in a new city to locate vendors and services.

### Find Tips
- **Plane of Knowledge (PoK)** is the hub of EQLive and has almost every type of vendor and class book. Find is invaluable here.
- If a result doesn't appear, the NPC may not be in the current zone, or the map file may not have it labeled — this is where better map files (below) help.
- Find only works in the **current zone** — it won't help you locate things in other zones.
- On **P1999**, the Find feature is not available (classic client). You navigate by memory, asking other players, or using EQ Atlas.

---

## 📦 Installing Better Maps: Brewall's Map Files

The default EQ map files are minimal. **Brewall's Map Files** are a community-maintained, heavily annotated replacement that include:
- Accurate zone geometry for all expansions
- **Named / Hunter mob locations** (huge for achievement hunters)
- Merchant and vendor labels
- Quest NPC markers
- Collectable locations
- Zone line markers
- Multiple color-coded depth layers for complex dungeons

These maps transform navigation from guesswork into a genuine tool.

### Step 1: Download

Go to: **https://www.eqmaps.info/eq-map-files/**

Click the download link:
> **[Download Brewall's Map Files](https://www.eqmaps.info/wp-content/uploads/2024/01/brewall-20240109.zip)**

This downloads a `.zip` file (~latest version as of early 2024).

### Step 2: Unzip

Right-click the downloaded `.zip` file → **Extract All** (or use 7-Zip / WinRAR).

You'll get a folder full of `.txt` map files — one per EQ zone.

### Step 3: Find Your EQ Install Folder

The default EQLive install path is:
```
C:\Users\Public\Daybreak Game Company\Installed Games\EverQuest\
```

Inside that folder, find the **`maps`** subfolder:
```
C:\Users\Public\Daybreak Game Company\Installed Games\EverQuest\maps\
```

> If you installed EQ in a custom location, look there instead.

### Step 4: Create a Brewall Subfolder

Inside the `maps` folder, create a new folder called **`Brewall`**:
```
C:\Users\Public\Daybreak Game Company\Installed Games\EverQuest\maps\Brewall\
```

> ⚠️ **Do NOT paste the files directly into the main `maps` folder.** EverQuest overwrites 100 zones with default maps every time it launches, which would destroy any custom geometry and cause duplicate labels. Always use a subfolder.

### Step 5: Copy the Map Files

Copy all the unzipped `.txt` map files into your new `Brewall` folder:
```
C:\Users\Public\Daybreak Game Company\Installed Games\EverQuest\maps\Brewall\
```

### Step 6: Select Brewall Maps In-Game

1. Launch EverQuest and log in with a character
2. Open your **Map window** (press **M**)
3. In the **upper-left corner** of the map window, find the **dropdown box** (it likely says "Default" or your current map pack)
4. Click the dropdown and select **Brewall**
5. Your map will now display Brewall's detailed maps for every zone you visit

---

## 🏰 P1999 Maps

Project 1999 uses a different client and doesn't support the EQLive map system. Your options:

### EQ Atlas (Printable Maps)
- Website: **http://www.eqatlas.com**
- Classic, hand-drawn style maps of every original EQ zone
- Print them out or keep the browser open while you play
- Shows zone exits, dungeon layouts, and key NPC locations

### P1999 Wiki Maps
- The **P1999 Wiki** (https://wiki.project1999.com) has zone articles with maps embedded
- Search any zone name to find its map and NPC locations

### In-Game Map on P1999
P1999 does include a basic in-game map window, but it uses minimal default map files. You can supplement with community map files compatible with the P1999 client — check the P1999 forums for the latest community map pack.

---

## 🏢 Map Layers (Multi-Floor Dungeons)

Some zones — particularly multi-floor dungeons like Velketor's Labyrinth, Tower of Frozen Shadow, and Plane of Hate — have **multiple map layers** representing different floors or depth levels.

### Using Layers
- In the map window, look for a **layer selector** (usually a number or dropdown near the top)
- Switch layers as you move up/down in the dungeon
- Brewall's maps include **color-coded depth layers** that visually distinguish floors, making complex 3D dungeons dramatically easier to understand

---

## 🧭 Navigation Tips Without a Map

For zones with poor or no map coverage (common on P1999):

- **`/loc`** — shows your X, Y, Z coordinates. Write these down for important spots.
- **Zone guides on the P1999 Wiki** — most zones have walkthrough articles with landmark descriptions
- **Ask in `/ooc`** — "Where is the Butcherblock dock?" gets answered fast in an active zone
- **Follow the roads** — EQ zones often have roads leading to key locations and zone lines
- **EQ Atlas** — keep it open in a browser tab while you play

---

## Quick Reference

```
M               Open/close map window
Ctrl+F          Open Find window (EQLive only)
/loc            Show your current coordinates

Find tips:
- Type "bank"   → find the banker
- Type "bind"   → find soulbinder / bind point
- Type "spell"  → find spell vendors
- Type "guild"  → find guild master / class trainer

Brewall Maps install path:
  ...\EverQuest\maps\Brewall\   ← put files HERE (not in maps\ directly)
  In-game: Map window → top-left dropdown → select "Brewall"
```
