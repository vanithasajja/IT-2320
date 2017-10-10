﻿var sourceDiv = null;

$(document).ready(function () {

    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {
        if (sourceDiv == null) {
            if ($(this).hasClass("piece")) {
                $(this).addClass("highlight");
                sourceDiv = this;
            }
        }
        else {
            if (!$(this).hasClass("piece")) {
                $(sourceDiv).removeClass("highlight");
                this.className = sourceDiv.className;
                sourceDiv.className = "cell";
                sourceDiv = null;
            }
        }
        
    });
    
});









