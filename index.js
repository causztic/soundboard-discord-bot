'use strict';

const Discord = require('discord.js');
const { OpusEncoder } = require('@discordjs/opus');
const ioHook = require('iohook');

// TODO: refactor

const client = new Discord.Client();
// key n has a keycode of n + 1
const numberKeyCodes = Array.from({ length: 10 }, (_v, i) => i + 2);
let voiceConnection;

client.on('message', async message => {
  if (message.content === 's!start' && message.member.voice.channel) {
    voiceConnection = await message.member.voice.channel.join();

    ioHook.on('keydown', (event) => {
      // ctrl + cmd key
      if (event.ctrlKey && event.metaKey) {
        if (numberKeyCodes.includes(event.keycode)) {
          const clip = `${event.keycode-1}.mp3`;
          console.log(`playing ${clip}`);
          voiceConnection.play(`clips/${clip}`);
        }
      }
    });
  
    // Register and start hook
    ioHook.start();
  }

  if (message.content === 's!stop') {
    voiceConnection.disconnect();
    ioHook.stop();
  }
});

client.login(process.env.TOKEN);

