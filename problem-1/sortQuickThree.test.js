const charAt = (word, d) => (d < word.length ? word.charCodeAt(d) : -1);

const exchange = (words, i, j) => {
  [words[i], words[j]] = [words[j], words[i]];
};

const sortQuickThree = (words, low = 0, high = words.length - 1, d = 0) => {
  if (high <= low) {
    return;
  }

  const pivot = charAt(words[low], d);

  let lt = low;
  let gt = high;
  let i = low + 1;

  while (i <= gt) {
    const t = charAt(words[i], d);

    if (t < pivot) { // todo: 기준 문자보다 작으면 LT 와 교환하고, LT 와 i 를 한 칸씩 이동하기
      exchange(words, lt++, i++);
    } else if (t > pivot) { // todo: 기준 문자보다 크다면 GT 와 교환하고, GT 를 앞으로 한 칸 이동하기
      exchange(words, i, gt--);
    } else {
      i++; // todo: 기준 문자와 같다면 i 만 이동하기
    }
  }

  // todo: 기준 문자보다 작은 그룹 -> 맨 처음 문자를 기준으로 다시 정렬하기
  sortQuickThree(words, low, lt - 1, d);

  // todo: 기준 문자와 같은 그룹 -> 다음 문자를 기준으로 다시 정렬하기
  if (pivot >= 0) {
    sortQuickThree(words, lt, gt, d + 1);
  }

  // todo: 기준 문자보다 큰 그룹 -> 맨 처음 문자를 기준으로 다시 정렬하기
  sortQuickThree(words, gt + 1, high, d);
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
