const KEYCODE_MAPPING = {
  59: 'F1',
  60: 'F2',
  61: 'F3',
  62: 'F4',
  63: 'F5',
  64: 'F6',
  65: 'F7',
  66: 'F8',
  67: 'F9',
}

const convertKeyPressToAudio = ({ ctrlKey, metaKey, keycode }) => {
  // TODO: support reading a file for a list of macros and mappings?
  console.log(ctrlKey, metaKey, keycode, KEYCODE_MAPPING[keycode]);

  if (ctrlKey && metaKey && KEYCODE_MAPPING[keycode]) {
    const clip = `${KEYCODE_MAPPING[keycode]}.mp3`;
    console.log(`playing ${clip}`);

    return clip;
  }

  return null;
}

module.exports = { convertKeyPressToAudio };
