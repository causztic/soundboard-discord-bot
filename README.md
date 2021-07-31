# Setup

This only works with Nodejs 12 / darwin / x64 as I have only manually compiled the node library for this architecture. I tested this on Node 14 and wasn't able to do it, but you may attempt to compile iohook for other environments by following these steps: https://github.com/wilix-team/iohook/issues/124#issuecomment-731925826

1. `nvm use 12`
2. `npm i` 
3. Replace all files in `node_modules/iohook/builds/node-v72-darwin-x64/build/Release` with `iohook.node` in the project root directory
4. Place your clips in the `clips` folder. Number them accordingly from 1 to 10.
5. Play the clips by pressing the combination of `ctrl+cmd+n`, where n is a digit from 0 to 9. (0 is clip 10)
