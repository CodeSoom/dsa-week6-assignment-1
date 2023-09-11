const R = 256;

class Node {
  value;

  next = new Array(R);
}

class Trie {
  #root = new Node();

  get(key) {
    return this.#get(this.#root, key, 0)?.value;
  }

  #get(node, key, d) {
    if (!node) {
      return;
    }

    if (d === key.length) {
      return node;
    }

    const c = key.charCodeAt(d);
    return this.#get(node.next[c], key, d + 1);
  }

  put(key, value) {
    this.#root = this.#put(this.#root, key, value, 0);
  }

  #put(node, key, value, d) {
    if (!node) {
      node = new Node();
    }

    if (d === key.length) {
      node.value = value;
      return node;
    }

    const c = key.charCodeAt(d);
    node.next[c] = this.#put(node.next[c], key, value, d + 1);
    return node;
  }

  size() {
    return this.#size(this.#root);
  }

  #size(node) {
    if (node === undefined) {
      return 0;
    }

    let count = node.value !== undefined ? 1 : 0;

    for (let i = 0; i < R; i++) {
      count += this.#size(node.next[i]);
    }

    return count;
  }

  keys() {
    return this.keysWithPrefix('');
  }

  keysWithPrefix(prefix) {
    const queue = [];
    this.#collect(this.#get(this.#root, prefix, 0), prefix, queue);
    return queue;
  }

  #collect(node, prefix, queue) {
    if (node === undefined) {
      return;
    }

    if (node.value !== undefined) {
      queue.push(prefix);
    }

    for (let i = 0; i < R; i++) {
      this.#collect(node.next[i], prefix + String.fromCharCode(i), queue);
    }
  }

  keysThatMatch(pattern) {
    const queue = [];
    this.#collectWithPattern(this.#root, '', pattern, queue);
    return queue;
  }

  #collectWithPattern(node, prefix, pattern, queue) {
    if (node === undefined) {
      return;
    }

    if (node === undefined) {
      return;
    }

    if (prefix.length === pattern.length && node.value !== undefined) {
      queue.push(prefix);
    }

    if (prefix.length === pattern.length) {
      return;
    }

    const next = pattern[prefix.length];
    for (let i = 0; i < R; i++) {
      if (next === '.' || next === String.fromCharCode(i)) {
        this.#collectWithPattern(
          node.next[i],
          prefix + String.fromCharCode(i),
          pattern,
          queue,
        );
      }
    }
  }

  delete(key) {
    this.#root = this.#delete(this.#root, key, 0);
  }

  #delete(node, key, d) {
    if (node === undefined) {
      return;
    }

    if (d === key.length) {
      node.value = undefined;
    } else {
      const c = key.charCodeAt(d);
      node.next[c] = this.#delete(node.next[c], key, d + 1);
    }

    if (node.value !== undefined) {
      return node;
    }

    for (let i = 0; i < R; i++) {
      if (node.next[i] !== undefined) {
        return node;
      }
    }
  }
}

module.exports = {
  Trie,
};
