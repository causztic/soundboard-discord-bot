# Motivation
I wanted to add a soundboard for my DND sessions, but I faced some issues:
- Existing soundboards will have their audio echo-cancelled by discord while aggregating the output. 
- The loopback app is really cool and works well, but it's outside my budget.
- Existing soundboard bots require typing in the names of the clips, but I want something more instant.

# Solution
This is solved by having a global hook to specific keyboard shortcuts, that plays sound clips to a discord voice channel, whenever I press them. These shortcuts are currently a key combination of `ctrl+cmd+n`, where n is a digit from 0 to 9. This can be extended to a custom macropad with printed logos for the sound clips!

# Setup

This only works with Nodejs 12 / darwin / x64 as I have only manually compiled the node library for this architecture. I tested this on Node 14 and wasn't able to do it, but you may attempt to compile iohook for other environments by following these steps: https://github.com/wilix-team/iohook/issues/124#issuecomment-731925826

1. `nvm use 12`
2. `npm i` 
3. Replace all files in `node_modules/iohook/builds/node-v72-darwin-x64/build/Release` with `iohook.node` in the project root directory
4. Place your clips in the `clips` folder. Number them accordingly from 1 to 10.

## Usage
1. `TOKEN=<your bot token> npm start`
2. Enter a voice channel
3. Type `s!start` in a bot accessible channel
4. TODO: add custom mapping reads - take a look at `src/keycodes.ts` to see the current combinations.
5. When you are done, `s!stop` to disconnect the bot.
