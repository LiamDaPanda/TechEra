# Tech Era: The Complete Guide

This guide covers all five eras, from a peasant in a timber fort to the plasma rifle, plus
reference tables for every machine, weapon, armour set and vehicle. The numbers are the
defaults; server owners can change them in `config/techera.json`.

**Beating Tech Era** means building the **Time Machine** in Era V and going home. That's the end
of the story: the server hears about it, your team gets the ending, and its name tag turns to
`[✦]`. Your world carries on afterwards. For completionists there's also the advancement tab
(press **L**, then open the *Tech Era* tab).

**Want sharper visuals?** The mod ships with an optional **Tech Era HD** resource pack that redraws
every machine, tool and armour piece at 32x, with shading, depth and glowing energy parts. Turn it
on in **Options > Resource Packs**: move *Tech Era HD* to the right-hand side and click Done. It needs
no download and works on servers too, because textures are client side.

## Contents

1. [How progress works](#how-progress-works)
2. [Heat, bellows and quality](#heat-bellows-and-quality)
3. [Your first night](#your-first-night)
4. [Era I: Medieval](#era-i-medieval-c-10001400)
5. [Era II: Gunpowder](#era-ii-gunpowder-14001700)
6. [Era III: Industrial](#era-iii-industrial-17001900)
7. [Era IV: Modern](#era-iv-modern-19002000)
8. [Era V: Futuristic](#era-v-futuristic-2000)
9. [Shopping list for every era gate](#shopping-list-for-every-era-gate)
10. [Reference tables](#reference-tables)
11. [Power and automation](#power-and-automation)
12. [Multiblock machines](#multiblock-machines)
13. [Raids and defences](#raids-and-defences)
14. [Inventions, rifts and the monument](#inventions-patents-masterworks-and-the-monument)
15. [Teams and multiplayer](#teams-and-multiplayer)
16. [Advancements](#advancements)
17. [Troubleshooting and FAQ](#troubleshooting-and-faq)
18. [Server settings](#server-settings)
19. [Speedrun checklist](#speedrun-checklist)
20. [Recipe index](#recipe-index)

---

## How progress works

- **No XP and no research tree.** You learn by doing:
  - **Making an item for the first time** unlocks the recipes that use it. For example, your
    first wrought iron ingot unlocks wrought iron tools.
  - **Salvaging** enemy gear on the forging anvil teaches you how to make it.
  - **Entering a new era** unlocks that era's basic recipes all at once.
- **Locked recipes** leave the crafting result slot empty. If a recipe "doesn't work", you
  haven't unlocked it yet. Learned recipes go into your recipe book automatically.
- **Machine recipes:** hover the **?** in the top-right corner of any machine's screen to see
  everything it can make (inputs, output and the heat it needs). It only lists recipes your team
  has unlocked.
- **The Yankee's Notebook** (right-click it) shows sketches for your current and past eras:
  - ✔ means you have learned it;
  - ? means you haven't, and the sketch hints at how to learn it.
  - Future eras stay hidden until you reach them.
- **The quest book:** open the notebook and click the **Quests** tab. Each era has a handful of
  quests (25 in all) that walk you through it, from "make 16 charcoal" to "go home". Progress is
  shared by your team, item quests show a counter, and each quest pays a reward toward the next
  step. Quests for future eras stay hidden.
- **Eras change at gate machines.** Each era has one. Run its recipe **8 times** to enter the
  next era. Each run prints a progress message, for example "(3/8 runs toward a new era)".
- **Teams:** era, recipes and gate runs are shared by your team. Players on no team share one
  world-wide team.
- **Your tools follow the eras, not Minecraft's tiers.** Wrought iron and then steel replace
  iron and diamond: a steel pickaxe mines everything, obsidian included. You never need the
  Nether or the End.
- **Vanilla technology arrives in its historical era:**

| Era | Vanilla items it unlocks |
|---|---|
| I   | wrought iron lets you smelt plain iron, so buckets, hoppers, shears, flint and steel, and iron tools |
| II  | TNT, spyglass |
| III | pistons, rails, minecarts, blast furnace |
| IV  | observers, comparators, daylight sensors, redstone lamps, the crafter, and diamond tools and armour |

| To reach | Gate machine | Gate recipe | Revealed by |
|---|---|---|---|
| Era II  | Powder Mill          | 2 saltpetre + sulphur + charcoal → 4 gunpowder | your first steel ingot |
| Era III | Coke Oven            | 2 coal → 1 coke | your first cast iron |
| Era IV  | Dynamo               | 4 copper + steel → electric motor | your first breech-loading rifle |
| Era V   | Particle Accelerator | 2 motors + 8 redstone + circuit board → exotic matter | your first automatic rifle |

---

## Heat, bellows and quality

- **Heat:** machines with a heat gauge only make progress while heat is at or above the
  recipe's minimum. A marker on the thermometer shows that minimum, and it turns green once you
  reach it. Without fuel, heat drifts back down to 20 °C.
- **Fuel caps heat.** Each fuel can only reach so hot:

| Fuel        | Max heat | Max with bellows | Burn time | Clean? |
|-------------|----------|------------------|-----------|--------|
| Planks      | 650 °C   | 900 °C           | 15 s      | yes    |
| Logs        | 700 °C   | 950 °C           | 15 s      | yes    |
| Charcoal    | 1150 °C  | 1400 °C          | 80 s      | yes    |
| Coal        | 1150 °C  | 1400 °C          | 80 s      | **no** (gives Poor metal) |
| Coal block  | 1150 °C  | 1400 °C          | 800 s     | **no** |
| Coke        | 1450 °C  | 1700 °C          | 160 s     | yes    |

- **Hand Bellows:** right-click a machine with them to add **+250 °C** to its cap. Each pump
  lasts 2 s, and pumps stack up to 10 s, so pump a few times and then watch. The bellows wear
  out after 256 pumps.
- **Power** (Era III and later) adds another **+100 °C** and doubles machine speed.
- **Quality** (Poor, Standard or Fine) comes from the fuel and the hottest point of the run:
  - Dirty fuel (coal) gives **Poor**.
  - Reaching **the recipe minimum + 120 °C** gives **Fine**.
  - Anything else gives **Standard**.
- **Quality carries forward.** A crafted tool or armour piece is only as good as its worst
  ingredient. One Poor ingot in a Fine pickaxe makes the whole pickaxe Poor.
- **Quenching** a tool locks its quality in:
  - Fine gets +25% durability and +1 attack.
  - Poor gets −20% durability and −1 attack.
  - Standard stays as it is.

**Getting Fine metal:**

| Recipe | Minimum | Fine at | How to get Fine |
|---|---|---|---|
| Bloomery (iron bloom) | 1200 °C | 1320 °C | charcoal + bellows |
| Forge (hot bloom)     | 900 °C  | 1020 °C | charcoal, no bellows needed |
| Forge (steel)         | 1200 °C | 1320 °C | charcoal + bellows |
| High furnace (cast iron) | 1350 °C | 1470 °C | **coke** + bellows (charcoal tops out at 1400 °C) |
| Bessemer (steel)      | 1500 °C | 1620 °C | coke + bellows |

Tip: once you have coke, a bloomery or forge reaches 1450 °C **without** bellows, which is
Fine every time.

---

## Your first night

You wake in the hill fort with an empty inventory and the notebook. The tutorial in the
top-left corner covers the first nine steps.

1. Punch **4 logs** from the trees outside the walls.
2. Use the **crafting table** in one of the huts to make wooden tools, then a stone pickaxe.
3. Step inside each of the **three huts** (a tutorial step).
4. Kill a cow or two for **leather**; you need it for the hand bellows.
5. Before dark, craft **palisade stakes** (2 sticks + 3 logs give 3) and put them across the
   gate. Raiders come after a few nights, and the stakes slow and hurt them.
6. Mine a little **coal** (surface cliffs and caves) and craft **torches**. You light the
   charcoal mound with a torch.
7. Start a **charcoal mound**. It is the first thing everything else needs.

Leather and **clay** (riverbeds) are the two things new players most often forget.

---

## Era I: Medieval (c. 1000-1400)

### 1. Starter tools
```
Tongs           Smithing Hammer     Hand Bellows        Palisade Stakes (x3)
S . S           C C C               P L P               S . S
. S .           C S C               P L P               L L L
S . S           . S .               . S .
S = stick       C = cobblestone     P = planks          S = stick
                S = stick           L = leather         L = log
                                    S = stick
```

### 2. Charcoal (Charcoal Mound)
```
D D D     D = dirt
D L D     L = log
D D D
```
1. Place the mound and put logs in it.
2. **Bury it:** cover the top and three sides with dirt (another mound also counts). Leave
   **one side open** as a vent.
3. **Light it** through the vent with a **torch**. The torch isn't used up. Flint and steel or
   a fire charge work too.
4. **Seal the vent with dirt within 10 seconds**, or the fire goes out.
5. Wait. Each log becomes 1 charcoal, at about 10 s per log, and only while fully sealed.
6. **Collect it:** dig the vent open again, or put a hopper underneath to collect it without
   opening the mound.

Tip: two mounds side by side can share a wall. Make lots of charcoal; the bloomery, forge,
powder mill and high furnace all eat it.

### 3. Iron bloom (Bloomery)
```
S C S     S = cobblestone
C . C     C = clay ball
S S S
```
- **Ore:** bog iron, raw iron, iron ore or deepslate iron ore.
  - **Bog iron** is found in **swamps and mangrove swamps**, in the topsoil at Y 54-68. You can
    dig it with a stone shovel, with no mining trip needed.
- **Recipe:** 1 ore + 2 charcoal in the inputs, and charcoal in the fuel slot.
- **Heat:** it needs **1200 °C**, but charcoal stops at 1150 °C, so **pump the hand bellows**.
- **Output:** an **iron bloom**, plus **slag**. Keep the slag for composite plates in Era IV.
- Don't bother with a vanilla furnace: smelting iron there only gives a *Poor* bloom.

### 4. Wrought iron (Forge + Forging Anvil)
```
Forge                    Forging Anvil
S S S   S = cobblestone   S S S   S = stone (smooth, not cobble)
S C S   C = charcoal      . S .
B B B   B = brick         S S S
```
1. **Forge:** put the iron bloom in with charcoal fuel. At **900 °C** it becomes a **hot iron
   bloom** (12 s).
2. **Hold tongs** in either hand while you carry the hot bloom, or it burns you. It cools back
   into a normal bloom after 60 s, keeping its quality, so you can reheat it.
3. **Anvil:** put the hot bloom in the forging anvil, then **right-click the anvil with the
   smithing hammer 6 times**. You get a **wrought iron ingot**.

Place the forge and the anvil next to each other so the hot bloom never has far to go.

Your first wrought iron unlocks wrought iron tools, the spear, the iron-rimmed shield and
carburizing (steel). It also unlocks the vanilla iron tools.

**Wrought iron as vanilla iron:** smelt a wrought iron ingot in a vanilla furnace to get a
plain **iron ingot**. That's how you make buckets (for the quench barrel's water bucket),
hoppers, pistons, shears, rails and flint and steel.

### 5. Steel (Forge again)
- 1 wrought iron + 2 charcoal at **1200 °C or more** (bellows) gives a **steel ingot** (40 s).

Your first steel unlocks:
- the **steel tools**, sword and spear;
- the **Nitre Bed** and **Powder Mill**, the Era II gate.

### 6. Tools and quenching
- Tools and armour use the normal vanilla shapes, with wrought iron or steel ingots.
- **Quench Barrel:** barrel + water bucket (shapeless). Get the bucket's iron by smelting
  wrought iron ingots.
- **To quench a tool,** right-click the barrel while holding it, or put it in the barrel's GUI
  (3 s).
- Quench your **steel sword** to finish the tutorial.

### 7. Salvage (optional, but useful)
Put enemy gear in the forging anvil and hammer it:
- **Iron or chainmail armour** gives 2 wrought iron and teaches **wrought iron armour**.
- **Iron tools** give 1 wrought iron.
- **A crossbow** gives sticks and teaches the **crossbow**.

Raiders drop their gear 35% of the time, so every raid is a salvage opportunity.

### 8. Gate to Era II: the Powder Mill
```
Nitre Bed               Powder Mill
P . P   P = planks       S P S   S = cobblestone
D F D   D = dirt         P I P   P = planks
P P P   F = rotten flesh S S S   I = steel ingot
```
- **Nitre Bed:** 4 rotten flesh, bone meal, spider eyes or poisonous potatoes give **1
  saltpetre** (45 s). Build two or three beds; this is the slow step.
- **Sulphur:** the vanilla `sulfur` block, found in **sulfur caves** underground. Mine it.
- **Powder Mill:** 2 saltpetre + 1 sulphur + 1 charcoal give **4 gunpowder** (20 s).
- **Run the powder mill 8 times** to enter **Era II**. A title, fireworks and a fanfare announce
  it. You'll have 32 gunpowder left over for muskets and kegs.

---

## Era II: Gunpowder (1400-1700)

**Unlocked at the start of the era:** matchlock musket, musket balls, high furnace, steel plate
armour and the powder keg.

```
Matchlock Musket        High Furnace              Powder Keg
. . I   I = steel        B B B   B = bricks        G P G   G = gunpowder
. I F   F = flint+steel  B F B   F = bloomery      G G G   P = planks
W . .   W = planks       B I B   I = steel ingot   G P G
```
- **Musket balls:** 1 wrought iron gives 8 (shapeless).
- **Firing the musket:** right-click. Each shot uses 1 gunpowder and 1 musket ball and does
  about 15 damage, then a 4 s reload.
- **Steel plate armour:** the vanilla armour shapes with steel ingots; quality carries over.
- **High Furnace:** 1 ore + 2 charcoal at **1350 °C** (bellows) gives **2 cast iron** and slag
  (30 s). That's twice the iron per ore.

Your first cast iron unlocks:
- the **cannon** (CCC / ..C / PPP, where C is cast iron and P is planks);
- **cannonballs** (1 cast iron gives 4);
- the **coke oven**.

**Cannon:** right-click it with a cannonball while carrying gunpowder, and it fires the way it
faces. The ball bursts on impact (radius 2.5), hurting mobs without breaking blocks, so it is
safe to fire across your own fort.

### Gate to Era III: the Coke Oven
```
B B B   B = bricks
B C B   C = cast iron ingot
B B B
```
- 2 coal at **900 °C** give 1 **coke** (20 s). Use charcoal as the oven's fuel.
- **Run it 8 times** to enter **Era III**.
- Coke is the best fuel in the game: it reaches 1450 °C and burns clean. Keep making it.

---

## Era III: Industrial (1700-1900)

**Unlocked at the start of the era:** Bessemer converter, paper cartridges, breech-loading
rifle, steam engine, copper cable, steam wagon, the **telegraph** and the **Great Blast Furnace**
([multiblock](#multiblock-machines)).

```
Bessemer Converter      Breech Rifle            Steam Engine
S . S   S = steel        . . S   S = steel       S P S   S = steel   P = piston
S H S   H = high furnace . S C   C = cast iron   C F C   C = copper  F = furnace
B S B   B = bricks       P . .   P = planks      S B S   B = bucket

Copper Cable (x12)      Steam Wagon
W W W   W = wool         . E .   E = steam engine
C C C   C = copper       P P P   P = planks
W W W                    W . W   W = cast iron
```
- **Bessemer Converter:** 4 cast iron at **1500 °C** (coke plus bellows) gives **4 steel**
  (20 s). This is mass-produced steel; you'll need lots of it from here on.
- **Paper Cartridge:** paper + gunpowder + musket ball give 2 (shapeless).
- **Breech rifle:** fires cartridges, does about 21 damage, and reloads in 2 s.
- **Steam engine and cable:** see [Power and automation](#power-and-automation).
- **Steam wagon:** right-click it with fuel to refuel, otherwise right-click to ride. Hit it to
  pick it up.
- **Telegraph:** a copper ingot (the key) over copper cable, redstone and copper cable, on 3
  planks. Stand within 4 blocks of one and type `/techera telegraph <message>`. It clicks out
  at **every telegraph in the world**, yours or a rival team's: everyone within 8 blocks of a
  station reads "✉ TELEGRAM from Steve (Red): ...". It needs no wiring and has no range limit.
  Build one in each base and outpost; on a server, it's how teams negotiate, trade and
  declare wars.
- **Chromite:** with a **steel pickaxe**, mine chromite ore in deepslate
  (Y −60 to 0). Stock up now; Era IV armour needs it.

### Gate to Era IV: the Dynamo
Your first **breech rifle** reveals the Dynamo.
```
S C S   S = steel
C R C   C = copper ingot
S C S   R = redstone block
```
- 4 copper + 1 steel give an **Electric Motor** (15 s).
- **Run it 8 times** to enter **Era IV**.

---

## Era IV: Modern (1900-2000)

**Unlocked at the start of the era:** circuit boards, automatic rifle, composite armour, sentry
turret, solar panel, motorcar and the **Arc Furnace** ([multiblock](#multiblock-machines)), plus
the vanilla items in the table above.

```
Composite Plate (x2)    Circuit Board (x2)      Automatic Rifle
C S C   C = raw chromite . R .   R = redstone     S S S   S = steel
S I S   S = slag         C P C   C = copper cable M R S   M = motor
C S C   I = steel        . R .   P = composite    . . S   R = breech rifle

Sentry Turret           Solar Panel             Motorcar
. R .   R = auto rifle   G G G   G = glass        S G S   G = glass pane
S M S   M = motor        I R I   I = circuit      S M S   M = motor
S I S   I = circuit      S C S   C = copper cable R S R   R = black dye
```
- **Circuit boards** are the heart of the modern era: chromite → composite plate → circuit
  board. Turrets, solar panels, the particle accelerator, exotic matter and the plasma rifle
  all need them.
- **Automatic rifle:** hold right-click to fire, about 6 shots a second. It uses cartridges, so
  bring plenty.
- **Composite armour:** the usual armour shapes made from composite plates. It is as strong as
  diamond, tougher, and has some knockback resistance.
- **Sentry turret:** load cartridges into its 9 slots (hoppers work). It shoots hostile mobs
  within 20 blocks and never shoots players.
- **Solar panel:** works in daylight under open sky and powers 2 machines.

### Gate to Era V: the Particle Accelerator
Your first **automatic rifle** reveals it.
```
M I M   M = electric motor   I = circuit board
O C O   O = obsidian (mine it with a steel pickaxe)
M I M   C = composite plate
```
- 2 motors + 8 redstone + 1 circuit board give **Exotic Matter** (30 s).
- **Run it 8 times** to enter **Era V**. You've beaten the progression.

---

## Era V: Futuristic (2000+)

**Unlocked at the start of the era:** energy cells, plasma rifle, power armour, plasma turret,
hover bike, the **Fusion Reactor** ([multiblock](#multiblock-machines)) and the Time Machine.

```
Energy Cell                 Plasma Rifle
C R C   C = copper ingot     X I X   X = exotic matter   I = circuit board
R X R   R = redstone         M A M   M = electric motor  A = automatic rifle
C R C   X = exotic matter    . S .   S = steel ingot
```
The rest:
- **Hover Bike:** XCX / MEM / XCX, where X is exotic matter, C a composite plate, M an electric
  motor and E an energy cell.
- **Plasma Turret:** .P. / XTX / .C., where P is a plasma rifle, X exotic matter, T a sentry
  turret and C an energy cell.
- **Power armour:** the usual armour shapes made from exotic matter. The chestplate has an
  energy cell in the centre. It is the best armour in the game.

Using them:
- **Energy cell:** it holds 32 charges. Recharge it in the **Dynamo** with 1 redstone per run;
  the cell stays in the slot.
- **Plasma rifle:** each shot uses 1 cell charge and does about 31 damage. Shots fly straight,
  with no gravity.
- **Plasma turret:** it fires twice as fast as the sentry and runs on energy cells.
- **Hover bike:** each charge gives 30 s of flight. It climbs 1.5-block steps and has low
  gravity.

### The finale: the Time Machine
```
X C X   X = exotic matter
E A E   C = circuit board   E = energy cell
X C X   A = particle accelerator
```
Load it with **8 exotic matter, 8 circuit boards and 1 energy cell**. It runs for 3 minutes
(90 s if it's powered). When it finishes:
- lightning splits the sky over it, and the whole server hears that your team went home;
- your team sees the ending titles and gets the **Homeward Bound** advancement;
- the machine drops a **Homecoming Medal**, and your team's name tag turns to `[✦]`.

Nothing is taken away; you can keep playing. The story ends once per team, but the machine
keeps working (and keeps putting on a show).

---

## Shopping list for every era gate

These are the raw materials for the 8 gate runs alone, not counting the machines themselves.

| Gate | 8 runs need | You get |
|---|---|---|
| Era II (powder mill) | 64 nitre organics (→ 16 saltpetre), 8 sulphur, 8 charcoal | 32 gunpowder |
| Era III (coke oven) | 16 coal, plus charcoal to fuel the oven | 8 coke |
| Era IV (dynamo) | 32 copper ingots, 8 steel | 8 electric motors |
| Era V (accelerator) | 16 motors (64 copper + 16 steel), 64 redstone, 8 circuit boards | 8 exotic matter |

**Era V in total** also needs the accelerator itself: 4 motors, 2 circuit boards, 2 composite
plates and 2 obsidian. The 10 circuit boards take 5 composite plates (chromite, slag and steel)
and 10 redstone. Altogether that's about **84 copper, 80 redstone and 7 composite plates**, so
start mining copper, redstone and chromite in Era III.

---

## Reference tables

### Machines

Times are per run without power; power halves them.

| Machine | Era | Recipe | Min heat | Time |
|---|---|---|---|---|
| Charcoal mound | I | log → charcoal | 300 °C (smoulders at 450) | 10 s per log |
| Bloomery | I | ore + 2 charcoal → iron bloom + slag | 1200 °C | 30 s |
| Forge | I | iron bloom → hot iron bloom | 900 °C | 12 s |
| Forge | I | wrought iron + 2 charcoal → steel | 1200 °C | 40 s |
| Forging anvil | I | hot bloom → wrought iron (6 hammer strikes) | - | - |
| Forging anvil | I | salvage iron gear / crossbow | - | - |
| Quench barrel | I | tool → quenched tool | - | 3 s |
| Nitre bed | I | 4 organics → saltpetre | - | 45 s |
| Powder mill | I→II gate | 2 saltpetre + sulphur + charcoal → 4 gunpowder | - | 20 s |
| High furnace | II | ore + 2 charcoal → 2 cast iron + slag | 1350 °C | 30 s |
| Coke oven | II→III gate | 2 coal → coke | 900 °C | 20 s |
| Bessemer converter | III | 4 cast iron → 4 steel | 1500 °C | 20 s |
| Steam engine | III | burns fuel → power at 500 °C+ | 500 °C | - |
| Dynamo | III→IV gate | 4 copper + steel → electric motor | - | 15 s |
| Dynamo | V | energy cell + redstone → recharged cell | - | 15 s |
| Particle accelerator | IV→V gate | 2 motors + 8 redstone + circuit board → exotic matter | - | 30 s |
| Great Blast Furnace | III (multiblock) | 4 ore + 2 coke → 10 cast iron + 2 slag; 8 cast iron + 2 coke → 10 steel | 1400 / 1600 °C | 40 s |
| Arc Furnace | IV (multiblock, needs power) | 8 cast iron → 12 steel; 4 chromite + 2 steel + 2 slag → 6 composite plates | 1700 / 1500 °C | 30 s |
| Fusion Reactor | V (multiblock) | burns fusion pellets → power for 32 machines | 2500 °C | - |
| Time Machine | V (finale) | 8 exotic matter + 8 circuit boards + energy cell → Homecoming Medal | - | 180 s |

### Weapons

| Weapon | Era | Ammo | Damage per hit | Rate of fire | Durability |
|---|---|---|---|---|---|
| Wrought iron sword | I | - | 6 | vanilla sword | 220 |
| Steel sword | I | - | 6.5 | vanilla sword | 750 |
| Wrought iron / steel spear | I | - | charge attack | - | 220 / 750 |
| Crossbow (salvage) | I | arrows | vanilla | vanilla | vanilla |
| Matchlock musket | II | gunpowder + musket ball | ~15 | 4 s reload | 300 |
| Cannon (block) | II | cannonball + gunpowder | burst, radius 2.5 | manual | - |
| Breech rifle | III | paper cartridge | ~21 | 2 s reload | 600 |
| Automatic rifle | IV | paper cartridge | ~15 | ~6.7 shots/s (hold) | 1500 |
| Plasma rifle | V | energy cell charge | ~31 | ~2.5 shots/s | 3000 |

Once quenched, a Fine melee weapon gets +1 damage and a Poor one gets −1.

### Armour

The total armour points are for a full set; vanilla diamond is 20 points with 2 toughness.

| Set | Era | How to unlock | Armour | Toughness | Knockback resist |
|---|---|---|---|---|---|
| Wrought iron (or vanilla iron) | I | salvage iron or chainmail armour | 15 | 0.5 | - |
| Steel plate | II | Era II start | 18 | 1.5 | - |
| Composite | IV | Era IV start | 20 | 2.5 | 20% |
| Power | V | Era V start | 24 | 3.5 | 60% |

### Tools

| Material | Durability | Mining speed | Mines |
|---|---|---|---|
| Wrought iron | 220 | 5.5 | like iron, but **not** chromite |
| Steel | 750 | 7.5 | **everything**, including chromite and obsidian (the top tier) |
| Diamond (vanilla) | 1561 | 8 | Era IV only; steel already mines everything |

### Vehicles

All vehicles face where you look; W and S drive. Right-click with fuel (or an energy cell) to
refuel, right-click with an empty hand to ride, and hit to pick up. A HUD shows fuel or charge.

| Vehicle | Era | Speed | Fuel | Notes |
|---|---|---|---|---|
| Steam wagon | III | 4.4 blocks/s | any machine fuel | climbs 1 block |
| Motorcar | IV | 7.6 blocks/s | any machine fuel | faster than sprinting |
| Hover bike | V | 11 blocks/s | energy cell (30 s per charge) | climbs 1.5 blocks, low gravity |

### Fort defences

All defences only hurt hostile mobs, never players.

| Defence | Era | What it does |
|---|---|---|
| Palisade stakes | I | No collision; raiders inside are slowed and take 2 damage every half second |
| Powder keg | II | Bursts (radius 3.5, no block damage) when a hostile mob touches it |
| Cannon | II | Manually fired; burst radius 2.5 |
| Sentry turret | IV | Shoots the nearest visible hostile within 20 blocks every 0.5 s; 1 cartridge per shot |
| Plasma turret | V | Same range, twice as fast; 1 cell charge per shot |

---

## Power and automation

- **Generators:**
  - The **steam engine** burns any machine fuel and generates power while it is at 500 °C or
    more. It can run **4 machines**.
  - The **solar panel** generates in daylight under open sky and runs **2 machines**.
- **Copper cable** (12 per craft) joins generators and machines. A machine touching a
  generator is powered directly, but power never passes through one machine to the next, so
  run cable to each one.
- **Powered machines** run twice as fast and get +100 °C. The machine screen shows the
  network load, such as "Powered 3/4" or "Overloaded 5/4". When overloaded, some machines stop
  getting power, so add another generator.
- **Hoppers:**
  - from the **top** feed the inputs;
  - from the **sides** feed the fuel slot;
  - from the **bottom** pull out the outputs.
- **Example line:** a chest of ore feeds a high furnace through a hopper on top, a coke chest
  feeds its side, and a hopper underneath drops cast iron into a chest that feeds a Bessemer
  converter. With a steam engine on the cable, the whole line runs at double speed.
- **Turrets** take ammo from hoppers too, so a chest of cartridges above a sentry keeps it
  firing.

---

## Multiblock machines

Three machines are **structures** you build block by block around a controller. A multiblock only
runs while its structure is complete, and the controller's screen tells you which it is
("Structure complete" or "Incomplete").

- **Build guide:** **sneak-click the controller** with an empty hand. Chat tells you how many
  blocks are still needed and what goes next, and **glowing orange marks** show every missing
  block for 10 seconds.
- **Facing:** the structure is built *behind* the controller, which is its front face. Place
  the controller first, facing the way you want the front to look.
- **Completion:** when the last block goes in, the structure lights up, a beacon sound plays,
  and you get the **Great Works** advancement.

### Great Blast Furnace (Era III)
A tower of **fire bricks**, 3 wide, 3 deep and 4 tall, hollow inside, with the controller in the
middle of the bottom front. Seen from the front, each layer from the bottom up (C is the
controller, F a fire brick, `.` empty air):
```
Bottom      2nd         3rd         Top
F C F       F F F       F F F       F F F    (front row)
F F F       F . F       F . F       F . F
F F F       F F F       F F F       F F F    (back row)
```
- **Fire bricks:** 8 bricks around 1 coke give 8; you need 32.
- **Controller:** fire bricks around a high furnace with a steel ingot on top.
- **Recipes** (coke as fuel; the tower reaches 1450 °C, plus 250 with bellows):
  - 4 ore + 2 coke → **10 cast iron** + 2 slag, at 1400 °C;
  - 8 cast iron + 2 coke → **10 steel**, at 1600 °C (bellows).
- **Why build it:** it gives more metal per ore than the high furnace, and more steel per cast
  iron than the Bessemer converter. Fire and smoke roar out of the chimney while it works.

### Arc Furnace (Era IV)
The first machine that runs on **electricity instead of fuel**. A 3×3 shell of fire bricks, 3 tall,
with an **arc electrode** in the middle of the roof (E):
```
Bottom      Middle      Top
F C F       F F F       F F F    (front row)
F F F       F . F       F E F
F F F       F F F       F F F    (back row)
```
- **Power:** connect it to a generator (a steam engine next to the controller works). Powered,
  the arc drives it to **1900 °C**; unpowered it stays cold and does nothing.
- **Recipes:** 8 cast iron → **12 steel** (the best rate in the game), and 4 raw chromite + 2
  steel + 2 slag → **6 composite plates**.
- **Parts:** the electrode is steel, copper cable and a circuit board; the controller is fire
  bricks around a dynamo and a motor.

### Fusion Reactor (Era V)
A 5×5 ring, 3 tall. Seen from the front (S fusion casing, G any glass, O the fusion coil,
`.` anything, blank corners are empty):
```
Bottom          Middle          Top
  S C S           G G G           S S S      (front row)
S . . . S       G . . . G       S . . . S
S . . . S       G . O . G       S . . . S
S . . . S       G . . . G       S . . . S
  S S S           G G G           S S S      (back row)
```
- **Parts:** fusion casing (4 per craft: steel, composite plates and a circuit board; you need
  23), 12 glass, 1 **fusion coil** (copper cable, circuit boards and exotic matter), and the
  controller (casing, circuit boards, motors and an energy cell).
- **Fuel:** **fusion pellets** (1 exotic matter + 4 redstone give 4). Each burns for 10 minutes.
- **Power:** the plasma takes about 40 seconds to pass **2500 °C**. From then on the reactor
  powers **32 machines** on its cable network, against 4 for a steam engine. Plasma circles
  the coil while it runs.

---

## Raids and defences

- **When:** every 3-4 in-game days, at night, if someone on your team is online.
- **Warning:** "RAID!" appears with a compass direction and a horn. You have **60 seconds**.
- **Where:** raiders spawn 36 blocks from your team's fort, on the side named in the warning.
  If you're more than 80 blocks from the fort, they come for you instead.

| Era | Size | Raiders |
|---|---|---|
| I   | 3-8   | zombies in iron helmets (some with chestplates) with iron swords or axes; vindicators |
| II  | 5-10  | + pillagers |
| III | 7-12  | + diamond helmets on zombies and illagers |
| IV  | 9-14  | + a ravager in every six |
| V   | 11-16 | + an evoker in every five |

- **The Warlord:** every raid is led by a named, glowing captain, for example *Warlord Ragnar
  Skullsplitter*. He has three times the health and wears armour from **your** era: wrought
  iron in Era I, steel in Eras II-III, composite in IV and power armour in V. That armour can
  drop for salvage.
  - He always drops his banner, a **War Trophy** named after him ("Banner of Ragnar
    Skullsplitter").
  - **Right-click the trophy to rally your team:** every teammate within 32 blocks gets
    Strength and Resistance for 90 seconds. It isn't used up, but it needs 5 minutes between
    rallies. Keep them as trophies of the raids you've survived.
- **Win:** kill them all (watch the red boss bar). Survivors withdraw after 5 minutes.
- **Loot:** raiders drop their gear 35% of the time, which you can salvage for wrought iron and
  designs.
- **Tactics by era:**
  - **Era I:** a ring of palisade stakes outside the walls, and a shield. Fight at the gate.
  - **Era II:** powder kegs on the approach paths and a cannon facing the warned direction.
    Muskets hit hard but reload slowly.
  - **Era III:** rifles, plus steel plate armour.
  - **Era IV:** sentry turrets fed by hoppers. Ravagers hit hardest, so focus them first.
  - **Era V:** plasma turrets, and kill evokers before they summon.

---

## Inventions: patents, masterworks and the monument

### The Patent Office
The first team on the server to make an invention **holds its patent forever**. Everyone on
the server sees the announcement, with how many years you beat history by:

> ⚖ PATENT GRANTED to Red for the Steam Engine, beating Thomas Newcomen (1712) by 712 years!

The "years ahead" count from the year your era starts (Era I = 1000, II = 1400, III = 1700,
IV = 1900, V = 2000). Your team gets the **Patent Pending** advancement. Run `/techera patents`
to see the register: every invention, its real year and inventor, and who holds it.

| Invention | History | Invention | History |
|---|---|---|---|
| Gunpowder | Tang China, 850 | Breech rifle | von Dreyse, 1841 |
| Cast iron | Lapphyttan, 1150 | Dynamo | Werner von Siemens, 1866 |
| Cannon | Florence, 1326 | Motorcar | Karl Benz, 1886 |
| Matchlock musket | Europe, 1475 | Automatic rifle | John Browning, 1918 |
| Coke | Abraham Darby, 1709 | Solar panel | Bell Labs, 1954 |
| Steam engine | Thomas Newcomen, 1712 | Sentry turret | Samsung Techwin, 2006 |
| Steam wagon | Cugnot, 1769 | Energy cell | late 21st century |
| Copper cable | Cooke and Wheatstone, 1837 | Hover bike, exotic matter | 22nd century |
| Telegraph | Samuel Morse, 1844 | Time Machine | H. G. Wells (on paper), 1895 |
| Circuit board | Jack Kilby, 1958 | Fusion Reactor | mid-21st century |
| Arc furnace | Paul Héroult, 1907 | | |
| Electric motor | Thomas Davenport, 1837 | Power armour, plasma rifle | 23rd century |

On a multiplayer server this turns the tech tree into a race. Patents are for honour only:
a later team can still make everything, and they don't lose anything by coming second.

### Maker's marks and Masterworks
- **Maker's mark:** every Tech Era tool, weapon, armour piece and vehicle you craft is stamped
  "Made by <your name>" in its tooltip. Ingots and other stackable materials stay unmarked so
  they still stack.
- **Masterwork:** quench a **Fine** tool or weapon and it becomes a *Masterwork*. Its name turns
  aqua and its tooltip shows "★ Masterwork". The first one earns the **Masterwork** advancement.

### The Yankee's Almanac
Book + clock (shapeless), available from Era I. In *A Connecticut Yankee in King Arthur's
Court*, the hero saves his neck by "foretelling" an eclipse; this almanac foretells:
- **when raiders will next come** for your team ("tonight", or "in about 3 days");
- **how close you are to the next era** ("5 of 8 gate runs").

### Temporal rifts
You aren't the only thing slipping through time. Every 4-6 days, in daylight, **lightning
strikes 15-30 blocks from your fort** and leaves a **barrel from your next era**. The chat
tells you the direction and distance. Contents (3-5 stacks):

| Your era | The rift brings |
|---|---|
| I   | gunpowder, steel ingots, musket balls, saltpetre, sulphur |
| II  | coke, cast iron, paper cartridges, copper, steel |
| III | an electric motor, raw chromite, composite plates, redstone, cartridges |
| IV  | exotic matter, circuit boards, motors, redstone, composite plates |

Picking up future items teaches you nothing: recipes still unlock only when you **make**
something. But a head start on materials is a head start. Era V teams get no more rifts,
because they *are* the future.

### The era monument
Each fort has a monument in its free corner (south-east, opposite the three huts). It grows a
storey every time the fort's team reaches a new era:

| Era | The monument adds |
|---|---|
| I   | a stone plinth and a timber beacon with a lantern |
| II  | a stone tower, and a cannon at its foot facing the gate side |
| III | a brick chimney that smokes (campfire on top) |
| IV  | a copper base and an iron radio mast with a lightning rod |
| V   | a sea lantern crowned with glowing end rods |

You can see from a distance how far a team has come. In worlds made before 1.6.0, the
monument appears with your team's next era.

### The fort grows with you
The whole fort rebuilds itself in each new era's materials, not just the monument:

| Era | Walls | Huts | Roofs | Paths |
|---|---|---|---|---|
| I   | oak log palisade | spruce planks | hay thatch | dirt path |
| II  | cobblestone and stone brick, with battlements | white plaster and dark oak beams | dark oak shingles | cobblestone lanes to every hut |
| III | stone brick and red brick | brick, with glass windows | slate (deepslate tiles) | polished andesite |
| IV  | grey concrete | white concrete | smooth stone | black asphalt |
| V   | polished deepslate under cyan glass | white quartz | light blue glass domes | white quartz |

Only blocks the fort placed itself are changed. Anything you built, broke or replaced stays exactly
as you left it, so it is safe to decorate. Team forts follow their own team's era, and the world fort
follows the players on no team. Worlds made before 2.3.0 catch up the next time the server starts.

---

## Teams and multiplayer

| Command | What it does |
|---|---|
| `/techera team create <name>` | Start a team. It gets its own era and knowledge, and you become its leader. |
| `/techera team invite <player>` / `join <team>` | Bring friends in (an invitation is needed). |
| `/techera team leave` / `info` | Leave your team, or see its era, designs, leader and members. |
| `/techera team settle` | Build your team's own hill fort where you stand, at least 150 blocks from any other fort. You respawn there and raids target it. |
| `/techera team home` | Teleport to your team's fort (or the world fort). 5-minute cooldown, and not during a war. |
| `/techera team kick <player>` | Leader only. Remove a member, even an offline one. |
| `/techera team leader <player>` | Leader only. Hand leadership on. If the leader leaves, it passes on automatically. |
| `/techera team color <colour>` | Leader only. Colour your team's names in chat and the player list. |
| `/techera team war <team>` | A timed PvP war, only if the server enables `raids.teamPvpRaidsEnabled`. |
| `/teammsg <message>` | Vanilla team chat (short form `/tm`). |
| `/techera patents` | The Patent Office register: who invented what first. |
| `/techera telegraph <message>` | Send a telegram from beside a telegraph (Era III) to every other station. |

- **Joining a team** gives you its era, recipes and fort right away. Your old team keeps its
  own progress.
- **Machines belong to the team of whoever placed them.** Gate runs count for that team, and
  recipes are checked against it. If you placed machines before joining a team, break them and
  place them again.
- **Fort claims:** a settled team fort claims an 80×80 square around it. Outsiders can't
  break or place blocks, pour buckets, or open chests, machines and turrets there. Doors and
  walking through stay open, and you see "Entering the fort of team X" when you cross the line.
  Explosions are not blocked.
- **Era tags:** every member's name shows the team's era, for example `[III] Steve`.
- **Wars** (if the server enables them):
  - Outside a war, players on different teams can't hurt each other, and teammates never can.
  - A war lasts 10 minutes, with a purple boss bar showing kills.
  - During a war, the enemy can break into your fort's claim.
  - The side with more kills **plunders** one design the losers knew. A draw plunders nothing.
- **Teamwork tips:** era, recipes and gate runs are shared, so split the chain. One player
  runs charcoal and the bloomery, one forges, and one gathers sulphur and mob drops for
  saltpetre. Any member's gate machine runs count for the whole team.

---

## Advancements

Press **L** and open the **Tech Era** tab (30 advancements). Era advancements are granted to the whole team.

| Advancement | How |
|---|---|
| Tech Era | Have the Yankee's Notebook |
| Slow Burn | Get charcoal |
| Spongy Iron | Get an iron bloom |
| Hammer Time | Get a wrought iron ingot |
| Know Thy Enemy | Get a wrought iron chestplate (salvage first) |
| Steel! | Get a steel ingot |
| A Blade Worth Quenching | Get a steel sword |
| The Age of Powder | Enter Era II |
| Smoke and Thunder | Get a matchlock musket |
| Liquid Iron | Get cast iron |
| Ultima Ratio | Get a cannon |
| The Age of Industry | Enter Era III |
| Full Steam | Get a steam engine |
| Horseless Carriage | Get a steam wagon |
| Breech Loader | Get a breech rifle |
| The Electric Age | Enter Era IV |
| Harder Than Iron | Get raw chromite |
| Motoring | Get a motorcar |
| Automated Defence | Get a sentry turret |
| The Future | Enter Era V |
| Bolt of Light | Get a plasma rifle |
| Above It All | Get a hover bike |
| Walking Fortress | Get a power chestplate |
| Homeward Bound | Build a time machine and go home |
| Patent Pending | Be the first on the server to invent something |
| Masterwork | Quench a Fine-quality tool or weapon |
| Great Works | Complete a multiblock machine |
| Hold the Walls | Beat a raid |
| Kingslayer | Defeat a raid Warlord and take his banner |
| A Fort of Our Own | Settle a team fort |

---

## Troubleshooting and FAQ

**The crafting result slot stays empty.** The recipe is locked. Check the notebook: a "?"
sketch says what unlocks it.

**The bloomery (or forge) isn't making progress.** The heat is below the recipe minimum. Check
the marker on the thermometer, pump the bellows, and make sure the fuel is charcoal or coke, not
logs.

**My metal keeps coming out Poor.** You're burning coal. Switch to charcoal or coke. Also check
the inputs: a Poor bloom stays Poor all the way to the tool.

**How do I get flint and steel or a bucket?** Both need vanilla iron ingots. Smelt a
wrought iron ingot in a furnace to get one. You don't need flint and steel early: a torch
lights the charcoal mound.

**The charcoal mound went out.** The vent must be sealed within 10 seconds of lighting, and
the mound only chars while the top and all four sides are covered.

**The hot bloom turned back into a normal bloom.** It cools after 60 s. Put it back in the
forge, and keep the forge next to the anvil.

**I can't mine chromite.** You need a steel pickaxe. Wrought iron and vanilla iron can't mine
it.

**I can't craft a diamond pickaxe, pistons or rails.** Vanilla technology unlocks with the eras
(see the table in *How progress works*). Steel mines everything, so you won't miss diamond
tools.

**Where is sulphur?** It's the vanilla sulfur block, which generates in sulfur caves
underground.

**Gate runs aren't counting.** Runs only count toward your team's *next* era, and only on
machines your current team placed. Break and re-place machines you placed before joining a team.

**A machine says "Overloaded".** The network has more machines than its generators can run.
Add a steam engine or solar panels.

**I lost my notebook.** Craft a new one from a book and a feather (shapeless).

**Can I use a vanilla furnace for iron?** Iron ore and raw iron only give a Poor iron bloom,
so the bloomery is the real route. Once you have wrought iron, though, the furnace turns it into
plain iron ingots.

**Can the vanilla crafter block make locked recipes?** Yes, it has no player to check against.

---

## Server settings

Everything lives in `config/techera.json`, and missing keys are filled in on start.

| Setting | Default | What it does |
|---|---|---|
| `timers.*` | see the machine table | Processing times in seconds (`musket_reload`, `bessemer`, ...) |
| `anvilStrikes` | 6 | Hammer strikes per wrought iron ingot |
| `bellowsPumpTicks` / `bellowsMaxTicks` | 40 / 200 | Heat time per pump, and the most that can be stored |
| `raids.enabled` | true | Turn raids off entirely |
| `raids.minDaysBetweenRaids` | 3 | Days between raids (plus 0-1 random) |
| `raids.warningSeconds` | 60 | Time between the warning and the attack |
| `raids.minRaiders` / `maxRaiders` | 3 / 8 | Base raid size (plus 2 per era) |
| `raids.spawnDistance` | 36 | How far from the fort raiders appear |
| `raids.teamPvpRaidsEnabled` | false | Allow team wars |
| `raids.warMinutes` | 10 | War length |
| `power.steamEngineMachines` / `solarPanelMachines` / `fusionReactorMachines` | 4 / 2 / 32 | Machines each generator can run |
| `teams.claimRadius` | 40 | Half-width of a team fort's claim (0 turns claims off) |
| `teams.homeCooldownSeconds` | 300 | Cooldown for `/techera team home` |
| `rifts.enabled` | true | Temporal rifts on or off |
| `rifts.minDaysBetween` | 4 | Days between rifts (plus 0-2 random) |

Operator commands: `/techera era [set N]`, `/techera unlock list | grant <id>`, and
`/techera raid start [now] | stop`, and `/techera rift` (open a rift now).

---

## Speedrun checklist

1. Get 4+ logs, a little leather and coal for torches, then make tongs, a hammer, bellows and
   a charcoal mound. Light the mound with a torch.
2. Make a stack of charcoal, and find bog iron in a swamp (or iron ore).
3. Bloomery (with bellows), then forge, then anvil, for wrought iron. Forge again for steel.
4. Make two nitre beds and a powder mill, and get sulphur from sulfur caves. Run the mill 8
   times for **Era II**.
5. Make a high furnace for cast iron, then a coke oven. Run it 8 times for **Era III**.
6. Make a Bessemer converter for bulk steel, then a breech rifle, then a dynamo. Make 8 motors
   for **Era IV**.
7. Make an automatic rifle, then a particle accelerator. Make 8 exotic matter for **Era V**.
8. Make 8 more exotic matter and 8 circuit boards, then build the **Time Machine** and go home.

Mine copper, redstone and chromite early, since Era V needs about 84 copper and 80 redstone.
Put a steam engine on your machines as soon as Era III starts; halving every timer saves more
time than anything else.

---

## Recipe index

Every Tech Era recipe, generated from the mod's own data. Grids read top row first; `.` is an empty slot.

### Crafting

#### Unlocked by: always available

**Iron Ingot**

Smelt **Wrought Iron Ingot** in a furnace.

**Yankee's Notebook**

Shapeless: Book + Feather

#### Unlocked by: Era I start

**Bloomery**

```
S C S
C . C
S S S
```
S = Cobblestone, C = Clay Ball

**Charcoal Mound**

```
D D D
D L D
D D D
```
D = Dirt, L = any Log

**Forge**

```
S S S
S C S
B B B
```
S = Cobblestone, C = Charcoal, B = Brick

**Forging Anvil**

```
S S S
. S .
S S S
```
S = Stone

**Hand Bellows**

```
P L P
P L P
. S .
```
P = any Planks, L = Leather, S = Stick

**Palisade Stakes ×3**

```
S . S
L L L
```
S = Stick, L = any Log

**Quench Barrel**

Shapeless: Barrel + Water Bucket

**Smithing Hammer**

```
C C C
C S C
. S .
```
C = Cobblestone, S = Stick

**Tongs**

```
S . S
. S .
S . S
```
S = Stick

**Yankee's Almanac**

Shapeless: Book + Clock

#### Unlocked by: first Wrought Iron Ingot

**Iron-Rimmed Shield**

```
P I P
P P P
. P .
```
P = any Planks, I = Wrought Iron Ingot  
Quality carries over from the ingredients.

**Wrought Iron Axe**

```
X X .
X # .
. # .
```
X = Wrought Iron Ingot, # = Stick  
Quality carries over from the ingredients.

**Wrought Iron Hoe**

```
X X .
. # .
. # .
```
X = Wrought Iron Ingot, # = Stick  
Quality carries over from the ingredients.

**Wrought Iron Pickaxe**

```
X X X
. # .
. # .
```
X = Wrought Iron Ingot, # = Stick  
Quality carries over from the ingredients.

**Wrought Iron Shovel**

```
X . .
# . .
# . .
```
X = Wrought Iron Ingot, # = Stick  
Quality carries over from the ingredients.

**Wrought Iron Spear**

```
. . X
. # .
# . .
```
X = Wrought Iron Ingot, # = Stick  
Quality carries over from the ingredients.

**Wrought Iron Sword**

```
X . .
X . .
# . .
```
X = Wrought Iron Ingot, # = Stick  
Quality carries over from the ingredients.

#### Unlocked by: salvaging Iron or Chainmail Armour

**Wrought Iron Boots**

```
X . X
X . X
```
X = Wrought Iron Ingot  
Quality carries over from the ingredients.

**Wrought Iron Chestplate**

```
X . X
X X X
X X X
```
X = Wrought Iron Ingot  
Quality carries over from the ingredients.

**Wrought Iron Helmet**

```
X X X
X . X
```
X = Wrought Iron Ingot  
Quality carries over from the ingredients.

**Wrought Iron Leggings**

```
X X X
X . X
X . X
```
X = Wrought Iron Ingot  
Quality carries over from the ingredients.

#### Unlocked by: first Steel Ingot

**Nitre Bed**

```
P . P
D F D
P P P
```
P = any Planks, D = Dirt, F = Rotten Flesh

**Powder Mill**

```
S P S
P I P
S S S
```
S = Cobblestone, P = any Planks, I = Steel Ingot

**Steel Axe**

```
X X .
X # .
. # .
```
X = Steel Ingot, # = Stick  
Quality carries over from the ingredients.

**Steel Hoe**

```
X X .
. # .
. # .
```
X = Steel Ingot, # = Stick  
Quality carries over from the ingredients.

**Steel Pickaxe**

```
X X X
. # .
. # .
```
X = Steel Ingot, # = Stick  
Quality carries over from the ingredients.

**Steel Shovel**

```
X . .
# . .
# . .
```
X = Steel Ingot, # = Stick  
Quality carries over from the ingredients.

**Steel Spear**

```
. . X
. # .
# . .
```
X = Steel Ingot, # = Stick  
Quality carries over from the ingredients.

**Steel Sword**

```
X . .
X . .
# . .
```
X = Steel Ingot, # = Stick  
Quality carries over from the ingredients.

#### Unlocked by: Era II start

**High Furnace**

```
B B B
B F B
B I B
```
B = Bricks, F = Bloomery, I = Steel Ingot

**Matchlock Musket**

```
. . I
. I F
W . .
```
I = Steel Ingot, F = Flint And Steel, W = any Planks

**Musket Ball ×8**

Shapeless: Wrought Iron Ingot

**Powder Keg**

```
G P G
G G G
G P G
```
G = Gunpowder, P = any Planks

**Steel Boots**

```
X . X
X . X
```
X = Steel Ingot  
Quality carries over from the ingredients.

**Steel Chestplate**

```
X . X
X X X
X X X
```
X = Steel Ingot  
Quality carries over from the ingredients.

**Steel Helmet**

```
X X X
X . X
```
X = Steel Ingot  
Quality carries over from the ingredients.

**Steel Leggings**

```
X X X
X . X
X . X
```
X = Steel Ingot  
Quality carries over from the ingredients.

#### Unlocked by: first Cast Iron Ingot

**Cannon**

```
C C C
. . C
P P P
```
C = Cast Iron Ingot, P = any Planks

**Cannonball ×4**

Shapeless: Cast Iron Ingot

**Coke Oven**

```
B B B
B C B
B B B
```
B = Bricks, C = Cast Iron Ingot

#### Unlocked by: Era III start

**Bessemer Converter**

```
S . S
S H S
B S B
```
S = Steel Ingot, H = High Furnace, B = Bricks

**Breech-Loading Rifle**

```
. . S
. S C
P . .
```
S = Steel Ingot, C = Cast Iron Ingot, P = any Planks

**Copper Cable ×12**

```
W W W
C C C
W W W
```
W = any Wool, C = Copper Ingot

**Fire Bricks ×8**

```
B B B
B C B
B B B
```
B = Brick, C = Coke

**Great Blast Furnace**

```
F S F
F H F
F F F
```
F = Fire Bricks, S = Steel Ingot, H = High Furnace

**Paper Cartridge ×2**

Shapeless: Paper + Gunpowder + Musket Ball

**Steam Engine**

```
S P S
C F C
S B S
```
S = Steel Ingot, P = Piston, C = Copper Ingot, F = Furnace, B = Bucket

**Steam Wagon**

```
. E .
P P P
W . W
```
E = Steam Engine, P = any Planks, W = Cast Iron Ingot

**Telegraph**

```
. K .
C R C
P P P
```
K = Copper Ingot, C = Copper Cable, R = Redstone, P = any Planks

#### Unlocked by: first Breech-Loading Rifle

**Dynamo**

```
S C S
C R C
S C S
```
S = Steel Ingot, C = Copper Ingot, R = Redstone Block

#### Unlocked by: Era IV start

**Arc Electrode**

```
S C S
S I S
S C S
```
S = Steel Ingot, C = Copper Cable, I = Circuit Board

**Arc Furnace**

```
F M F
F D F
F F F
```
F = Fire Bricks, M = Electric Motor, D = Dynamo

**Automatic Rifle**

```
S S S
M R S
. . S
```
S = Steel Ingot, M = Electric Motor, R = Breech-Loading Rifle

**Circuit Board ×2**

```
. R .
C P C
. R .
```
R = Redstone, C = Copper Cable, P = Composite Plate

**Composite Boots**

```
X . X
X . X
```
X = Composite Plate

**Composite Chestplate**

```
X . X
X X X
X X X
```
X = Composite Plate

**Composite Helmet**

```
X X X
X . X
```
X = Composite Plate

**Composite Leggings**

```
X X X
X . X
X . X
```
X = Composite Plate

**Composite Plate ×2**

```
C S C
S I S
C S C
```
C = Raw Chromite, S = Slag, I = Steel Ingot

**Motorcar**

```
S G S
S M S
R S R
```
S = Steel Ingot, G = Glass Pane, M = Electric Motor, R = Black Dye

**Sentry Turret**

```
. R .
S M S
S D S
```
R = Automatic Rifle, S = Steel Ingot, M = Electric Motor, D = Circuit Board

**Solar Panel**

```
G G G
I R I
S C S
```
G = Glass, I = Circuit Board, R = Redstone, S = Steel Ingot, C = Copper Cable

#### Unlocked by: first Automatic Rifle

**Particle Accelerator**

```
M I M
O C O
M I M
```
M = Electric Motor, I = Circuit Board, O = Obsidian, C = Composite Plate

#### Unlocked by: Era V start

**Energy Cell**

```
C R C
R X R
C R C
```
C = Copper Ingot, R = Redstone, X = Exotic Matter

**Fusion Casing ×4**

```
S P S
P I P
S P S
```
S = Steel Ingot, P = Composite Plate, I = Circuit Board

**Fusion Coil**

```
C I C
I X I
C I C
```
C = Copper Cable, I = Circuit Board, X = Exotic Matter

**Fusion Pellet ×4**

Shapeless: Exotic Matter + Redstone + Redstone + Redstone + Redstone

**Fusion Reactor**

```
F I F
M E M
F I F
```
F = Fusion Casing, I = Circuit Board, M = Electric Motor, E = Energy Cell

**Hover Bike**

```
X C X
M E M
X C X
```
X = Exotic Matter, C = Composite Plate, M = Electric Motor, E = Energy Cell

**Plasma Rifle**

```
X D X
M A M
. S .
```
X = Exotic Matter, D = Circuit Board, M = Electric Motor, A = Automatic Rifle, S = Steel Ingot

**Plasma Turret**

```
. P .
X T X
. C .
```
P = Plasma Rifle, X = Exotic Matter, T = Sentry Turret, C = Energy Cell

**Power Armour Boots**

```
X . X
X . X
```
X = Exotic Matter

**Power Armour Chestplate**

```
X . X
X C X
X X X
```
X = Exotic Matter, C = Energy Cell

**Power Armour Helmet**

```
X X X
X . X
```
X = Exotic Matter

**Power Armour Leggings**

```
X X X
X . X
X . X
```
X = Exotic Matter

**Time Machine**

```
X C X
E A E
X C X
```
X = Exotic Matter, C = Circuit Board, E = Energy Cell, A = Particle Accelerator

### Machine recipes

| Machine | Inputs | Output | Heat | Notes |
|---|---|---|---|---|
| Arc Furnace | 4 × Raw Chromite + 2 × Steel Ingot + 2 × Slag | 6 × Composite Plate | 1500 °C | - |
| Arc Furnace | 8 × Cast Iron Ingot | 12 × Steel Ingot | 1700 °C | has quality |
| Bessemer Converter | 4 × Cast Iron Ingot | 4 × Steel Ingot | 1500 °C | has quality |
| High Furnace | Iron Ore (bog iron, raw iron or iron ore) + 2 × Charcoal | 2 × Cast Iron Ingot + Slag | 1350 °C | has quality |
| Charcoal Mound | any Log | Charcoal | 300 °C | - |
| Coke Oven | 2 × Coal | Coke | 900 °C | **Era III gate** |
| Dynamo | 4 × Copper Ingot + Steel Ingot | Electric Motor | - | **Era IV gate** |
| Particle Accelerator | 2 × Electric Motor + 8 × Redstone + Circuit Board | Exotic Matter | - | **Era V gate** |
| Great Blast Furnace | 4 × Iron Ore (bog iron, raw iron or iron ore) + 2 × Coke | 10 × Cast Iron Ingot + Slag | 1400 °C | has quality |
| Great Blast Furnace | 8 × Cast Iron Ingot + 2 × Coke | 10 × Steel Ingot | 1600 °C | has quality |
| Powder Mill | 2 × Saltpetre + Sulfur + Charcoal | 4 × Gunpowder | - | **Era II gate** |
| Time Machine | 8 × Exotic Matter + 8 × Circuit Board + Energy Cell | Homecoming Medal | - | - |
| Forge | Iron Bloom | Hot Iron Bloom | 900 °C | has quality |
| Bloomery | Iron Ore (bog iron, raw iron or iron ore) + 2 × Charcoal | Iron Bloom + Slag | 1200 °C | has quality |
| Quench Barrel | a wrought iron or steel tool | (same item) | - | - |
| Dynamo | Energy Cell + Redstone | (same item) | - | recharges the input |
| Nitre Bed | 4 × Rotten Flesh / Bone Meal / Spider Eye / Poisonous Potato | Saltpetre | - | - |
| Forging Anvil | Crossbow | 3 × Stick | - | salvage: teaches a design |
| Forging Anvil | Iron or Chainmail Armour | 2 × Wrought Iron Ingot | - | salvage: teaches a design |
| Forging Anvil | an Iron Tool | Wrought Iron Ingot | - | salvage: teaches a design |
| Forge | Wrought Iron Ingot + 2 × Charcoal | Steel Ingot | 1200 °C | has quality, needs carburizing |
| Forging Anvil | Hot Iron Bloom | Wrought Iron Ingot | - | - |
