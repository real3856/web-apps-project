
function Piano() {
    this.mode = 0;
}

Piano.prototype = {
    playSound: function (music) {
        if (this.mode === 0) {
            music = music;
        }
        else if (this.mode === 1) {
            music = "high_" + music;
        }
        else if (this.mode === -1) {
            music = "low_" + music;
            if (music === "low_high_c.mp3") {
                music = "c.mp3";
            }
        }
        var audio = new Audio(music);
        audio.play();
    },

    highPitch: function () {
        this.mode = 1;
    },

    normalPitch: function () {
        this.mode = 0;
    },

    lowPitch: function () {
        this.mode = -1;
    },
    change: function () {
        if (this.mode === 1)
            document.getElementById("pitch").innerHTML = "high pitch";
        else if (this.mode === 0)
            document.getElementById("pitch").innerHTML = "normal pitch";
        else if (this.mode === -1)
            document.getElementById("pitch").innerHTML = "low pitch";
    }
}
module.exports.Piano = Piano;
module.exports.playSound = Piano.prototype.playSound;
module.exports.highPitch = Piano.prototype.highPitch;
module.exports.lowPitch = Piano.prototype.lowPitch;
module.exports.normalPitch = Piano.prototype.normalPitch;
