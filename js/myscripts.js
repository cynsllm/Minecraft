
//matrix
var matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'rock', 'rock', 'sky', 'wood', 'sky', 'sky', 'rock'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
];

//display the matrix thanks to class
var map = $("#game-map");
for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        var square = $("<div/>");
        square.addClass(matrix[i][j] + " tile");
        map.append(square);
    }
}

//tools generation
var tools = ["axe", "pickaxe", "shovel"];
var toolColumn = $("<section/>");
toolColumn.attr("id", "toolColumn");
for (var i = 0; i < tools.length; i++) {
    var tool = $("<button/>");
    tool.addClass("tool");
    toolColumn.append(tool);
}
$(".navbar").append(toolColumn);

//inventory generation
var inventory = $("<div/>");
inventory.attr("id", "inventory");
$(".navbar").append(inventory);


var axeTool = $("button:nth-child(1)").addClass("axe");
var pickaxeTool = $("button:nth-child(2)").addClass("pickaxe");
var shovelTool = $("button:nth-child(3)").addClass("shovel");
axeTool.addClass("axe");
pickaxeTool.addClass("pickaxe");
shovelTool.addClass("shovel");

//axeTool function
axeTool.on("click", function () {
    console.log("axe");
    var counter = 0;
    $(".wood").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("wood");
        $(this).addClass("sky");
        $("#inventory").addClass("wood");
        $("#inventory").on("click", function () {
            console.log("inventory");
            $(".tile").on("click", function () {
                $(this).removeClass("sky dirt rock grass leaf");
                $(this).addClass("wood");
                if (counter = 1) { //disable the inventory
                    $("#inventory").off();
                    $(".tile").off();
                    $("#inventory").removeClass("wood");
                }
            })
        })
    })
});

pickaxeTool.on("click", function () {
    console.log("pickaxe");
    var counter = 0;
    $(".rock").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("rock");
        $(this).addClass("sky");
        $("#inventory").addClass("rock");
        $("#inventory").on("click", function () {
            $(".tile").on("click", function () {
                $(this).removeClass("sky dirt grass wood leaf");
                $(this).addClass("rock");
                if (counter = 1) { //disable the inventory
                    $("#inventory").off();
                    $(".tile").off();
                    $("#inventory").removeClass("rock");
                }
            })
        })
    })
})
shovelTool.on("click", function () {
    console.log("shovel");
    var counter = 0;
    $(".dirt").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("dirt");
        $(this).addClass("sky");
        $("#inventory").addClass("dirt");
        $("#inventory").on("click", function () {
            console.log("inventory");
            $(".tile").on("click", function () {
                $(this).removeClass("sky rock grass wood leaf");
                $(this).addClass("dirt");
                if (counter = 1) { //disable the inventory
                    $("#inventory").off();
                    $(".tile").off();
                    $("#inventory").removeClass("dirt");
                }
            })
        })
    })
})



