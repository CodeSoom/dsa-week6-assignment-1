# 자료구조와 알고리즘 6주차 과제 - 압축

1. 다음 문자열이 주어졌을 때 반복 길이 인코딩 방법으로 압축하고 해제하는 알고리즘을 `problem-3/repeat-length-encoding.test.js`에 구현해 주세요.

```
[a, aa, aaa, aaaa, aaaaa, aaaaaa, aaaaaaaa, aaaaaaaa]

=> a1a2a3a4a5a6a7
```

2. `ABBCCC` 문자열이 주어졌을 때, 다음 순서에 따라 허프만 압축 방법으로 압축해
   주세요.

```
1. 단어의 빈도수를 셉니다.
2. 허프만 인코딩 트라이를 만듭니다.
3. 인코딩 트라이를 이진수로 변환합니다.
4. 인코딩 트라이로 문자열을 인코딩 합니다.
```

3. 다음은 허프만 압축 방법으로 압축된 이진 문자열입니다. 압축을 해제하는 과정을
   보여주세요.

```
0010100000110100001010100001100000110000101111
```

4. 다음 문자열이 주어졌을 때 `Huffman.js` 코드를 직접 실행한다고 생각하면서 코드를 읽고 그 과정을 그려주세요.

```
ABBCCC
```
