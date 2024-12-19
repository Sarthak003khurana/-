// Do not edit the below code

// The HTML boiler plate and CSS is given to you.
// You will have to complete  JS functionality to clear the test cases.
// Your task is to create the shape generator application.

//Errors to be taken
// 5 specs, 5 failures

// Write the functions required to get the desired output
// Your task is to create the shape generator application.
// The expected output is given to you. {(https://kq-storage.s3.ap-south-1.amazonaws.com/Github/shape_generator+output.gif)}
// Start your code from here
// nd exclude these errors
// Shape Addition Functionality should add the correct number of shapes
// TypeError: button.onclick is not a function.(In 'button.onclick()', 'button.onclick' is null)
// Shape Addition Functionality should increment the number inside each shape
// TypeError: button.onclick is not a function.(In 'button.onclick()', 'button.onclick' is null)
// Shape Addition Functionality should assign the correct class to each shape
// TypeError: button.onclick is not a function.(In 'button.onclick()', 'button.onclick' is null)
// Shape Addition Functionality should update oldValue correctly after adding shapes
// TypeError: button.onclick is not a function.(In 'button.onclick()', 'button.onclick' is null)
// Shape Addition Functionality should handle multiple button clicks correctly
// TypeError: button.onclick is not a function.(In 'button.onclick()', 'button.onclick' is null)
let button = document.getElementById("button");
var numberInTheShape = 1;
var oldValue = 0;

button.onclick = function () {
    const shapeCount = parseInt(document.getElementById("number").value);
    const selectedShape = document.querySelector('input[name="choice"]:checked').value;

    const boxContainer = document.getElementById("box");

    if (isNaN(shapeCount) || shapeCount <= 0) {
        alert("Please enter a valid positive number for shapes!");
        return;
    }

    for (let i = 0; i < shapeCount; i++) {
        const shapeDiv = document.createElement("div");
        shapeDiv.classList.add(selectedShape);
        shapeDiv.textContent = numberInTheShape++;
        boxContainer.appendChild(shapeDiv);
    }

    oldValue += shapeCount;
};