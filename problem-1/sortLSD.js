const sortLSD = (words, w = words.length) => {
  const N = words.length;
  const R = 256;
  const aux = [];

  for (let d = w - 1; d >= 0; d--) {
    const count = Array.from({ length: R + 1 }, () => 0);
    for (let i = 0; i < N; i++) {
      count[words[i].charCodeAt(d) + 1]++;
    }

    for (let i = 0; i < R; i++) {
      count[i + 1] += count[i];
    }

    for (let i = 0; i < N; i++) {
      aux[count[words[i].charCodeAt(d)]++] = words[i];
    }

    for (let i = 0; i < N; i++) {
      words[i] = aux[i];
    }
  }
};

module.exports = {
  sortLSD,
};
