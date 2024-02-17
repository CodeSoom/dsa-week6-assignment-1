const sortLSD = (words, rangeToSort = words.length) => {
  const numberOfWords = words.length;
  const rangeOfChars = 256; // ASCII
  const temp = [];

  for (let d = rangeToSort - 1; d >= 0; d--) {
    const frequencyOfChar = Array.from({ length: rangeOfChars + 1 }, () => 0);

    // todo: 현재 문자열의 각 문자마다 ASCII 코드를 구하여 등장 빈도수를 계산한다.
    for (let i = 0; i < numberOfWords; i++) {
      frequencyOfChar[words[i].charCodeAt(d) + 1]++;
    }

    // todo: 각 문자가 처음 등장하는 인덱스를 구한다.
    for (let i = 0; i < rangeOfChars; i++) {
      frequencyOfChar[i + 1] += frequencyOfChar[i];
    }

    // todo: 임시 배열에 문자열을 정렬한다.
    for (let i = 0; i < numberOfWords; i++) {
      temp[frequencyOfChar[words[i].charCodeAt(d)]++] = words[i];
    }

    // todo: 임시 배열에 정렬된 것처럼 원본 배열도 정렬한다.
    for (let i = 0; i < numberOfWords; i++) {
      words[i] = temp[i];
    }
  }
};

test('sortLSD는 문자열을 정렬한다.', () => {
  const words = [
    'CABE',
    'ABED',
    'DAEF',
    'CADE',
    'BCDF',
  ];

  sortLSD(words, 4);

  expect(words).toEqual([
    'ABED',
    'BCDF',
    'CABE',
    'CADE',
    'DAEF',
  ]);
});

test('sortLSD는 문자열을 정렬한다.', () => {
  const words = [
    'BRICK',
    'BLAZE',
    'APPLE',
    'AGENT',
    'ARRAY',
    'DELTA',
    'DRIVE',
    'DRAPE',
    'ELEPH',
    'FASTS',
    'FLOWS',
    'FROZE',
    'GLAZE',
    'GLOWY',
    'HEART',
    'HELMS',
    'ICING',
    'INDEX',
    'JOKER',
    'KITES',
    'LEMON',
    'LILAC',
    'LIONS',
    'LYRIC',
    'MANGO',
    'MIRTH',
    'NIGHT',
    'NOVEL',
    'OCEAN',
    'OPERA',
    'PEARS',
    'PLUMB',
    'QUART',
    'QUICK',
    'RACER',
    'REACT',
    'SLOTH',
    'SMITH',
    'TAXES',
    'TRICK',
    'UNBOX',
    'VEXED',
    'WAXEN',
    'WINDY',
    'YARNY',
    'YEAST',
    'ZEBRA',
    'ALPHA',
    'BETAS',
    'CANDY',
    'DOGMA',
    'DOZEN',
    'EPOCH',
    'EQUAL',
    'FILMS',
    'GRAPE',
    'HOUSE',
    'INNER',
    'JUMPS',
    'KNOBS',
    'LUNCH',
    'MILKY',
    'NERDS',
    'NINJA',
    'OMEGA',
    'PULSE',
    'RUSTY',
    'SHINY',
    'TIGER',
    'UPLIN',
    'VAPOR',
    'WILDY',
    'XENON',
    'YOGIC',
    'ZIPPY',
    'BRUSH',
    'BEAST',
    'CLONE',
    'DETER',
    'DUSTY',
    'EXACT',
    'FABLE',
    'GHOUL',
    'HONEY',
    'IRRIT',
    'JUICE',
    'KNAVE',
    'LUMPS',
    'MIGHT',
    'NOTCH',
    'NURSE',
    'OLDEN',
    'PROUD',
    'RISKS',
    'SHRED',
    'TWINE',
    'UPSET',
    'VIRUS',
    'WORTH',
    'YIELD',
    'ZONES',
  ];

  const answer = [...words].sort();

  sortLSD(words, 5);

  expect(words).toEqual(answer);
});
