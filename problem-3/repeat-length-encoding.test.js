const encode = (words) => {
};

const decode = (string) => {
};

test('repeat length encoding', () => {
  const origin = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaaa', 'aaaaaaaa'];

  const encodedString = encode(origin);

  expect(encodedString).toBe('a1a2a3a4a5a6a7a8');

  const decodedString = decode(encodedString);

  expect(decodedString).toEqual(origin);
});
