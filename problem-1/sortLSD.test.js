const sortLSD = (words, w = words.length) => {
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
