# 자료구조와 알고리즘 6주차 과제 - 트라이

1. 다음 키와 값들을 트라이에 순서대로 삽입했을 때의 상태를 그림으로 그려주세요.

```
apple 0
applet 1
app 2
appeal 3
appear 4
appendix 5
banana 6
band 7
bandit 8
bandage 9
base 10
basket 11
cat 12
cattle 13
cater 14
category 15
```

2. 위 그림의 트라이에 다음 연산을 했을 때, 어떻게 동작하는지 그림으로
   그려주세요. 주어진 코드를 보면서 내가 직접 코드를 실행한다고 생각하면서 따라 그려보세요.

```
trie.get('apple')
trie.put('basic')
trie.size()
trie.keys()
trie.keysWithPrefix('band')
trie.keysThatMatch('appe..')
trie.delete('apple')
```

3. 앞의 과정을 생각하면서 각 연산을 코드로 구현해 주세요.
