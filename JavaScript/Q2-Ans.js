
function executeDelayedFunctions(funcArray, delay) {
    funcArray.forEach(function(func) {
        setTimeout(func, delay);
    });
}

function hello() {
    console.log("helloWorld!");
}

executeDelayedFunctions([hello], 2000);
