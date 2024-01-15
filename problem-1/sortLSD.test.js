const sortLSD = (words, w = words.length) => {
  const N = words.length;
  const R = 256;
  const aux = [];

  for (let d = w - 1; d >= 0; d--) {
    const count = new Array(R + 1).fill(0);

    // 빈도수
    // words[i].charCodeAt(d) 현재 단어 위치
    for (let i = 0; i < N; i++) {
      count[words[i].charCodeAt(d) + 1]++;
    }

    // 처음 등장 인덱스
    for (let i = 0; i < R; i++) {
      count[i + 1] += count[i];
    }

    // 임시 배열 분배
    for (let i = 0; i < N; i++) {
      aux[count[words[i].charCodeAt(d)]++] = words[i];
    }

    // 원본 수정
    for (let i = 0; i < N; i++) {
      words[i] = aux[i];
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
