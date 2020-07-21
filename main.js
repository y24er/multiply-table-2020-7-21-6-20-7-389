function createMultiplyTable(start, end) {
    if (isValid(start, end)) {
        return generateMultiplicationTable(start, end);
    }
    return null;

}

function isValid(start, end) {
    return isStartLessThanEnd(start, end) && isInRange(start) && isInRange(end);
}

function isStartLessThanEnd(start, end) {
    return start <= end;
}

function isInRange(num) {
    return num >= 1 && num <= 1000;
}

function generateMultiplicationTable(start, end) {
    let table = "";
    for (let i = start; i <= end; i++) {
        if (i == end) {
            table += generateLine(start, i);
        } else
            table += generateLine(start, i) + "\n";
    }
    return table;
}

function generateLine(start, end) {
    let line = "";
    for (let j = start; j <= end; j++) {
        line += generateExpression(j, end) + "\t";
    }
    return line.substring(0, line.length - 1);
}

function generateExpression(multiplicand, multiplier) {
    return multiplicand + "*" + multiplier + "=" + multiplicand * multiplier;
}

module.exports = {
    createMultiplyTable,
};
