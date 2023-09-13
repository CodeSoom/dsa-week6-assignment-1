const { compress, expand } = require('./Huffman');

test('문자열을 압축하고 해제한다.', () => {
  expect(expand(compress('ABRACADABRA!'))).toBe('ABRACADABRA!');
  expect(expand(compress('ABC'))).toBe('ABC');
  expect(expand(compress('BBCCCDDQ'))).toBe('BBCCCDDQ');
});
