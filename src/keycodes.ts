export declare type KeyPressEvent = {
  ctrlKey: string;
  metaKey: string;
  keycode: number;
}

const getKey = (keyCode: number): string => {
  const KEYCODE_MAPPING: Record<number, string> = {
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

  return KEYCODE_MAPPING[keyCode]!;
}


export const convertKeyPressToAudio = ({ ctrlKey, metaKey, keycode }: KeyPressEvent) => {
  // TODO: support reading a file for a list of macros and mappings?
  const key = getKey(keycode);
  console.log(ctrlKey, metaKey, keycode, key);

  if (ctrlKey && metaKey && key) {
    const clip = `${key}.mp3`;
    console.log(`playing ${clip}`);

    return clip;
  }

  return null;
}
