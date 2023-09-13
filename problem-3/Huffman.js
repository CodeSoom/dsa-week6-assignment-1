const { PQ } = require('../data-structure/PQ');

class Node {
  ch;

  freq;

  left;

  right;

  constructor(ch, freq, left, right) {
    this.ch = ch;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }

  isLeaf() {
    return this.left === undefined && this.right === undefined;
  }
}

const buildTrie = (freq) => {
  const keyCount = Object.keys(freq).length;

  const pq = new PQ(keyCount, (a, b) => a.freq > b.freq);
  Object.entries(freq).forEach(([key, value]) => {
    pq.insert(new Node(key, value));
  });

  while (pq.size() > 1) {
    const left = pq.delete();
    const right = pq.delete();
    const parent = new Node(undefined, left.freq + right.freq, left, right);
    pq.insert(parent);
  }

  return pq.delete();
};

const buildCode = (node, st = {}, s = '') => {
  if (node.isLeaf()) {
    st[node.ch] = s;
    return;
  }

  buildCode(node.left, st, `${s}0`);
  buildCode(node.right, st, `${s}1`);
  return st;
};

const writeTrie = (node) => {
  if (node.isLeaf()) {
    return `1${node.ch.charCodeAt(0).toString(2).padStart(8, '0')}`;
  }

  return `0${writeTrie(node.left)}${writeTrie(node.right)}`;
};

const compress = (s) => {
  const input = s.split('');

  const freq = input.reduce((acc, cur) => ({
    ...acc,
    [cur]: (acc[cur] || 0) + 1,
  }), {});

  const root = buildTrie(freq);
  const st = buildCode(root);
  const trieOutput = writeTrie(root);

  return input
    .reduce(
      (acc, cur) => acc + st[cur],
      trieOutput + input.length.toString(2).padStart(8, '0'),
    );
};

const expand = (s) => {
  let index = 0;

  const readTrie = (s) => {
    if (index >= s.length) {
      return;
    }

    const bit = s[index++];
    if (bit === '1') {
      const charCode = parseInt(s.slice(index, index + 8), 2);
      index += 8;
      return new Node(String.fromCharCode(charCode), 0);
    }
    const left = readTrie(s);
    const right = readTrie(s);
    return new Node(undefined, 0, left, right);
  };

  const root = readTrie(s);

  const length = parseInt(s.slice(index, index + 8), 2);
  index += 8;

  let decoded = '';
  for (let i = 0; i < length; i++) {
    let x = root;
    while (!x.isLeaf()) {
      if (s[index++] === '0') {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    decoded += x.ch;
  }
  return decoded;
};

module.exports = {
  expand,
  compress,
};
