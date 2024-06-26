const game_signature = ([name, extinction, genre, rating, num_of_possible_party, sale_periods]) => ({ name, extinction, genre, rating, num_of_possible_party, sale_periods });
const games = [
    ["Kong", true, "Adventure", 4.1, 1, [197001, 198104]],
    ["Ace", false, "Board", 3.8, 4, [198707, 202407]],
    ["Mario", true, "RPG", 3.3, 2, [200109, 200711]],
    ["Prince", true, "RPG", 4.8, 1, [198303, 200205]],
    ["Dragons", true, "Fight", 3.4, 4, [199005, 199512]],
    ["Civil", false, "Simulation", 4.2, 1, [200206, 202407]],
    ["Teken", true, "Fight", 4.0, 2, [199807, 200912]],
    ["GoCart", false, "Sports", 4.6, 8, [200612, 202407]],
    ["Football", false, "Sports", 2.9, 8, [199406, 202407]],
    ["Brave", true, "RPG", 4.2, 1, [19806, 198501]],
].map(game_signature);

const output_signature = (game) => `${game.name}${game.extinction ? "*" : ""}(${game.genre}) ${game.rating}`;

function find(date, num_of_party) {
    return games
        .filter((game) => game.sale_periods[0] <= date && date <= game.sale_periods[1])
        .filter((game) => num_of_party <= game.num_of_possible_party)
        .toSorted((a, b) => b.rating - a.rating)
        .map(output_signature)
        .join(", ");
}

console.log(find("198402", 1) === "Prince*(RPG) 4.8, Brave*(RPG) 4.2");
console.log(find("200008", 8) === "Football(Sports) 2.9");
console.log(find("199004", 5) === "");
