import '@discordjs/opus';

import Discord from 'discord.js';
import ioHook from 'iohook';
import fs from 'fs';

import { convertKeyPressToFile, KeyPressEvent } from './src/keycodes';

const client = new Discord.Client();
const soundClips: Record<string, string> = {};

fs.readdirSync('clips').forEach(
  (filename) => {
    // clips should be named in a specific format:
    // Fx.mp3, or if yo want to remember what the sound clip is, Fx some description.mp3,
    // where Fx is the function key pressed

    const key = `${filename.split('.')[0].split(' ')[0]}`;
    Object.assign(soundClips, { [key]: `clips/${filename}` });
  });
    

let voiceConnection: Discord.VoiceConnection;

client.on('message', async message => {
  if (message.content === 's!start' && message.member?.voice?.channel) {
    voiceConnection = await message.member.voice.channel.join();

    ioHook.on('keyup', (event: KeyPressEvent) => {
      const key = convertKeyPressToFile(event);
      if (key === null) {
        return;
      }

      const clip = soundClips[key];
      if (clip) {
        voiceConnection.play(clip);
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

