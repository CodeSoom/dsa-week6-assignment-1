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
  if (hi <= lo + CUTOFF) {
    insertionSort(words, lo, hi, d);
    return;
  }

  const count = Array.from({ length: R + 2 }, () => 0);

  for (let i = lo; i <= hi; i++) {
    count[charAt(words[i], d) + 2]++;
  }

  for (let i = 0; i < R + 1; i++) {
    count[i + 1] += count[i];
  }

  for (let i = lo; i <= hi; i++) {
    aux[count[charAt(words[i], d) + 1]++] = words[i];
  }

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

module.exports = {
  sortMSD,
};
