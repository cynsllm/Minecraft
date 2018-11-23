$(document).ready(function () {
    toolSelection();
    clickedTile();
    currentInventory();
});

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

//var definitions and class assignments
var axeTool = $("button:nth-child(1)").addClass("axe");
var pickaxeTool = $("button:nth-child(2)").addClass("pickaxe");
var shovelTool = $("button:nth-child(3)").addClass("shovel");

//function that defines the class of the selected tool
var tool = "";
var toolSelection = function () {
    $(".tool").on("click", function () {
        $(".tile").mouseover(function () {
            $(this).css("opacity", "0.5");
        });
        $(".tile").mouseout(function () {
            $(this).css("opacity", "1");
        });
        if ($(this).hasClass("axe")) {
            tool = "axe";
        }
        else if ($(this).hasClass("pickaxe")) {
            tool = "pickaxe";
        }
        else {
            tool = "shovel";
        }
    });
}

//function that defines the class of the inventory 
var inventory = "";
var currentInventory = function () {
    $("#inventory").on("click", function () {
        if ($(this).hasClass("grass")) {
            inventory = "grass";
        }
        else if ($(this).hasClass("dirt")) {
            inventory = "dirt";
        }
        else if ($(this).hasClass("rock")) {
            inventory = "rock";
        }
        else if ($(this).hasClass("leaf")) {
            inventory = "leaf";
        }
        else if ($(this).hasClass("wood")) {
            inventory = "wood";
        }
    })
}

//function that defines an action according to the selected tool and the selected tile
var clickedTile = function () {
    $(".tile").on("click", function () {
        if ($(this).hasClass("rock") && tool === "pickaxe") {
            $(this).removeClass();
            $(this).addClass("sky tile");
            $("#inventory").removeClass();
            $("#inventory").addClass("rock");
        }
        else if ($(this).hasClass("grass") && tool === "shovel") {
            $(this).removeClass();
            $(this).addClass("sky tile");
            $("#inventory").removeClass();
            $("#inventory").addClass("grass");
        }
        else if ($(this).hasClass("dirt") && tool === "shovel") {
            $(this).removeClass();
            $(this).addClass("sky tile");
            $("#inventory").removeClass();
            $("#inventory").addClass("dirt");
        }
        else if ($(this).hasClass("leaf") && tool === "axe") {
            $(this).removeClass();
            $(this).addClass("sky tile");
            $("#inventory").removeClass();
            $("#inventory").addClass("leaf");
        }
        else if ($(this).hasClass("wood") && tool === "axe") {
            $(this).removeClass();
            $(this).addClass("sky tile");
            $("#inventory").removeClass();
            $("#inventory").addClass("wood");
        }
        else if ($(this).hasClass("sky") && inventory === "grass") {
            $(this).removeClass();
            $(this).addClass("grass tile");
            inventory = "";
            $("#inventory").removeClass()
        }
        else if ($(this).hasClass("sky") && inventory === "dirt") {
            $(this).removeClass();
            $(this).addClass("dirt tile");
            inventory = "";
            $("#inventory").removeClass()

        }
        else if ($(this).hasClass("sky") && inventory === "rock") {
            $(this).removeClass();
            $(this).addClass("rock tile");
            inventory = "";
            $("#inventory").removeClass()
        }
        else if ($(this).hasClass("sky") && inventory === "leaf") {
            $(this).removeClass();
            $(this).addClass("leaf tile");
            inventory = "";
            $("#inventory").removeClass()
        }
        else if ($(this).hasClass("sky") && inventory === "wood") {
            $(this).removeClass();
            $(this).addClass("wood tile");
            inventory = "";
            $("#inventory").removeClass()
        }
    })
}



