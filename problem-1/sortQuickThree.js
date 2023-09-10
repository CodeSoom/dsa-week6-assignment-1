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

module.exports = {
  sortQuickThree,
};
