function tileMap() {
    var matrix = [];
    for (var i = 0; i < 10; i++) {
        matrix[i] = [];
        for (var j = 0; j < 6; j++) {
            matrix[i][j] = "sky";
        }
        for (var j = 6; j < 10; j++) {
            matrix[i][j] = "dirt";
        }
    }
}
tileMap(); 
 
//if (matrix[j][j] === "sky") {
//    $('#container').append('<div class="sky"></div>');
//} 
