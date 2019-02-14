
function totalLength(x: { length: number; }, y: { length: number; }) {
    var total = x.length + y.length;
    return total;
}

console.log(totalLength("marbles", "and toilets"));