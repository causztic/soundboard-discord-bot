'use strict';

require('@discordjs/opus');
const Discord = require('discord.js');
const ioHook = require('iohook');
const { convertKeyPressToAudio } = require('./src/keycodes');

const client = new Discord.Client();
let voiceConnection;

client.on('message', async message => {
  if (message.content === 's!start' && message.member.voice.channel) {
    voiceConnection = await message.member.voice.channel.join();

    ioHook.on('keyup', (event) => {
      const clip = convertKeyPressToAudio(event);

      if (clip !== null) {
        voiceConnection.play(`clips/${clip}`);
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

