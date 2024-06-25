function* cycle(arr) {
    while (true) {
        for (const val of arr) {
            yield val;
        }
    }
}

function* zip_with_cycle(arr1, arr2) {
    const cycled_arr1 = cycle(arr1);

    for (const val of arr2) {
        yield [cycled_arr1.next().value, val];
    }
}

function counter(arr) {
    const counts = arr.filter((x) => x).reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});

    for (const val of arr) {
        if (val) {
            counts[val]++;
        }
    }
    return counts;
}

function play(moving_blocks) {
    const participants = ["A", "B", "C", "D"];
    const location_of_participants = participants.reduce((acc, cur) => ({ ...acc, [cur]: 0 }), {});

    const board_size = 15;
    const occupied_board = Array(board_size).fill(null);

    for (const [participant, moving_block] of zip_with_cycle(participants, moving_blocks)) {
        const moved_location = (location_of_participants[participant] + moving_block) % board_size;

        location_of_participants[participant] = moved_location;

        occupied_board[moved_location] ||= participant;
    }

    return counter(occupied_board);
}

console.log(play([1, 3, 2, 4, 4, 3, 2, 4, 4, 0, 0, 0, 4, 0, 0, 0, 2, 0, 0, 0]));
