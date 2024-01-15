const charAt = (word, d) => (d < word.length ? word.charCodeAt(d) : -1);

const exchange = (words, i, j) => {
  [words[i], words[j]] = [words[j], words[i]];
};

const sortQuickThree = (words, lo = 0, hi = words.length - 1, d = 0) => {
  if (hi <= lo) {
    return;
  }

  const pivot = charAt(words[lo], d);

  let lt = lo;
  let gt = hi;
  let i = lo + 1;

  while (i <= gt) {
    const t = charAt(words[i], d);
    if (t < pivot) {
      exchange(words, lt++, i++);
    } else if (t > pivot) {
      exchange(words, i, gt--);
    } else {
      i++;
    }
  }

  sortQuickThree(words, lo, lt - 1, d);
  if (pivot >= 0) {
    sortQuickThree(words, lt, gt, d + 1);
  }
  sortQuickThree(words, gt + 1, hi, d);
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
