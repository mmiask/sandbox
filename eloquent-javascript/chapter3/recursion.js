function isEven (number, type) {
    if (number == 0) {
        return type = 'Even';
    } else if (Math.abs(number) == 1) {
        return type = 'Not even';
    } else {
        return isEven(Math.abs(number) - 2, type);
    };
};