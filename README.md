# 부스트캠프 베이직02-부스트마블 보드게임

## pseudo code

```python
def play(moving_blocks)
    participants := ["A","B","C","D"]
    location_of_participants := all 0 for participants

    board_size := 15
    occupied_board := [None]*board_size

    for participant, moving_block in zip(cycle(participant), moving_blocks)

        moved_location <- location_of_participants[participant] + moving_block

        location_of_participants[participant] <- moved_location

        if occupied_board[moved_location] is not occupied
            occupied by participant

    return counter(occupied_board)

```
