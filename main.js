



var loading = 0;
var backdrop = 0;
var Morality = [0, 0, 0, 0, 0, 0, 0, 0];
var ev = 0;

requestAnimationFrame(draw);


function draw() {
    background("black");
    if (loading == 0 || loading == 2) {
        if (backdrop == 0) {
            title();
            story("", 0, "Start", 1, "Begin", 1)
        } else {
            story("Dog", 1, "Inspect", 2, "Ignore", 100)
            story("Fluffy", 2, "Pet", 100, "Kick", 3)
            story("Yelp", 3, "Kick", 4, "Stop", 100)
            story("Whimper", 4, "Kick", 5, "Stop", 100)
            story("Silent", 5, "Kick", 6, "Stop", 100)
            story("Crowd", 6, "Threaten", 7, "Ignore", 100)
            story("Disgust", 7, "Lash", 8, "Attack", 8)
            story("Anger", 8, "Bloat", 9, "Provoke", 9)
            story("Brawl", 9, "Outnumbered", 10, "Outmatched", 10)
            story("Death", 10, "What?", 0, "How?", 0)
        } 
    }
    moralityCount()
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", next)

function next(event) {
    if (event.keyCode == 49 || event.keyCode == 50) {
        ev = event.keyCode
        loading = 2
        setTimeout(load, 1000)
    }
}

function moralityCount() {
    if (backdrop == 10) {
        Morality[0] = 2;
    }
}

function story(title, back, option1, to1, option2, to2) {
    if (backdrop == back) {
        if (loading == 0) {
            textList(title, option1, option2)
        }
        if (loading == 2) {
            if (ev == 49) {
                backdrop = to1
                loading = 1
            } else if (ev == 50) {
                backdrop = to2
                loading = 1
            }
        }
    }
    
}

function load() {
    loading = 0
}

function title() {
    if (Morality[0] == 0) {
        stroke("white");
        text("M", (cnv.width / 2) - 100, 200, "stroke", "100px Georgia");
    } else if (Morality[0] == 1) {
        stroke("green")
        text("M", (cnv.width / 2) - 100, 200, "stroke", "100px Georgia");
    } else if (Morality[0] == 2) {
        stroke("red")
        text("M", (cnv.width / 2) - 100, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[1] == 0) {
        stroke("white");
        text("o", (cnv.width / 2) - 10, 200, "stroke", "100px Georgia");
    } else if (Morality[1] == 1) {
        stroke("green")
        text("o", (cnv.width / 2) - 10, 200, "stroke", "100px Georgia");
    } else if (Morality[1] == 2) {
        stroke("red")
        text("o", (cnv.width / 2) - 10, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[2] == 0) {
        stroke("white");
        text("r", (cnv.width / 2) + 45, 200, "stroke", "100px Georgia");
    } else if (Morality[2] == 1) {
        stroke("green")
        text("r", (cnv.width / 2) + 45, 200, "stroke", "100px Georgia");
    } else if (Morality[2] == 2) {
        stroke("red")
        text("r", (cnv.width / 2) + 45, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[3] == 0) {
        stroke("white");
        text("a", (cnv.width / 2) + 85, 200, "stroke", "100px Georgia");
    } else if (Morality[3] == 1) {
        stroke("green")
        text("a", (cnv.width / 2) + 85, 200, "stroke", "100px Georgia");
    } else if (Morality[3] == 2) {
        stroke("red")
        text("a", (cnv.width / 2) + 85, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[4] == 0) {
        stroke("white");
        text("l", (cnv.width / 2) + 140, 200, "stroke", "100px Georgia");
    } else if (Morality[4] == 1) {
        stroke("green")
        text("l", (cnv.width / 2) + 140, 200, "stroke", "100px Georgia");
    } else if (Morality[4] == 2) {
        stroke("red")
        text("l", (cnv.width / 2) + 140, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[5] == 0) {
        stroke("white");
        text("i", (cnv.width / 2) + 170, 200, "stroke", "100px Georgia");
    } else if (Morality[5] == 1) {
        stroke("green")
        text("i", (cnv.width / 2) + 170, 200, "stroke", "100px Georgia");
    } else if (Morality[5] == 2) {
        stroke("red")
        text("i", (cnv.width / 2) + 170, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[6] == 0) {
        stroke("white");
        text("t", (cnv.width / 2) + 200, 200, "stroke", "100px Georgia");
    } else if (Morality[6] == 1) {
        stroke("green")
        text("t", (cnv.width / 2) + 200, 200, "stroke", "100px Georgia");
    } else if (Morality[6] == 2) {
        stroke("red")
        text("t", (cnv.width / 2) + 200, 200, "stroke", "100px Georgia");
    }
    
    if (Morality[7] == 0) {
        stroke("white");
        text("y", (cnv.width / 2) + 245, 200, "stroke", "100px Georgia");
    } else if (Morality[7] == 1) {
        stroke("green")
        text("y", (cnv.width / 2) + 245, 200, "stroke", "100px Georgia");
    } else if (Morality[7] == 2) {
        stroke("red")
        text("y", (cnv.width / 2) + 245, 200, "stroke", "100px Georgia");
    }
}

function textList(title, option1, option2) {
    stroke("white");
    text(title, (cnv.width / 2) - 100, 200, "stroke", "100px Georgia");
    text("1: " + option1, (cnv.width / 2) - 200, 400, "stroke", "50px Arial");
    text("2: " + option2, (cnv.width / 2) - 200, 500, "stroke", "50px Arial");
}