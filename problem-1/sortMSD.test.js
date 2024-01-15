const exchange = (list, a, b) => {
  [list[b], list[a]] = [list[a], list[b]];
};

const less = (a, b, d) => {
  for (let i = d; i < Math.min(a.length, b.length); i++) {
    if (a.charCodeAt(i) < b.charCodeAt(i)) {
      return true;
    }
    if (a.charCodeAt(i) > b.charCodeAt(i)) {
      return false;
    }
  }
  return a.length < b.length;
};

const insertionSort = (list, lo, hi, d) => {
  const { length } = list;

  for (let i = lo + 1; i <= hi; i++) {
    for (let j = i; j > lo; j--) {
      if (less(list[j], list[j - 1], d)) {
        exchange(list, j, j - 1);
      } else {
        break;
      }
    }
  }
};

const R = 256;
const CUTOFF = 15;

const charAt = (s, d) => (d < s.length ? s.charCodeAt(d) : -1);

const sort = (words, aux, lo, hi, d) => {
  // 정렬 범위
  if (hi <= lo + CUTOFF) {
    insertionSort(words, lo, hi, d);
    return;
  }

  const count = new Array(R + 2).fill(0);

  // 빈도수
  for (let i = lo; i <= hi; i++) {
    count[charAt(words[i], d) + 2]++;
  }

  // 시작 인덱스
  for (let i = 0; i < R + 1; i++) {
    count[i + 1] += count[i];
  }

  // 임시 배열 분해
  for (let i = lo; i <= hi; i++) {
    aux[count[charAt(words[i], d) + 1]++] = words[i];
  }

  // 원본 수정
  for (let i = lo; i <= hi; i++) {
    words[i] = aux[i - lo];
  }

  for (let i = 0; i < R; i++) {
    sort(words, aux, lo + count[i], lo + count[i + 1] - 1, d + 1);
  }
};

const sortMSD = (words) => {
  const N = words.length;
  const aux = [];
  sort(words, aux, 0, N - 1, 0);
};

test('sortMSD는 문자열을 정렬한다.', () => {
  const words = [
    'CAR',
    'DOG',
    'CAB',
    'DO',
    'CAFE',
    'CAT',
  ];

  sortMSD(words, 4);

  expect(words).toEqual([
    'CAB',
    'CAFE',
    'CAR',
    'CAT',
    'DO',
    'DOG',
  ]);
});

test('sortMSD는 문자열을 정렬한다.', () => {
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

  sortMSD(words);

  expect(words).toEqual(answer);
});
