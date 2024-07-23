// turn On bulb 
const turnOn = () => {
    let imgObj = document.getElementById("bulb");
    imgObj.setAttribute("src", "onBulb.jpg");
};


// turn Off bulb 
const turnOff = () => {
    let imgObj = document.getElementById("bulb");
    imgObj.setAttribute("src", "offBulb.jpg");
};

// toggleBulb
const toggleBulb = () => {
    let imgObj = document.getElementById("bulb");
    let srcValue = imgObj.getAttribute("src");

    let btnName = document.getElementById("onOffButton");
    let btnValue = btnName.innerHTML;
    if (srcValue == "offBulb.jpg") {
        turnOn();

        btnName.innerHTML = "OFF";
    } else {
        turnOff();

        btnName.innerHTML = "ON";
    }
}