const R = 256;

class Node {
  value;

  next = new Array(R);
}

class Trie {
  #root = new Node();

  get(key) {
  }

  put(key, value) {
  }

  size() {
  }

  keys() {
    return this.keysWithPrefix('');
  }

  keysWithPrefix(prefix) {
  }

  keysThatMatch(pattern) {
  }

  delete(key) {
  }

  longestPrefixOf(query) {
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
