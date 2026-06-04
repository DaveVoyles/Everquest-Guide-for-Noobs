# EverQuest Macro Guide for New Players

---

## How EQ Macros Work

EverQuest macros are called **Socials**. They let you chain up to 5 slash commands that execute in sequence when you press a button.

### Creating a Social
1. **Right-click any hotbar slot** and choose **"Socials"** from the menu.
2. You'll see a grid of blank social slots — click one to open the editor.
3. Give your social a **Name** (this appears on the hotbar button).
4. Fill in up to **5 lines**, each a slash command.
5. Click **OK** — the social now lives on that hotbar slot.

You can also assign a **hotkey** by right-clicking the finished hotbar button and choosing "Change Hotkey."

### Key Syntax Rules

| Syntax | What it does |
|---|---|
| `%t` | Replaced with your current target's name |
| `/pause X` | Pauses `X/10` seconds (e.g. `/pause 30` = 3-second pause) |
| `/cast #` | Casts the spell in gem slot # (1–8) |
| `/doability #` | Activates a combat ability by its slot number in your Abilities window |

> **Tip:** `/pause` must be on its own line and counts as one of your 5 lines, so use it sparingly.

### Socials vs. /doability

- **Socials** are multi-line macros you build in the Socials window. They can combine any slash commands.
- **`/doability #`** triggers a single combat ability (like Taunt, Feign Death, or Kick) by its position in your Abilities (Alt+A) window. You can call `/doability` from inside a Social.

---

## Essential Solo Macros

### Assist + Attack
Targets whatever your target is targeting, then engages — great for assisting a tank.
```
/assist
/attack on
```

### Sit to Med (Quick Mana Regen)
Sits you down to regen mana faster and lets your group know you need a moment.
```
/sit
/say Medding - back in a moment
```

### Target + Loot Nearest Corpse
Finds and loots the closest corpse without clicking around.
```
/target corpse
/loot
```

### Gate Macro (Emergency Escape)
Casts your Gate spell to teleport back to your bind point. Adjust the slot number to match where Gate sits on your spell bar.
```
/cast 8
```
> **Note:** Gate is typically a long cast — don't get hit while casting or it will fizzle.

### Call for Help
Shouts to /ooc that you're in trouble, names your attacker via `%t`, and broadcasts your location.
```
/ooc HELP! %t has me at low health - /loc
/loc
```

### Check and Announce Your Location
Useful when asking for a port or telling your group where you are.
```
/say My location:
/loc
```

### Pet Attack Current Target
Orders your pet to attack and announces it to the group so they know it wasn't a mistake.
```
/pet attack
/say Sending pet on %t
```

### Pet Back Off + Sit to Med
Pulls your pet off and sits you down to recover after a fight.
```
/pet back off
/sit
```

### Full Emergency Macro (Necromancer — Feign Death)
Feigns death to drop aggro, waits 2 seconds, then sits to med.
```
/doability 1
/pause 20
/sit
```
> **Note:** Adjust `/doability 1` to match the slot Feign Death occupies in your Abilities window (Alt+A).

### Buffing Announcement Macro
Lets the zone know you're buffing and then casts your first spell slot.
```
/ooc Buffing - /tell me for buffs
/cast 1
```

### Group Pull Announcement
Warns your group a pull is incoming and starts your attack.
```
/gsay Pulling %t - stand by
/attack on
```

---

## 2-Boxing Macros (Playing Two Characters Simultaneously)

### What Is 2-Boxing?

2-boxing means running **two EverQuest accounts at the same time** — typically on two computers or two windows on the same machine. One character is your **main** (actively controlled), the other is your **box** (semi-automated).

- **EQLive (live servers):** Officially permitted — two accounts, two instances.
- **Project 1999:** Officially prohibited — check server rules before attempting.

**Common 2-Box Combos:**

| Combo | Why It Works |
|---|---|
| Warrior + Cleric | Survivable tank with a dedicated healer |
| Shadowknight + Shaman | Self-sufficient with buffs, slows, and lifetaps |
| Necromancer + Enchanter | DoTs + crowd control = extremely efficient XP |
| Magician + Bard | Pet DPS + mana/speed songs for sustained pulls |
| Druid + Anything | Ports, heals, snare, and versatility |

---

### Box Follow Macro
Place this on your **box's** hotbar. Replaces `<MainCharacterName>` with your main's actual name.
```
/follow <MainCharacterName>
```

### Box Assist Macro
Box targets and attacks whatever your main is currently attacking.
```
/assist <MainCharacterName>
/attack on
```

### Box Heal-on-Assist Macro (Cleric / Druid Box)
Box targets your main and immediately casts the heal in slot 1. Set slot 1 to your best available heal.
```
/assist <MainCharacterName>
/cast 1
```

### Box Buff Main Macro
Targets your main and casts the spell in slot 1 (set to your key buff — Clarity, Torpor, etc.).
```
/target <MainCharacterName>
/cast 1
```

### Box Cancel Follow + Stand Ground
Stops the box from following so it holds position (useful before a risky pull).
```
/stand
/face
```

### Box Pet Attack Assist (Mage / Necro Box)
Box assists your main's target and immediately sends its pet.
```
/assist <MainCharacterName>
/pet attack
```

### Announce Box Status in Group
Lets your group know what your box is doing.
```
/gsay [BOX] Following %t - ready to assist
```

### Stop Everything (Emergency)
Shuts down all aggro activity on the box instantly.
```
/attack off
/pet back off
/sit
```

---

## Tips for 2-Boxing

- **Keep the box's spell bar simple** — heals, buffs, and one nuke or DoT. Don't overcomplicate it.
- **Use a separate keyboard or programmable macro keys** for box commands so you don't lose control of your main.
- **Bind "Assist Main" to an easy key** on both machines so you can fire it reflexively.
- **Keep the box close** using `/follow` — if your main gets into trouble, the box needs to be nearby to act.
- **A Cleric box should auto-med** between pulls by putting `/sit` on an easily accessible key or binding it to a post-combat Social.
- **Watch your box's mana bar** — a box that runs out of mana mid-fight is a liability, not an asset. Med aggressively.
- **Start simple** — follow + assist + one heal button is all you need to learn 2-boxing. Add complexity gradually.
