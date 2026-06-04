# 🖥️ EverQuest UI Scaling Guide (Including 4K / High-DPI Monitors)

---

## ⭐ #1 Tip: Just Set Windows to 1080p Before Launching

> **"I am on a 4K monitor, but found it is easiest to just set the monitor resolution to 1080P on the Windows desktop, THEN launch the game."**

This is the single most effective thing you can do. Skip the rest of this guide if you want — this one change fixes almost every UI scaling complaint on high-DPI monitors.

---

## ⚠️ The Problem: EQ's UI Was Built for Old Monitors

EverQuest's UI was designed in **1999** for 800×600 and 1024×768 monitors. Every button, window, and font was sized with those resolutions in mind.

On a **4K (3840×2160)** or **1440p** monitor, those same fixed-pixel UI elements become microscopic — chat text you can barely read, spell icons the size of a pinhead, and health bars you have to squint to see. EQ does **not** have native high-DPI scaling like modern games do. The engine simply doesn't support it.

---

## ✅ The Easiest Fix: Set Windows Resolution Before Launching

### 📐 Step-by-Step (Recommended for 4K Users)

1. Right-click your Windows desktop → **Display Settings**
2. Change your resolution to **1920×1080**
3. Click **Apply** and confirm
4. Launch EverQuest
5. The game will render at 1080p — the UI will be a normal, readable size
6. When done playing, change resolution back to your native 4K (3840×2160)

**Why this works:** EQ renders its UI at a fixed pixel size. At 4K, those pixels are physically tiny on screen. At 1080p, they're rendered at the size they were originally designed for — perfectly readable.

---

### 💡 Pro Tip: Automate It with a Shortcut or Batch File

Switching resolutions manually every session gets old fast. You can automate it:

- **QRes** — free command-line tool to change screen resolution
- **NirCmd** — free multi-tool that can change resolution, launch programs, and more

Example workflow with NirCmd:
```bat
nircmd.exe setdisplay 1920 1080 32
"C:\Path\To\EverQuest\eqgame.exe" patchme
nircmd.exe setdisplay 3840 2160 32
```

Save that as a `.bat` file and use it as your EQ launcher. It switches to 1080p, launches EQ, and restores 4K when EQ closes.

---

## 🎮 In-Game Resolution Settings

Once you're in-game, confirm EQ's internal resolution matches your Windows desktop:

- **Options → Display tab**
- Set the resolution to match your current Windows desktop resolution (e.g., 1920×1080)

### 🪟 Full Screen vs. Windowed vs. Windowed Fullscreen

| Mode | Pros | Cons |
|------|------|------|
| 🖥️ **Full Screen** | Best performance; captures mouse focus | Hard to alt-tab; bad for 2-boxing |
| 🪟 **Windowed** | Easy alt-tab; great for 2-boxing | Slightly lower performance; has window chrome |
| 🖥️🪟 **Windowed Fullscreen** | Clean look; easy to alt-tab | Mouse can escape to other monitors |

- **Solo players on a single monitor:** Windowed Fullscreen is a great compromise.
- **2-boxers:** Windowed mode so you can freely click between two clients.
- **Pure performance focus:** Full Screen.

---

## 🔧 Scaling the EQ UI Elements

### 🖱️ Moving and Resizing Windows

- **Left-click and drag** the title bar of any UI window to move it anywhere on screen.
- **Right-click** most windows for a context menu — look for **Lock/Unlock** to prevent accidental dragging.
- Many windows (inventory, spell gems, chat) have a small **resize handle at the bottom-right corner** — drag it to resize.

### 🎨 Font Size / UI Scale

- **EQLive:** Check **Options → Display** for a UI Scale slider (availability varies by client version).
- Individual window font sizes can often be changed by **right-clicking the window** → Font Size.
- For deeper control, you can edit the UI's XML files directly (see below).

---

## ⚙️ The eqclient.ini Tweaks

`eqclient.ini` is EQ's main configuration file. You can edit it in Notepad to control window size and mode.

**Default location:**
```
C:\Users\Public\Daybreak Game Company\Installed Games\EverQuest\
```
*(Or wherever your EQ is installed — look in your EQ folder.)*

**Key settings:**
```ini
[Defaults]
WindowedMode=TRUE          ; Run in windowed mode
WindowedWidth=1920         ; Set window width
WindowedHeight=1080        ; Set window height
```

> **Note:** Always close EQ before editing `eqclient.ini` — the game overwrites it on exit.

---

## 🎨 Recommended UI Layouts

### ✅ Default UI (Fine for 1080p)

If you followed the 1080p tip above, the default UI is perfectly usable. Stick with it until you're comfortable with the game before diving into customization.

### 🖌️ EQUI Custom UI Packs (EQLive)

EQLive supports fully custom UI packs. The community has created many designed for modern resolutions and readability.

**Where to find them:** [eqinterface.com](https://www.eqinterface.com)

**Popular UI packs:**
- **DuxaUI** — clean, modern look
- **Nillipuss UI** — popular, well-maintained
- **ROI UI** — designed specifically for readability and efficiency

**To install a custom UI:**
1. Download and extract the UI pack into a subfolder inside your EQ directory (e.g., `EverQuest\uifiles\MyCustomUI\`)
2. In-game: **Options → Display → UI** — select your UI from the dropdown
3. Click **Load UI Skin**

If a UI breaks after a patch, use **Options → Display → UI → Default** to revert to safety.

### 💡 Hotbar Placement Tips

- ⌨️ Move hotbars to the **bottom center** of the screen — muscle memory from modern games will thank you.
- 💬 Keep the **chat window large** enough to read without leaning forward. Resize it generously.
- 🔮 Keep the **spell gem bar** visible and away from your target/buff windows.
- 🖥️ **2-boxing in windowed mode on a 1080p desktop:** Run both clients at **960×1080** each, side by side, filling the screen.

---

## 🏰 P1999 Specific Notes

Project 1999 uses a modified classic EverQuest client with a few differences:

- Resolution is set in the **P1999 patchme/launcher settings**, not always in-game.
- The **1080p Windows desktop trick works exactly the same** — highly recommended.
- UI customization is more **limited** than EQLive; fewer custom UI packs are compatible.
- The classic UI is even more compact than modern EQLive — the 1080p trick matters even more here.

---

## 🛠️ Quick Troubleshooting

| Problem | Fix |
|---------|-----|
| 🔍 UI is tiny / unreadable | Set Windows desktop to 1080p **before** launching EQ |
| 🔧 Game launches in wrong resolution | Edit `eqclient.ini` — set `WindowedWidth` and `WindowedHeight` |
| 🪟 Windows overlap and can't be separated | Right-click the window → **Unlock**, then drag it away |
| 💬 Chat text too small | Resize the chat window larger; right-click it → Font Size |
| ⌨️ Hotbars disappeared | Right-click any existing hotbar → **Add Hotbar** |
| 🎨 UI reverted / broken after patch | Custom UIs can break on patches — revert to Default UI, then re-apply your custom one |
| 🖱️ Mouse stuck in game (full screen) | Switch to Windowed or Windowed Fullscreen mode |

---

*Last updated for EQLive and P1999 — tips may vary slightly across server versions.*
