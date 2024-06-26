# 부스트캠프 베이직03-게임 타이틀 검색

## pseudo code

```js
game structure
    name,
    extinction,
    genre,
    rating,
    num_of_possible_party,
    sale_periods,


function output_signature(game)
    return name(* if extinction)((genre)) rating

function find(date, num_of_party)
    games
        filter by date in sale_periods
        filter by num_of_party <= num_of_possible_party
        sort by rating
        map to output_signature

    return join to selected_games using separator ,
```
