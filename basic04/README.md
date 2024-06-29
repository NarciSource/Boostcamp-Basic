# 부스트캠프 베이직04-사다리 게임 만들기

## pseudo code

```python
scaffolds := pile of 4 spaces
ladders := pile of 5 scaffolds

def reset
    ladders := scaffolds * lader_height { empty }

def randomFill
    number_to_fill := random(0, size_of_ladders)
    place_to_fill := choices(number_to_fill of [0 ~ size_of_ladders])

    for place in place_to_fill
        ladders[place] := choice([ (---) (\-\) (/-/) ])

def analyze
    if ladders is not any of
        scaffolds -> zip(scaffolds[1:], scaffolds[:-1])
            any of left == right == (---)
                or left == (\-\) and right == (/-/)
                or left == (/-/) and right == (\-\)

def display
    scaffold_signature := | 0 | 1 | 2 | 3 |\n

    print(ladders map to scaffold_signature, end="\n")
```
