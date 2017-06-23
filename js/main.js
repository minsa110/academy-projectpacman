$(function() {
    var worldElem = document.getElementById('world'),
        points = 0,
        pacman = {
            x: 6,
            y: 4
        },
        map = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1], 
            [1,2,2,2,2,2,1,2,2,2,2,2,1], 
            [1,2,1,1,1,2,1,2,1,1,1,2,1], 
            [1,4,1,2,2,2,2,2,2,2,1,2,1], 
            [1,2,2,2,1,1,5,1,1,2,2,2,1], 
            [1,2,1,2,2,2,2,2,2,2,1,4,1], 
            [1,2,1,1,2,2,1,2,2,1,1,2,1], 
            [1,2,2,2,2,2,1,2,2,2,2,2,1], 
            [1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];

    function drawWorld() {
        document.getElementById('pts').innerHTML = points;
        worldElem.innerHTML = "";
        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                var curr = map[y][x];
                if (curr == 1)
                    worldElem.innerHTML += "<div class='wall'></div>";
                else if (curr == 2)
                    worldElem.innerHTML += "<div class='coin'></div>";
                else if (curr == 3)
                    worldElem.innerHTML += "<div class='ground'></div>";
                else if (curr == 4)
                    worldElem.innerHTML += "<div class='ghost1'></div>";
                else if (curr == 5)
                    worldElem.innerHTML += "<div class='pacman'></div>";
            }
            worldElem.innerHTML += "<br />";
        }
    }

    document.onkeydown = function(event) {
        map[pacman.y][pacman.x] = 3;
        if (event.keyCode == 37) {// left
            if (map[pacman.y][pacman.x-1] != 1)
                pacman.x = pacman.x - 1;
        } else if (event.keyCode == 38) { // up
            if (map[pacman.y-1][pacman.x] != 1)
                pacman.y = pacman.y - 1;
        } else if (event.keyCode == 39) { // right
            if (map[pacman.y][pacman.x+1] != 1)
                pacman.x = pacman.x + 1;
        } else if (event.keyCode == 40) { // down
            if (map[pacman.y+1][pacman.x] != 1)
                pacman.y = pacman.y + 1;
        }
        if (map[pacman.y][pacman.x] == 2)
            points++;
        else if (map[pacman.y][pacman.x] == 4)
            points += 5;
        map[pacman.y][pacman.x] = 5;
        drawWorld();
    }

    drawWorld();
})
