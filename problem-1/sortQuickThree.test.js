const charAt = (word, d) => (d < word.length ? word.charCodeAt(d) : -1);

const exchange = (words, i, j) => {
  [words[i], words[j]] = [words[j], words[i]];
};

const sortQuickThree = (words, lo = 0, hi = words.length - 1, d = 0) => {
};

test('sortQuickThree는 문자열을 정렬한다.', () => {
  const words = [
    'CAR',
    'DOG',
    'CAB',
    'DO',
    'CAFE',
    'CAT',
  ];

  sortQuickThree(words);

  expect(words).toEqual([
    'CAB',
    'CAFE',
    'CAR',
    'CAT',
    'DO',
    'DOG',
  ]);
});

test('sortQuickThree는 문자열을 정렬한다.', () => {
  const words = [
    'APPLE',
    'AGENT',
    'APEX',
    'ANIMAL',
    'AXE',
    'ASTRONOMY',
    'ANT',
    'ARRAY',
    'ACT',
    'DRAGON',
    'DRAW',
    'DOODLE',
    'DRIVER',
    'DELTA',
    'ECHO',
    'ELEPHANT',
    'ECLIPSE',
    'EVOLUTION',
    'EAGLE',
    'FOX',
    'FLOWER',
    'FAST',
    'ZOOM',
    'ZEBRA',
    'ZENITH',
    'BRAVE',
    'BROTHER',
    'BREW',
    'BRICK',
    'BLAZE',
    'CORE',
    'CRUST',
    'CUT',
    'COW',
    'KITE',
    'KING',
    'KNOB',
    'KNIFE',
    'KNIGHT',
    'LION',
    'LICK',
    'LIKE',
    'LOVE',
    'LUXURY',
    'OX',
    'OPERA',
    'OPTICAL',
    'ORA',
    'PINK',
    'POKE',
    'QUESTION',
    'QUEUE',
    'QUICK',
    'QATAR',
    'UNICORN',
    'UDACITY',
    'UNIFY',
    'UPTAKE',
    'VAST',
    'VEX',
    'VITAMIN',
    'VORTEX',
    'VOW',
    'WAX',
    'WONDER',
    'XYLOPHONE',
    'XENON',
    'YARN',
    'YAK',
    'YOKE',
    'YOGA',
    'ZERO',
    'ZOO',
    'ZOOM',
    'ARGON',
    'ARROW',
    'ARSENAL',
    'BETA',
    'BULLET',
    'BULL',
    'TAX',
    'TAME',
    'THING',
    'OPT',
    'OPAL',
    'OPEN',
    'NAVE',
    'NAIL',
    'NAME',
    'EAGLE',
    'EAR',
    'EARLY',
    'DRAG',
    'DRAPE',
  ];

  const answer = [...words].sort();

  sortQuickThree(words);

  expect(words).toEqual(answer);
});
