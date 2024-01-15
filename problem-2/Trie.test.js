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

  longestPrefixOf(query) {
    const length = this.#search(this.#root, query, 0, 0);
    return query.substring(0, length);
  }

  #search(node, query, d, length) {
    if (node === undefined) {
      return length;
    }

    if (node.value !== undefined) {
      length = d;
    }

    if (d === query.length) {
      return length;
    }

    const c = query.charCodeAt(d);
    return this.#search(node.next[c], query, d + 1, length);
  }
}

describe('Trie', () => {
  const words = [
    ['apple', 0],
    ['applet', 1],
    ['app', 2],
    ['appeal', 3],
    ['appear', 4],
    ['appendix', 5],
    ['banana', 6],
    ['band', 7],
    ['bandit', 8],
    ['bandage', 9],
    ['base', 10],
    ['basket', 11],
    ['cat', 12],
    ['cattle', 13],
    ['cater', 14],
    ['category', 15],
  ];
  test('트라이는 문자열을 저장하고 해당하는 값을 얻을 수 있다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    words.forEach(([key, value]) => {
      expect(trie.get(key)).toBe(value);
    });

    expect(trie.get('NOT_EXIST')).toBeUndefined();
  });

  test('size는 트라이 항목의 개수를 반환한다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    expect(trie.size()).toBe(16);
  });

  test('keys는 모든 키 목록을 반환한다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    expect(trie.keys())
      .toEqual(words.map(([key]) => key).sort());
  });

  test('keysWithPrefix는 주어진 문자열로 시작하는 문자열들을 반환한다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    expect(trie.keysWithPrefix('band'))
      .toEqual(['band', 'bandage', 'bandit']);
  });

  test('keysThatMatch는 주어진 패턴과 매칭되는 키들을 반환한다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    expect(trie.keysThatMatch('appe..')).toEqual([
      'appeal',
      'appear',
    ]);
  });

  test('delete는 주어진 키를 삭제한다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    trie.delete('apple');

    expect(trie.get('apple')).toBeUndefined();
  });

  test('longestPrefixOf는 매칭되는 최소 접두어를 반환한다', () => {
    const trie = new Trie();

    words.forEach(([key, value]) => {
      trie.put(key, value);
    });

    expect(trie.longestPrefixOf('appl')).toBe('app');
  });
});
