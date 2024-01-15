const encode = (words) => {
  const answer = [];

  for (const input of words) {
    answer.push(input[0] + input.length);
  }

  return answer.join('');
};

const decode = (string) => {
  const answer = [];

  for (let i = 0; i < string.length - 1; i += 2) {
    const count = Number(string[i + 1]);
    answer.push(string[i].repeat(count));
  }

  return answer;
};

test('repeat length encoding', () => {
  const origin = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa'];

  const encodedString = encode(origin);

  expect(encodedString).toBe('a1a2a3a4a5a6a7a8');

  const decodedString = decode(encodedString);

  expect(decodedString).toEqual(origin);
});
