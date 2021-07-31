'use strict';

const ioHook = require('iohook');

// key n has a keycode of n + 1
const numberKeyCodes = Array.from({ length: 10 }, (_v, i) => i + 2);

ioHook.on('keydown', (event) => {
  // ctrl + cmd key
  if (event.ctrlKey && event.metaKey) {
    if (numberKeyCodes.includes(event.keycode)) {
      console.log(`playing ${event.keycode-1}.mp3`);
    }
  }
});

// Register and start hook
ioHook.start();