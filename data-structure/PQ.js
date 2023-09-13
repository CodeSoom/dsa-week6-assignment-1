const less = (a, b) => a < b;

class PQ {
  #items;

  #n;

  #comparer;

  constructor(maxCount, comparer = less) {
    this.#items = new Array(maxCount + 1);
    this.#n = 0;
    this.#comparer = comparer;
  }

  isEmpty() {
    return this.#n === 0;
  }

  size() {
    return this.#n;
  }

  insert(item) {
    this.#items[this.#n + 1] = item;
    this.#n++;
    this.#swim(this.#n);
  }

  delete() {
    const min = this.#items[1];
    this.#exchange(1, this.#n);
    this.#items[this.#n] = undefined;
    this.#n--;

    this.#sink(1);

    return min;
  }

  #swim(i) {
    while (i > 1) {
      const parentIndex = Math.floor(i / 2);
      if (this.#less(i, parentIndex)) {
        return;
      }

      this.#exchange(i, parentIndex);
      i = parentIndex;
    }
  }

  #sink(i) {
    while ((2 * i) <= this.#n) {
      let j = 2 * i;
      if (j < this.#n && this.#less(j, j + 1)) {
        j++;
      }

      if (!this.#less(i, j)) {
        break;
      }

      this.#exchange(i, j);
      i = j;
    }
  }

  #less(a, b) {
    return this.#comparer(this.#items[a], this.#items[b]);
  }

  #exchange(a, b) {
    [this.#items[a], this.#items[b]] = [this.#items[b], this.#items[a]];
  }
}

module.exports = {
  PQ,
};
