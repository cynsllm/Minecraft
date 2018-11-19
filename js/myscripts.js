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

function () {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 6; j++{
            if (array[j][j] === "sky") {
                $('#container').append('<div class="sky"></div>');
            }

        }
    }
}

// Implamentation of the Tools
var tools = ["axe", "pickaxe", "shovel"];
var toolColumn = $("<section/>");
toolColumn.attr("id", "toolColumn");
for (var i = 0; i < tools.length; i++) {
    var tool = $("<button/>");
    tool.addClass("tool");
    toolColumn.append(tool);

}
$("body").append(toolColumn);