//runTimer not in use, see neatBlastOffTimer
function runTimer() {
    // removed function blastoffTimer() and replaced it with runTimer
    console.log("runTimer() started");

    //variable to keep time
    var currTime = 50;

    //timer at 50
    setTimeout(function () {
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 0);

    //timer at 45
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 5000);

    //timer at 40
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 10000);

    //timer at 35
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 15000);

    //timer at 30
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 20000);

    //timer at 25
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 25000);

    //timer at 20
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 30000);

    //timer at 15
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 35000);

    //timer at 10
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 40000);

    //timer at 5
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
    }, 45000);

    //timer at 0
    setTimeout(function () {
        currTime = currTime - 5;
        //console.log("currTime = " + currTime);
        document.getElementById("blastoffDis").innerHTML = "Blastoff!!";
    }, 50000);
}
function startButtonClick() {

}
function stopButtonClick() {

}
function neatBlastoffTimer() {
    console.log("runTimer() started");
    //variable to keep time
    var currTime = 50;
    //replaces runTimer, loops the timer until Blastoff!
    for (var i = 0; i < 11; i = i + 1) {
        //this loops i number of times where i is less than 10 and increases at increments of 1
        setTimeout(function () {
            console.log("currTime = " + currTime);
            //once the timer gets to zero it changes the text to Blastoff!
            if (currTime == 0) {
                document.getElementById("blastoffDis").innerHTML = "Blastoff!!";
            //if the timer has less than 25 seconds left, this warning appears
            } else if (currTime < 25) {
                document.getElementById("blastoffDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " sec left"
            } else {
                document.getElementById("blastoffDis").innerHTML = currTime + " sec left";
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
}