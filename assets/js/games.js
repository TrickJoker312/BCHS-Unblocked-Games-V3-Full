const gamesArr = [
  /*{
    filter: [`shoot`, `mp`],
    link: `sample`,
    imgsrc: `rooftop.jpg`,
    name: `Sample Game`,
    developer: `Sample Game Creator`,
    desc: `Sample Description`,
    controls: [`←/→ Arrow Keys: Move horizontally`]
  },*/
  {
    filter: [`shoot`, `mp`, `fight`],
    link: `rooftop-snipers`,
    imgsrc: `rooftop.jpg`,
    name: `Rooftop Snipers`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: [`mp`],
    link: `tube-jumpers`,
    imgsrc: `tj.jpg`,
    name: `Tube Jumpers`,
    developer: `Pat Eichler`,
    desc: `Tube Jumpers is local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.`,
    controls: [`W/I: Jump`]
  },
  {
    filter: [`plat`],
    link: `slope`,
    imgsrc: `slope.jpg`,
    name: `Slope`,
    developer: `Rob Kay`,
    desc: `Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!`,
    controls: [`AD/QE/Arrow Keys: Control movement`]
  },
  {
    filter: [`mp`, `shoot`, `fight`],
    link: `getaway-shootout`,
    imgsrc: `getaway-shootout.jpg`,
    name: `Getaway Shootout`,
    developer: `Pat Eichler`,
    desc: `Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.`,
    controls: [`W/E (P1): Jump left/right`, `R (P1): Power up`, `I/O (P2): Jump left/right`, `P (P2): Power up`]
  },
  {
    filter: [`mp`],
    link: `eaglercraft`,
    imgsrc: `eaglercraft.png`,
    name: `Eaglercraft`,
    developer: `LAX1DUDE`,
    desc: `Eaglercraft is real Minecraft 1.5.2 that you can play in any regular web browser. That includes school chromebooks, it works on all chromebooks. You can join real Minecraft 1.5.2 servers with it through a custom proxy based on Bungeecord.
    
    If your keyboard inputs aren't registering, try refreshing the page.

    Want to join more servers? You can find supported servers here: https://g.eags.us/eaglercraft/servers`,
    controls: [`Controls can be modified ingame`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `2048`,
    imgsrc: `2048.png`,
    name: `2048`,
    developer: `Gabriele Cirulli`,
    desc: `2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`emu`],
    link: `emulatorjs`,
    imgsrc: `ejs.png`,
    name: `EmulatorJS`,
    developer: `ethanobrien`,
    desc: `The original decompilation of emulatorjs. Retroarch in your browser! Upload your own ROMS to play!
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem`,
    imgsrc: `gunmayhem.jpg`,
    name: `Gun Mayhem`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem is an extremely interesting flash format shooting game developed by Kevin Gu. The game is designed with 10 maps starting from prehistoric context to modern times. The player's task in this game is to destroy all enemies by shooting them down! Very simple, isn't it! Let's start the adventure now!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem-2`,
    imgsrc: `gunmayhem2.jpg`,
    name: `Gun Mayhem 2`,
    developer: `Kevin Gu`,
    desc: `More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once! 
    Gun Mayhem returns with brand new maps, and much more:
    - New campaign with 16 progressively challenging missions
    - Challenge levels to test your skills
    - 7 custom game modes
    - New guns, perks, and customization options`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shoot`, `mp`, `fight`, `flash`],
    link: `gun-mayhem-redux`,
    imgsrc: `gunmayhemredux.jpg`,
    name: `Gun Mayhem Redux`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem Redux which is the brand new chapter of Gun Mayhem, is now available. This chapter is little bit different compared to other chapters. For instance, game characters and war maps is minimized little bit to have a better view and game play but this doesn't cause the loose of excitement of the this superb game. 
    In this chapter, tens of brand new weapons will be awaiting you. Even, you will have a chance to war by using primitive weapons. The war resumes in the arena with the superior war maps and weapons and entertaining chapters!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`plat`],
    link: `run-3`,
    imgsrc: `run3.jpg`,
    name: `Run 3`,
    developer: `Player03`,
    desc: `There’s a whole new galaxy waiting to be explored! You can play Run 3 in the Explore Mode and the Infinite Mode. To add more levels to your Galaxy Map, choose the Explore Mode. The Runner will encounter lots of new tunnels and areas, and may bump into some friends along the way!
    If the game is stuck on the loading screen and not loading, try disabling your adblocker.`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Reset`, `P: Pause`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `wordle-unlimited`,
    imgsrc: `wordle.png`,
    name: `Wordle Unlimited`,
    developer: `Josh Wardle`,
    desc: `Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. This tweak has no limit to how many games you can play!`,
    controls: [`Type to interact`]
  },
  {
    filter: [`puzzle`],
    link: `tetris`,
    imgsrc: `tetris.jpg`,
    name: `Tetris`,
    developer: `Kyle Shanks`,
    desc: `Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a dispute over the appropriation of the rights in the late 1980s.`,
    controls: [`←/→ Arrow Keys: Move horizontally`, `↑: Rotate piece`, `↓: Soft Drop`, `P: Pause`, `Shift: Switch blocks`, `Space: Hard drop`, `R: Reset`]
  },
  {
    filter: [`sport`],
    link: `retro-bowl`,
    imgsrc: `retrobowl.jpg`,
    name: `Retro Bowl`,
    developer: `New Star Games`,
    desc: `Retro Bowl is an American style football game created by New Star Games. Are you ready to manage your dream team into victory? Be the boss of your NFL franchise, expand your roster, take care of your press duties to keep your team and fans happy.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Drag to throw`]
  },
  {
    filter: [`shoot`, `flash`],
    link: `zombocalypse`,
    imgsrc: `zombocalypse.jpg`,
    name: `Zombocalypse`,
    developer: `John Funtanilla`,
    desc: `Only you, and a whole lot of hungry hungry zombies. Fortunately, you get constant airdrops to deliver fresh weapons and med kits. Now, if you can only live long enough to earn some achievements and unlock some bigger guns. When things get really hairy, call in an airstrike!`,
    controls: [`AD/← →: Control movement`, `S/↓: Pick up items`, `W/↑: Call airstrike`, `Space: Attack`, `Shift: Pause game`]
  },
  {
    filter: [`plat`],
    link: `super-mario-64`,
    imgsrc: `sm64.jpeg`,
    name: `Super Mario 64`,
    developer: `Nintendo, ported by sm64js`,
    desc: `Super Mario 64 is a 1996 platform game for the Nintendo 64 and the first Super Mario game to feature 3D gameplay. It was developed by Nintendo EAD and published by Nintendo, now ported over to the web thanks to the folks over at sm64js!
    
    Note: The first key is the one you press, the second key is what it does in game (Ex: in game, it will say to press A. You would press "X" to achieve that.`,
    controls: [`Arrow Keys: Control movement`, `Enter: Start`, `X: A`, `C: B`, `Q: L`, `Space: Z`, `C-Stick: WASD`]
  },
  {
    filter: [`misc`],
    link: `adofai`,
    imgsrc: `adofai.png`,
    name: `A Dance of Fire and Ice`,
    developer: `7th Beat Games`,
    desc: `A Dance of Fire and Ice is a strict rhythm game.
  
    Keep your focus as you guide two orbiting planets along a winding path without breaking their perfect equilibrium.
    
    Press on every beat of the music to move in a line.
    
    Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.

    Check out the full game on Steam https://store.steampowered.com/app/977950/A_Dance_of_Fire_and_Ice/`,
    controls: [`Use any keys to play`]
  },
  {
    filter: [`drive`],
    link: `madalin-stunt-cars-2`,
    imgsrc: `msc2.jpg`,
    name: `Madalin Stunt Cars 2`,
    developer: `Madalin Games`,
    desc: `Welcome to the expansive open world of Madalin Stunt Cars 2. Pick your car and drift, drag and race your way through three massive fully explorable maps.

    Jump behind the wheel of the hottest supercars on the planet, race through cities and execute trick stunts with the sensational Madalin Stunt Cars 2.
    
    Pick a Huracan, LaFerrari, Pagani or Veneno and tear up the streets. Compete in multiplayer arenas with other MSC2 gamers.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Shift: Nitrous`, `R: Respawn`, `T: Open map`, `C: Change camera`]
  },
  {
    filter: [`shoot`],
    link: `superhot`,
    imgsrc: `superhot.jpg`,
    name: `SUPERHOT`,
    developer: `SUPERHOT Team`,
    desc: `No regenerating health bars. No conveniently placed ammo drops. 
    It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Space: Jump`, `Left Click: Shoot`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `my-friend-pedro`,
    imgsrc: `mfp.jpg`,
    name: `My Friend Pedro`,
    developer: `Dead Toast Entertainment`,
    desc: `An action packed slow motion face-blasting-simulator about friendship and imagination.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Shoot`, `Shift/Space: Slow down time`]
  },
  {
    filter: [`misc`],
    link: `cookie-clicker`,
    imgsrc: `cookie-clicker.jpg`,
    name: `Cookie Clicker`,
    developer: `Julien "Orteil" Thiennot`,
    desc: `Cookie Clicker is a game about making an absurd amount of cookies. To help you in this endeavor, you will recruit a wide variety of helpful cookie makers, like friendly Grandmas, Farms, Factories, and otherworldly Portals.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`],
    link: `doodle-jump`,
    imgsrc: `doodle.jpg`,
    name: `Doodle Jump`,
    developer: `Lima Sky`,
    desc: `Doodle Jump is a fun and cute game. Your must help our alien jump as high as possible onto a range of different hand-drawn platforms. This game is an endless game, so you must simply keep jumping and try to register as high a score as you possibly can!`,
    controls: [`Arrow Keys: Control movement`, `Space: Start/Restart game`]
  },
  {
    filter: [`misc`],
    link: `snake`,
    imgsrc: `snake.jpg`,
    name: `Snake`,
    developer: `Google`,
    desc: `How long can you last before your tail becomes your dinner? Take the challenge and eat all those apples! Be careful not to hit the wall!`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Restart`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `solitaire`,
    imgsrc: `solitaire.png`,
    name: `Solitaire`,
    developer: `Google`,
    desc: `Patience, card solitaire or just solitaire, is a genre of card games that can be played by a single player. Patience games can also be played in a head-to-head fashion with the winner selected by a scoring scheme.`,
    controls: [`Click to play`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `a-dark-room`,
    imgsrc: `adr.png`,
    name: `A Dark Room`,
    developer: `Doublespeak Games`,
    desc: `A Dark Room is a minimalist text-based adventure RPG game right in your browser! How far will you go, player?`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `emu`],
    link: `smasmw`,
    imgsrc: `smasmw.png`,
    name: `Super Mario Allstars + Super Mario World`,
    developer: `Nintendo`,
    desc: `Super Mario All-Stars + Super Mario World is a compilation title for the Super Nintendo Entertainment System. It includes all the games from Super Mario All-Stars, as well as Super Mario World. It was released in December 1994 in North America, 1995 in Europe, and was never released in Japan.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `align-4`,
    imgsrc: `align4.jpg`,
    name: `Align 4`,
    developer: `Will Boyd`,
    desc: `Align 4 is a two-player connection board game just like Connect 4, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. 
    The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The first player can always win by playing the right moves.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`],
    link: `pacman`,
    imgsrc: `pacman.jpg`,
    name: `Pac-Man`,
    developer: `Bandai Namco, remade by Shaun Williams`,
    desc: `Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment.`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`],
    link: `economical`,
    imgsrc: `economical.png`,
    name: `Economical`,
    developer: `baba_s`,
    desc: `2D puzzle action game where saving coins is important! Aiming for a goal using items. Make a way with blocks. Break a block with a hammer. But you need coins.`,
    controls: [`A/D: Control movement`, `W/Space: Jump`, `Mouse Wheel: Select items`]
  },
  {
    filter: [`plat`],
    link: `economical-2`,
    imgsrc: `economical2.png`,
    name: `Economical 2`,
    developer: `baba_s`,
    desc: `Version 2 of the 2D puzzle action game where saving coins is important! Aiming for a goal using items. Make a way with blocks. Break a block with a hammer. But you need coins.`,
    controls: [`A/D: Control movement`, `W/Space: Jump`, `Mouse Wheel: Select items`]
  },
  {
    filter: [`plat`],
    link: `color-on`,
    imgsrc: `coloron.png`,
    name: `COLORON`,
    developer: `Greg Hovanesyan`,
    desc: `COLORON is a fun and well-designed platformer. The goal is to match the color of the tower to the bouncing ball. Keep it going for as long as you can, just don't get mad.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `flash`],
    link: `meat-boy`,
    imgsrc: `meatboy.jpg`,
    name: `Meat Boy`,
    developer: `Team Meat`,
    desc: `This is NOT Super Meat Boy!

    Its simply the flash prototype that Super Meat Boy was based off of.
    SMB, will play very differently and is 100% new.. what im saying is if you even slightly enjoy the prototype, you will LOVE SMB!
    
    For more info on Super Meat Boy check out supermeatboy.com
    
    -Team Meat`,
    controls: [`←/→: Control movement`, `Space: Jump`]
  },
  {
    filter: [`misc`],
    link: `fnf`,
    imgsrc: `fnf.png`,
    name: `Friday Night Funkin`,
    developer: `ninjamuffin99`,
    desc: `Friday Night Funkin' is an open-source donationware rhythm game first released in 2020 for a game jam. 
    The game was developed by a team of four Newgrounds users, Cameron "Ninjamuffin99" Taylor, David "PhantomArcade" Brown, Isaac "Kawai Sprite" Garcia, and evilsk8r.`,
    controls: [`WASD/Arrow Keys: Interact`, `+/-: Change volume`]
  },
  {
    filter: [`plat`],
    link: `geometry-dash-remastered`,
    imgsrc: `gdr.jpg`,
    name: `Geometry Dash Remastered`,
    developer: `Arabask`,
    desc: `Welcome all to Geometry Dash Remastered, and, well, you already know the game. But this is more, this is 5 new levels you can't find anywhere else, this is ... REMASTERED (I'm totally serious).
    
    Warning: This game may be resource intensive`,
    controls: [`W/Space/Click/↑: Jump`, `Esc/P: Pause`]
  },
  {
    filter: [`misc`],
    link: `hackertyper`,
    imgsrc: `hackertyper.jpg`,
    name: `Hacker Typer`,
    developer: `David M.`,
    desc: `Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture. Since that time, it has brought smiles to millions of people across the globe. 
    Plus, many of you have temporarily transformed into hackers yourselves, all from a few clicks on the keyboard (and some programming magic behind the scenes!).`,
    controls: [`Click or type to play`]
  },
  {
    filter: [`plat`, `flash`],
    link: `fancy-pants-adventures`,
    imgsrc: `fancy-pants-adventures.png`,
    name: `Fancy Pants Adventures`,
    developer: `DrNeroCF`,
    desc: `Run Fast, Run Fancy.`,
    controls: [`←/→: Control movement`, `↓: Duck/roll`, `↑: Enter door`, `S: Jump`]
  },
  {
    filter: [`fight`, `flash`],
    link: `age-of-war`,
    imgsrc: `age-of-war.jpg`,
    name: `Age of War`,
    developer: `Louissi`,
    desc: `Take control of 16 different units and 15 different turrets to defend your base and destroy your enemy.
    In this game, you start at the cavern men's age, then evolve! There is a total of 5 ages, each with its units and turrets. I hope you have fun with this game! Sooo many hours of hard work.`,
    controls: [`Click to play`]
  },
  {
    filter: [`fight`, `flash`],
    link: `age-of-war-2`,
    imgsrc: `aow2.png`,
    name: `Age of War 2`,
    developer: `Louissi`,
    desc: `A terrible struggle is about to take place that will determine the future of your people. Only one possible solution to this conflict: to conquer or die! 
    Establish your strategy carefully, finding the right balance between attack and defense, and use your collected experience to upgrade your troops. 
    Age of War 2 is a great strategy / defense game, with easy handling but vast possibilities.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `flash`],
    link: `super-mario-63`,
    imgsrc: `sm63.png`,
    name: `Super Mario 63`,
    developer: `Runouw`,
    desc: `Super Mario 63 is a fan-game inspired by Nintendo's Super Mario 64. Many levels and features are based upon it and other of Nintendo's games, but a variety of them are completely original. 
    Among them include a detailed storyline, ability to play as Luigi, a highly customizable Level Designer with sharable codes, three different FLUDD Power-ups, four different power-caps, and 64 Shine Sprites & 64 Star Coins to collect.`,
    controls: [`Arrow Keys: Control movement`, `Z: Interact/stomp`, `X: Twirl`, `C: Launch from cannons`]
  },
  {
    filter: [`emu`,`drive`],
    link: `mariokart64`,
    imgsrc: `mariokart64.png`,
    name: `Mario Kart 64`,
    developer: `Nintendo`,
    desc: `Mario Kart 64 is a 1996 kart racing video game developed and published by Nintendo for the Nintendo 64. 
    The game is the second entry in the Mario Kart series and is the successor to Super Mario Kart for the Super Nintendo Entertainment System.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `mp`],
    link: `fbwg1`,
    imgsrc: `fbwg1.jpg`,
    name: `Fireboy and Watergirl 1`,
    developer: `Oslo Albet`,
    desc: `Fireboy and Watergirl 1 is the first cooperative platformer game in the Fireboy and Watergirl series. In this adventure, you explore 32 levels of the Forest Temple, controlling both the Fireboy and Watergirl characters through various puzzles.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-red`,
    imgsrc: `pokemon-red.jpg`,
    name: `Pokemon Red`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-blue`,
    imgsrc: `pokemon-blue.jpg`,
    name: `Pokemon Blue`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-firered`,
    imgsrc: `pokemon-firered.jpg`,
    name: `Pokemon Fire Red`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-leafgreen`,
    imgsrc: `pokemon-leafgreen.jpg`,
    name: `Pokemon Leaf Green`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-ruby`,
    imgsrc: `pokemon-ruby.jpg`,
    name: `Pokemon Ruby`,
    developer: `Nintendo and Game Freak`,
    desc: `Immerse yourself in the beautiful region of Hoenn, a place of masterful heroes and mysterious teams, of friendship and battles. As the new kid in town, you set off your journey as a Pokémon Trainer. Who knows what wonders and dangers await you? Now it's time to grab your gear and head out on your own...

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-sapphire`,
    imgsrc: `pokemon-sapphire.jpg`,
    name: `Pokemon Sapphire`,
    developer: `Nintendo and Game Freak`,
    desc: `Immerse yourself in the beautiful region of Hoenn, a place of masterful heroes and mysterious teams, of friendship and battles. As the new kid in town, you set off your journey as a Pokémon Trainer. Who knows what wonders and dangers await you? Now it's time to grab your gear and head out on your own...

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-emerald`,
    imgsrc: `pokemon-emerald.jpg`,
    name: `Pokemon Emerald`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-gold`,
    imgsrc: `pokemon-gold.jpg`,
    name: `Pokemon Gold`,
    developer: `Nintendo and Game Freak`,
    desc: `Enter a whole new world, with new Pokémon to capture, train and battle! Meet Professor Elm and get the all-new Poké Gear, including map, radio, cell phone and clock. Set the clock then watch as day turns to night and events take place in real time— and be sure to keep an eye out for Pokémon that come out only at night!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-silver`,
    imgsrc: `pokemon-silver.jpg`,
    name: `Pokemon Silver`,
    developer: `Nintendo and Game Freak`,
    desc: `Enter a whole new world, with new Pokémon to capture, train and battle! Meet Professor Elm and get the all-new Poké Gear, including map, radio, cell phone and clock. Set the clock then watch as day turns to night and events take place in real time— and be sure to keep an eye out for Pokémon that come out only at night!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `pokemon-crystal`,
    imgsrc: `pokemon-crystal.jpg`,
    name: `Pokemon Crystal`,
    developer: `Nintendo and Game Freak`,
    desc: `Originally released for the Game Boy™ Color system in 2000, the Pokémon™ Crystal game added several new features to the Pokémon franchise. 
    For the first time, players could choose a female or male character, Pokémon battles featured animation, and more. 
    And now, this Virtual Console release invites you to explore the Johto region again—or for the first time.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `smb`,
    imgsrc: `smb.jpg`,
    name: `Super Mario Bros`,
    developer: `Nintendo`,
    desc: `Mario Bros. is a 1983 platform game developed and published for arcades by Nintendo. 
    It was designed by Shigeru Miyamoto and Gunpei Yokoi, Nintendo's chief engineer. 
    Italian plumber Mario and his twin brother Luigi exterminate creatures emerging from the sewers by knocking them upside-down and kicking them away.
    
    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`],
    link: `tunnelrush`,
    imgsrc: `tunnelrush.jpg`,
    name: `Tunnel Rush`,
    developer: `Deer Cat`,
    desc: `Tunnel Rush online is the ultimate 3D single-player experience. Blaze your way through caves and tunnels. Each Tunnel Rush level drops you into a whirling kaleidoscope of hazards and 3D tunnels. Play Tunnel Rush to dodge barriers using just your wits and your keyboard.`,
    controls: [`AD/Arrow Keys: Control movement`, `Space: Pause/Restart`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life`,
    imgsrc: `ducklife.png`,
    name: `Duck Life`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-2`,
    imgsrc: `ducklife2.png`,
    name: `Duck Life 2`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-3`,
    imgsrc: `ducklife3.png`,
    name: `Duck Life 3`,
    developer: `Wix Games`,
    desc: `The latest installment of the Duck Life franchise is here! Train your little duck into a lean, mean, racing machine. Practice running, swimming, flying, and climbing to work your way to the top. 
    Compete in different competitions, chow down on some seed to gain up energy, then see if your duck can come out on top!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `flash`],
    link: `duck-life-4`,
    imgsrc: `ducklife4.png`,
    name: `Duck Life 4`,
    developer: `Wix Games`,
    desc: `Ducklife 4 is here, so get ready to race your ducks! In the near future, genetically engineered ducks have been banned from the races. It's up to you to make an elite duck who is capable of winning any race!
    Go through vigorous training sequences to build up speed and agility! Do you have the skills to win against all the other ducks? Good luck!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`misc`, `fight`],
    link: `sans-fight`,
    imgsrc: `sans-fight.jpg`,
    name: `Sans Fight`,
    developer: `Jcw87`,
    desc: `Undertale Sans Fight Clone; "do you wanna have a bad time? 'cause if you visit this page... you are REALLY not going to like what happens next."`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z: Proceed`]
  },
  {
    filter: [`plat`, `flash`],
    link: `unfairmario`,
    imgsrc: `unfairmario.jpg`,
    name: `Unfair Mario`,
    developer: `Gameitnow`,
    desc: `It is Super Mario, again. Our beloved little fellow is inviting you to travel alongside him throughout the Unfair Mario game. You will find yourself in the classic arcade game, but this time, with a little twist. 
    Some traps will be trickier, and some obstacles harder to overcome. But you will survive it, will you not? `,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `misc`],
    link: `thereisnogame`,
    imgsrc: `thereisnogame.jpg`,
    name: `There Is No Game`,
    developer: `KaMiZoTo`,
    desc: `There is no game. There is nothing to do.

    Do not click or tap anywhere. Really. DO NOT CLICK OR TAP ANYWHERE.
    
    Do not laugh as there is nothing to laugh about.`,
    controls: [`Mouse: Interact`]
  },
  {
    filter: [`sport`, `mp`, `emu`],
    link: `nba-jam`,
    imgsrc: `nbajam.png`,
    name: `NBA Jam`,
    developer: `Iguana Entertainment`,
    desc: `NBA Jam is a classic arcade basketball game developed and published back in 1993 and is the first entry to the NBA Jam series. 
    The game features 2 on 2 basketball match off and is one of the first sports games to feature real and digitized NBA-licensed teams and players!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`sport`, `mp`, `emu`],
    link: `nba-jam-tournament-edition`,
    imgsrc: `nbajamtournament.png`,
    name: `NBA Jam Tournament Edition`,
    developer: `Iguana Entertainment`,
    desc: `NBA Jam Tournament Edition is the second game in the basketball arcade series created by Midway. 

    The game features two-on-two fast paced matches with real life NBA players from the 1993-1994 seasons. 

    The game has over 120 NBA athletes plus more than 40 hidden characters to unlock.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`sport`, `mp`, `emu`],
    link: `nba-jam-2k20`,
    imgsrc: `nbajam2k20.png`,
    name: `NBA Jam 2K20`,
    developer: `Iguana Entertainment`,
    desc: `NBA Jam 2K20: Tournament Edition is a ROM hack of the game NBA Jam: Tournament Edition for the Super Nintendo Entertainment System (SNES). 
				This hack did not change the core aspects, as well as most game mechanics, of the game, and instead worked on updating its player and team roster to match the 2019-2020 NBA season.

		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `puzzle`, `flash`],
    link: `bloxorz`,
    imgsrc: `bloxorz.jpg`,
    name: `Bloxorz`,
    developer: `Damian Clarke`,
    desc: `Bloxorz is a brain twisting puzzle game of rolling blocks and switching bridges. You'll be rolling round in circles over the course of the 33 levels.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `raftwars`,
    imgsrc: `raftwars.jpg`,
    name: `Raft Wars`,
    developer: `Martijn Kunst`,
    desc: `Fight against the pirates in the raft wars and win the treasure in the game. The two heroes have cannons which can shoot very far. However this requires a very accurate shooting. Aim well and hit all the pirates in order to win the game.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `shoot`, `flash`],
    link: `raftwars2`,
    imgsrc: `raftwars2.jpg`,
    name: `Raft Wars 2`,
    developer: `Martijn Kunst`,
    desc: `Fight in the raft wars and hit all the targets to sabotage the business of the complex and get back the treasure that is buried in the ground. Defeat all enemies and pass all levels in the game. In the end you can submit your game score.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `flash`],
    link: `shift`,
    imgsrc: `shift.png`,
    name: `Shift`,
    developer: `Antony Lavelle`,
    desc: `Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `flash`],
    link: `shift-2`,
    imgsrc: `shift-2.png`,
    name: `Shift 2`,
    developer: `Antony Lavelle`,
    desc: `The sequel to The Shift! Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer, part 2!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `flash`],
    link: `portal-flash`,
    imgsrc: `portal-flash.jpg`,
    name: `Portal Flash`,
    developer: `We Create Stuff`,
    desc: `Portal: The Flash Version includes over 40 challenging, portals thinking levels, which features almost every feature the real game does, 
    in 2d - energy balls, cubes, turrets and even the famous crusher from the trailer. 
    The game also includes a console to mess around with after finishing the game, or just being frustrated by thinking with portals!`,
    controls: [`WAD: Control movement`, `Q: Open a blue portal`, `E: Open a yellow portal`, `R: Close portals`, `F: Pick up object`, `Esc/P: Pause game`]
  },
  {
    filter: [`plat`, `flash`],
    link: `alien-hominid`,
    imgsrc: `alien-hominid.png`,
    name: `Alien Hominid`,
    developer: `The Behemoth`,
    desc: `Alien Hominid is a side-scrolling shooter in a similar vein to games such as Metal Slug, where one hit instantly kills and has a two-player simultaneous play. 
    Players take over as the titular hominid, who has to fend off waves of secret agents. 
    His main arsenal is a blaster, while players can also melee close-up enemies and use a limited number of grenades to attack. 
    Advanced moves include rolling under shots, jumping on and biting off enemies' heads, temporarily scaring other enemies, and digging underground to drag enemies down with them.`,
    controls: [`Arrow Keys: Control movement`, `A: Shoot`, `S: Jump`]
  },
  {
    filter: [`plat`, `emu`],
    link: `dkc`,
    imgsrc: `dkc.jpg`,
    name: `Donkey Kong Country`,
    developer: `Rare, Nintendo`,
    desc: `Donkey Kong Country is a side-scrolling platform game in which the player must complete 40 levels to recover the Kongs' banana hoard, which has been stolen by the crocodilian Kremlings.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`sport`],
    link: `basketball-stars`,
    imgsrc: `bbstars.png`,
    name: `Basketball Stars`,
    developer: `MadPuffers`,
    desc: `Basketball Stars is a 2-player basketball game created by Madpuffers. You can play solo or with a friend as a variety of legendary basketball players. 
    Shoot basketball with the likes of LeBron James, James Harden, and Stephen Curry in Basketball Stars!`,
    controls: [`WASD/Arrow Keys: Control movement`, `B/L: Shoot/Steal`, `S/↓: Pump fake/block`, `Double-Tap A/D/←/→: Sprint`, `K/V: Super shot`]
  },
  {
    filter: [`sport`],
    link: `volley-gosh`,
    imgsrc: `volleygosh.png`,
    name: `Volley Gosh`,
    developer: `Gerard Delaney and Scott Bartlett`,
    desc: `Volley Gosh is a bright and happy ball game where you must try keep your "volley gosh ball" in the air for as long as possible. 
    Watch out for the increasing challenge and surprises that abound on the joyful beach while you get your next high score!`,
    controls: [`Arrow Keys: Control movement`, `Space: Hit the ball`, `Z: Dash`]
  },
  {
    filter: [`sport`, `fight`, `emu`],
    link: `streetfighter2`,
    imgsrc: `sf2.jpg`,
    name: `Street Fighter 2`,
    developer: `Capcom`,
    desc: `Street Fighter II: The World Warrior is a competitive fighting game originally released for the arcades in 1991. It is the second entry in the Street Fighter series and the arcade sequel to the original Street Fighter released in 1987. It was Capcom's fourteenth title that ran on the CP System arcade hardware. Street Fighter II improved upon the many concepts introduced in the first game, including the use of command-based special moves and a six-button configuration, while offering players a selection of multiple playable characters, each with their own unique fighting style.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`misc`, `flash`],
    link: `btd`,
    imgsrc: `btd.jpg`,
    name: `Bloons Tower Defense`,
    developer: `Ninja Kiwi`,
    desc: `Bloons Tower Defense. Stop any bloons from escaping the maze by building and upgrading bloons popping towers. Towers can throw darts, tacks, bombs, and ice.`,
    controls: [`Click: Interact`]
  },
  {
    filter: [`plat`, `emu`],
    link: `sonic-1`,
    imgsrc: `sonic1.jpg`,
    name: `Sonic 1`,
    developer: `Sega, Sonic Team`,
    desc: `Sonic the Hedgehog is a Japanese video game series and media franchise created and owned by Sega. The franchise follows Sonic, an anthropomorphic blue hedgehog who battles the evil Doctor Eggman, a mad scientist.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `emu`],
    link: `sonic-2`,
    imgsrc: `sonic2.jpg`,
    name: `Sonic 2`,
    developer: `Sega, Sonic Team`,
    desc: `Sonic the Hedgehog 2 is a 1992 platform game developed and published by Sega for the Sega Genesis. It follows Sonic as he attempts to stop Doctor Robotnik from stealing the Chaos Emeralds to power his space station, the Death Egg.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`emu`,`plat`],
    link: `sonic-3-knuckles`,
    imgsrc: `sonic3-knuckles.png`,
    name: `Sonic 3 & Knuckles`,
    developer: `Sega`,
    desc: `Dr. Eggman’s (AKA Dr. Robotnik’s) Death Egg was once again blasted by Sonic, crash-landing on the peak of a volcano on the Floating Island. 
    Dr. Eggman is still at large, and Sonic can’t allow him to get his hands on the Master Emerald and repair the Death Egg.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `misc`, `fight`],
    link: `unfairdyne`,
    imgsrc: `unfairdyne.jpg`,
    name: `Unfair Dyne`,
    developer: `Joe Zeng`,
    desc: `Break the word in half and add "UN" to each part. Undyne fight, but harder. 
    
    - If pressing Z doesn't work, try clicking near the edges and then pressing Z to play.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z: Proceed`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `minesweeper`,
    imgsrc: `minesweeper.png`,
    name: `Minesweeper`,
    developer: `PicturElements`,
    desc: `Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.`,
    controls: [`Left Click: Reveal tile`, `Right Click: Flag`, `Smiley Face: Reset game`]
  },
  {
    filter: [`plat`, `mp`, `fight`, `flash`],
    link: `ssf`,
    imgsrc: `ssf.png`,
    name: `Super Smash Flash`,
    developer: `McLeodGaming`,
    desc: `Choose your characters and options and battle it out with 28 different characters in the original title that started it all – Super Smash Flash!
    This award-winning Super Smash Bros. Fangame is complete with Classic Mode, Adventure Mode, and all of the things that make Smash Bros. 
    Feel like Smash Bros, with characters and content you’d never expect sprinkled about. Have fun!`,
    controls: [`Arrow Keys/WASD: Control movement`, `O/G: Jump`, `P/F: Attack`, `Backspace: Pause`]
  },
  {
    filter: [`plat`, `emu`],
    link: `a-link-to-the-past`,
    imgsrc: `alinktothepast.jpg`,
    name: `Legend of Zelda: A Link to the Past`,
    developer: `Nintendo`,
    desc: `Return to an age of magic and heroes! When an evil magician named Agahnim begins kidnapping young maidens in Hyrule in a quest to break the imprisoning seal on Ganon, a young boy named Link is called upon to stop him. 
    Link must venture into twisting mazes, dungeons, palaces and shadowy forests as he searches for the maidens and Princess Zelda. Traversing both Light and Dark Worlds, he must navigate eight dark dungeons, fighting evil enemies and huge bosses. 
    Help our hero prevent Ganon and Agahnim from shattering Hyrule forever. Whether you are a young knight, a heroine-in-training or a seasoned warrior, The Legend of Zelda: A Link to the Past will delight!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `flash`],
    link: `flood-runner-2`,
    imgsrc: `fr2.jpg`,
    name: `Flood Runner 2`,
    developer: `Ben Rad Vinyl`,
    desc: `A fast paced run-for-your-life game.

    Goal is to outrun the giant wave and survive. This game is played with only one button, get your timing right and set a top score!`,
    controls: [`Click/Space: Jump/glide`]
  },
  {
    filter: [`misc`],
    link: `stack`,
    imgsrc: `stack.png`,
    name: `Stack`,
    developer: `Steve Gardner`,
    desc: `Stack is a fun and simple game with a simple goal. Keep stacking up the blocks as high as you can! Just make sure you don't run out of blocks...`,
    controls: [`Click/Space: Place blocks`]
  },
  {
    filter: [`emu`,`plat`, `shoot`],
    link: `megaman`,
    imgsrc: `megaman.png`,
    name: `Mega Man`,
    developer: `Capcom`,
    desc: `Mega Man, known as Rockman in Japan, is a Japanese science fiction video game franchise created by Capcom, starring a series of robot characters each known by the moniker "Mega Man".
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`emu`,`plat`, `shoot`],
    link: `megaman-2`,
    imgsrc: `megaman2.jpg`,
    name: `Mega Man 2`,
    developer: `Capcom`,
    desc: `Mega Man 2 is an action game developed and published by Capcom for the Nintendo Entertainment System.
    Mega Man 2 continues Mega Man's battle against the evil Dr. Wily and his rogue robots.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`misc`, `puzzle`],
    link: `linerider`,
    imgsrc: `linerider.jpg`,
    name: `Line Rider`,
    developer: `Emergent Studios`,
    desc: `Line Rider is a classic sandbox game where you draw a track for the sledder to ride on. Simple concept, endless possibilities, oddly addicting!`,
    controls: [`Click and hold to draw`]
  },
  {
    filter: [`misc`],
    link: `monkeytype-lite`,
    imgsrc: `monkeytype-lite.png`,
    name: `Monkeytype Lite`,
    developer: `Miodec`,
    desc: `A minimalistic, customisable typing website. Test yourself in various modes, track your progress and improve your typing speed. 
    Credits to Miodec for making Monkeytype and for VocalNutria for providing a codebase to start from.
    Remade by r0cket to replicate some core features of Monkeytype.
    For the best experience: https://monkeytype.com/`,
    controls: [`Type to interact`]
  },
  {
    filter: [`plat`],
    link: `spelunky`,
    imgsrc: `spelunky.png`,
    name: `Spelunky`,
    developer: `Derek Yu`,
    desc: `Spelunky is a cave exploration / treasure-hunting game inspired by classic platform games and roguelikes, where the goal is to grab as much treasure from the cave as possible. 
    Every time you play the cave's layout will be different. Use your wits, your reflexes, and the items available to you to survive and go ever deeper! 
    Perhaps at the end you may find what you're looking for...`,
    controls: [`←/→: Control movement`, `↑: Look up/climb`, `↓: Look down/Crouch/Climb/Run`, `X: Action`, `Z: Jump`, `C: Cycle Item`, `Shift: Run`]
  },
  {
    filter: [`emu`,`plat`, `shoot`],
    link: `metroid`,
    imgsrc: `metroid.jpg`,
    name: `Metroid`,
    developer: `Nintendo`,
    desc: `Metroid is a Japanese action-adventure game franchise created by Nintendo. 
    The player controls bounty hunter Samus Aran, who protects the galaxy from Space Pirates and other malevolent forces and their attempts to harness the power of the parasitic Metroid creatures.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`emu`,`plat`, `shoot`],
    link: `metroid-2`,
    imgsrc: `metroid2.jpg`,
    name: `Metroid II`,
    developer: `Nintendo`,
    desc: `Metroid II: Return of Samus is an action-adventure game developed and published by Nintendo for the Game Boy.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`mp`, `fight`, `emu`],
    link: `smash-remix`,
    imgsrc: `smash-remix.jpg`,
    name: `Smash Remix`,
    developer: `The_Smashfather`,
    desc: `Immerse yourself in a world of mind-blowing fights in Smash Remix and get ready to test your fighting skills! 
    Enjoy this fun mod inspired by the classic Super Smash Bros. as you live a thrilling experience surrounded by the best and bravest characters from classic video games.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`misc`],
    link: `alphabet-speed-test`,
    imgsrc: `alphabettest.png`,
    name: `Alphabet Speed Test`,
    developer: `Sindre`,
    desc: `Alphabet Speed Test is a fun little game to check how quickly you can type the alphabet on your keyboard!`,
    controls: [`Type to interact`]
  },
  {
    filter: [`drive`, `misc`],
    link: `tanuki-sunset`,
    imgsrc: `tanuki.png`,
    name: `Tanuki Sunset`,
    developer: `Rewind Games`,
    desc: `Tanuki Sunset Classic is a third-person longboard-skating game where players play as a raccoon skating downhill on a procedurally generated synthwave-themed seaside road.

    Drift your way around the narrow corners, gather Tanuki Bits to fill up your Bonus Roulette Meter and try and gather as many points as you can.
    
    Drift often. Get some air-time and avoid cars and obstacles while pushing your luck close to the walls and edges to get near-miss moments and tight-squeezes to maximize your score.
    
    Get the full game on Steam: https://store.steampowered.com/app/1251460/Tanuki_Sunset/`,
    controls: [`W: Speed Stance (Hold)`, `AD/←/→: Control movement`, `S: 180 Slide`, `Space: Drift`, `Esc: Pause`]
  },
  {
    filter: [`puzzle`, `flash`],
    link: `the-impossible-quiz`,
    imgsrc: `tiq.png`,
    name: `The Impossible Quiz`,
    developer: `Splapp-me-do`,
    desc: `The Impossible Quiz is an online quiz game that is… Almost impossible. The questions are all difficult to answer and require lateral thinking. 
    There are 110 questions to get through and you only have three lives, so make sure you’re ready to think creatively! `,
    controls: [`Click: Interact`]
  },
  {
    filter: [`puzzle`, `flash`],
    link: `the-impossible-quiz-2`,
    imgsrc: `tiq2.png`,
    name: `The Impossible Quiz 2`,
    developer: `Splapp-me-do`,
    desc: `The Impossible Quiz 2 is the second installment of the most annoying quiz on the internet. Although not entirely impossible, you must navigate through a series of illogical questions and hope to answer them correctly. 
    Each wrong answer costs you a life, so memorize your answers and try again to get further!`,
    controls: [`Click: Interact`]  
  },
  {
    filter: [`drive`],
    link: `motox3m`,
    imgsrc: `motox3m.png`,
    name: `Moto X3M`,
    developer: `MadPuffers`,
    desc: `Use the arrow keys to accelerate, brake, or flip your bike. Make it through the course as quickly as possible. Do stunts in the air to shave time off of your run!`,
    controls: [`WASD/Arrow Keys: Control movement`]  
  },
  {
    filter: [`plat`, `flash`],
    link: `learn-to-fly`,
    imgsrc: `learntofly.png`,
    name: `Learn To Fly`,
    developer: `lightbringer777`,
    desc: `One Penguin Takes it personally when he is surfing the web and stumbles upon a web site telling him that he cant fly, 
    after that he sets his mind to research and practice flying until he can prove the world that he can.. Learn to Fly!`,
    controls: [`←/→: Adjust angle`, `Space: Rockets`]
  },
  {
    filter: [`shoot`, `plat`, `flash`],
    link: `binding-of-isaac`,
    imgsrc: `boi.png`,
    name: `Binding of Isaac`,
    developer: `Edmund McMillen, Florian Himsl`,
    desc: `When Isaac’s mother starts hearing the voice of God demanding a sacrifice be made to prove her faith, Isaac escapes into the basement facing droves of deranged enemies, lost brothers and sisters, his fears, and eventually his mother.
    The Binding of Isaac is a randomly generated action RPG shooter with heavy Rogue-like elements. 
    Following Isaac on his journey players will find bizarre treasures that change Isaac’s form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets and fight his way to safety.
    
    Full version on Steam: https://store.steampowered.com/app/113200/The_Binding_of_Isaac/`,
    controls: [`WASD: Control movement`, `Arrow Keys: Control shooting`]
  },
  {
    filter: [`emu`,`shoot`],
    link: `doom`,
    imgsrc: `doom.png`,
    name: `Doom`,
    developer: `id Software, GT Interactive`,
    desc: `Doom is a 1993 first-person shooter game developed by id Software. Players assume the role of a space marine, popularly known as Doomguy, fighting their way through hordes of invading demons from Hell.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `flash`],
    link: `ultimate-flash-sonic`,
    imgsrc: `ufsonic.png`,
    name: `Ultimate Flash Sonic`,
    developer: `Dennis-Gid`,
    desc: `Ultimate Flash Sonic is a sonic fangame made in Adobe Flash. It was created by Dennis-Gid and it was uploaded to Newgrounds on Febuary 21, 2004.`,
    controls: [`WASD: Control movement`, `Arrow Keys: Control shooting`]
  },
  {
    filter: [`plat`],
    link: `jimothy-piggerton`,
    imgsrc: `jimpig.png`,
    name: `Jimothy Piggerton`,
    developer: `Niborious7`,
    desc: `Run and Jump to Save Piggerton from the deadly Butcher!`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `plat`, `flash`],
    link: `worlds-hardest-game`,
    imgsrc: `whg.png`,
    name: `World's Hardest Game`,
    developer: `Stephen Critoph`,
    desc: `This is the self-proclaimed World's Hardest Game. Don't play it; it's too difficult! It really is! Wow this game has to be one of the most challenging but addictive games ever to be made! 
    The aim is simple: all you have to do is guide your red block from one end of the level to the other and collect any yellow circles on the way. This might sound easy, but believe us when we say it isn't!`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`puzzle`, `plat`, `flash`],
    link: `worlds-hardest-game-2`,
    imgsrc: `whg2.png`,
    name: `World's Hardest Game 2`,
    developer: `Stephen Critoph`,
    desc: `World's Hardest Game 2 is the second episode of the self-proclaimed world's hardest game series! 
    Hone your reflexes and accuracy as you try to move your little block to the end of each stage without touching the obstacles. 
    Doing so will bring you back to the start so you can try again. 
    The difficulty goes up after every stage, so keep your focus and see how far you can get in the World's Hardest Game 2.`,
    controls: [`WASD/Arrow Keys: Control movement`]
  },
  {
    filter: [`flash`, `misc`],
    link: `douchebag-workout`,
    imgsrc: `dw.jpg`,
    name: `Douchebag Workout`,
    developer: `Pyrozen`,
    desc: `Douchebag Workout is a button-mashing skill game where you level up by working out. You start as a skinny guy insecure about his body image. 
    The solution - get unnaturally large muscles and become a douchebag. Work all of your key muscle areas, buy supplements, and become the ripped chad you always imagined.`,
    controls: [`Click: Interact`]
  },
  {
    filter: [`flash`, `misc`],
    link: `douchebag-workout-2`,
    imgsrc: `dw2.jpg`,
    name: `Douchebag Workout 2`,
    developer: `Pyrozen`,
    desc: `Another Douche wanna be! Help this poor weak guy get into shape, start a social life, get some awesome swag to finally get with the ladies! 
    Do you have what it takes to become big, tanned and ripped? A hilarious game of upgrades and deep social exploration!`,
    controls: [`Click: Interact`]
  },
];

//Fetch game count
const gamescounter = document.getElementById("games-count");

if (gamescounter != null) {
  gamescounter.innerText = gamesArr.length;
}
