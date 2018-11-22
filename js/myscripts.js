
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
    tool.addClass(tools[i]);
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
        $("#inventory").removeClass(); 
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
    $(".leaf").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("leaf");
        $(this).addClass("sky");
        $("#inventory").removeClass(); 
        $("#inventory").addClass("leaf");
        $("#inventory").on("click", function () {
            $(".tile").on("click", function () {
                $(this).removeClass("sky dirt rock grass wood");
                $(this).addClass("leaf");
                if (counter = 1) { //disable the inventory
                    $("#inventory").off();
                    $(".tile").off();
                    $("#inventory").removeClass("leaf");
                }
            })
        })
    })
    $(".dirt, .rock, .grass").mousedown(function(){
        $(".axe").css("background-color", "red");
    })
    $(".dirt, .rock, .grass").mouseup(function(){
        $(".axe").css("background-color", "white");
    })
});

pickaxeTool.on("click", function () {
    var counter = 0;
    $(".rock").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("rock");
        $(this).addClass("sky");
        $("#inventory").removeClass(); 
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
    $(".dirt, .wood, .grass, .leaf").mousedown(function(){
        $(".pickaxe").css("background-color", "red");
    })
    $(".dirt, .wood, .grass, .leaf").mouseup(function(){
        $(".pickaxe").css("background-color", "white");
    })
})
shovelTool.on("click", function () {
    var counter = 0;
    $(".dirt").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("dirt");
        $(this).addClass("sky");
        $("#inventory").removeClass(); 
        $("#inventory").addClass("dirt");
        $("#inventory").on("click", function () {
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
    $(".grass").on("click", function () {
        counter = counter + 1;
        console.log(counter);
        $(this).removeClass("grass");
        $(this).addClass("sky");
        // div > ul {
        //     visibility: hidden;
        //     opacity: 0;
        //     transition: visibility 0s, opacity 0.5s linear;
        //   }
        //   div:hover > ul {
        //     visibility: visible;
        //     opacity: 1;
        //   }
        $("#inventory").addClass("grass");
        $("#inventory").on("click", function () {
            $(".tile").on("click", function () {
                $(this).removeClass("sky rock dirt wood leaf");
                $(this).addClass("grass");
                if (counter = 1) { //disable the inventory
                    $("#inventory").off();
                    $(".tile").off();
                    $("#inventory").removeClass("grass");
                }
            })
        })
    })
    $(".wood, .rock, .leaf").mousedown(function(){
        $(".shovel").css("background-color", "red");
    })
    $(".wood, .rock, .leaf").mouseup(function(){
        $(".shovel").css("background-color", "white");
    })
})

//$(".container").css("display", "none");
//
// $("#startButton").click(function(){
//     $(".start").css("display", "none");

//     $(".container").css("display", "flex");
//     $(".container").css("z-index", "87263468");

// })
