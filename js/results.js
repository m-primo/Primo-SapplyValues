const urlParams = new URLSearchParams(window.location.search);
x_axis  = parseFloat(urlParams.get("right"));
y_axis  = parseFloat(urlParams.get("auth"));
z_axis  = parseFloat(urlParams.get("prog"));

window.onload = function() {
    var background = new Image();
    background.onload = function() {
        var c = document.createElement("canvas");
        c.width = 1850;
        c.height = 1600;
        var ctx = c.getContext("2d");
        ctx.fillStyle = "#EEEEEE";
        ctx.fillRect(0, 0, 1850, 1600);
        ctx.drawImage(background, 0, 0);

        var rect = c.getContext("2d");
        rect.beginPath();
        rect.rect(140 + (1000 * (x_axis+10)/20), 1090 - (1000 * (y_axis+10)/20), 125, 125);
        rect.fillStyle = 'rgb(32,32,32,0.2)';
        rect.fill();
        rect.stroke();

        var dot = c.getContext("2d");
        dot.beginPath();
        dot.arc(200 + (1000 * (x_axis+10)/20), 1150 - (1000 * (y_axis + 10)/20), 25, 0, 2 * Math.PI);
        dot.fillStyle = 'red';
        dot.fill();
        dot.stroke();

        var line = c.getContext("2d");
        line.beginPath();
        line.moveTo(1500, 1145 - (1000 * (z_axis + 10)/20));
        line.lineTo(1650, 1145 - (1000 * (z_axis + 10)/20));
        line.lineWidth = 10;
        line.strokeStyle = "red";
        line.stroke();

        ctx.font="45px Montserrat";
        ctx.textAlign="center";
        ctx.fillStyle="#222222";
        ctx.fillText("Economic Axis (Right / Left) [x]: " + x_axis, 725, 1350);
        ctx.fillText("Civil Axis (Auth / Lib) [y]: " + y_axis, 725, 1425);
        ctx.fillText("Societal Axis (Prog / Con) [z]: " + z_axis, 725, 1500);
        ctx.textAlign="right";
        ctx.font="40px Montserrat";
        ctx.fillText(App.name+' v'+App.version, 1800, 1550);

        document.getElementById("banner").src = c.toDataURL();
    }
    background.src = "../img/compass.png";
};