const scaffolds_width = 4;
const ladders_height = 5;
const ladders_area = ladders_height * scaffolds_width;

const copy = (obj) => JSON.parse(JSON.stringify(obj));
const random = (start, end) => Math.floor(Math.random() * end - start) + start;
const choice = (array) => array[random(0, array.length)];
const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const choices = (num, array) => shuffle(array).slice(0, num);
const range = (num) => Array(num).fill().map((_, idx) => idx);
const divmod = (dividend, divisor) => [Math.floor(dividend / divisor), dividend % divisor];
const zip = (arr1, arr2) => arr1.map((val, idx) => [val, arr2[idx]]);

function reset() {
    const scaffolds_form = () => Array(scaffolds_width).fill("   ");
    const empty_ladders = Array(ladders_height).fill().map(scaffolds_form);

    return empty_ladders;
}

function randomFill(empty_ladders) {
    const ladders = copy(empty_ladders);
    const number_to_fill = random(0, ladders_area);
    const places_to_fill = choices(number_to_fill, range(ladders_area));

    for (const place of places_to_fill) {
        const [y, x] = divmod(place, scaffolds_width);
        ladders[y][x] = choice(["---", "\\-\\", "/-/"]);
    }

    return ladders;
}

function analyze(ladders) {
    const condition1 = ([left, right]) => left === right && right === "---";
    const condition2 = ([left, right]) => left === "\\-\\" && right === "/-/";
    const condition3 = ([left, right]) => left === "/-/" && right === "\\-\\";

    const success = !ladders.some((scaffolds) => {
        const pairs = zip(scaffolds.slice(1, scaffolds.length), scaffolds.slice(0, scaffolds.length - 1));

        return [condition1, condition2, condition3].some((condition) => pairs.some(condition));
    });

    return [ladders, success];
}

function display([ladders, success]) {
    const scaffold_signature = ([$0, $1, $2, $3]) => `|${$0}|${$1}|${$2}|${$3}|\\n`;

    console.log(success);
    console.log(ladders.map(scaffold_signature).join("\n"));
}

display(analyze(randomFill(reset())));
