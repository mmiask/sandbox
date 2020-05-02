const size = 10;
let board = "";
//console.log(' ' + '# # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ');

for (x = 0; x < size; x++) {
    for (y = 0; y < size; y++) {
        if ((x+y) % 2 == 0) {
            board += '#';
        } else {
            board += ' ';
        };
    };
    board += '\n';
};

console.log(board);