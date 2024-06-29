# 부스트캠프 베이직02-부스트마블 보드게임

## pseudo code

```python
def play(moving_blocks)
    participants := ["A","B","C","D"]
    location_of_participants := all 0 for participants

    board_size := 15
    occupied_board := [None]*board_size

    for participant, moving_block in zip(cycle(participant), moving_blocks)

        moved_location <- (location_of_participants[participant] + moving_block) % board_size

        location_of_participants[participant] <- moved_location

        if occupied_board[moved_location] is not occupied
            occupied by participant

    return counter(occupied_board)

```

## 필요 함수

-   defaultdict

    ```js
    participants.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});
    ```

-   cycle

    ```js
    function* cycle(arr) {
        while (true) {
            for (const val of arr) {
                yield val;
            }
        }
    }
    ```

-   zip

    ```js
    function* zip_with_cycle(arr1, arr2) {
        const cycled_arr1 = cycle(arr1);

        for (const val of arr2) {
            yield [cycled_arr1.next().value, val];
        }
    }
    ```

-   counter

    ```js
    function counter(arr) {
        const counts = arr.filter((x) => x).reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});

        for (const val of arr) {
            if (val) {
                counts[val]++;
            }
        }
        return counts;
    }
    ```

## 느낀점

아무래도 리스트 처리는 파이썬 빌트인 라이브러리가 편하지
