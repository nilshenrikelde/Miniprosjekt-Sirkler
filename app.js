// Getting the HTML elements from index.html
const inputNum = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-container");
const returnMessage = document.querySelector("#return-message");

// Function to make circles

const makeCircles = () => {
  //Checking that the user entered number isnt't under 1 or over 1000
  if (inputNum.value < 1 || inputNum.value > 1000) {
    //DON'T MAKE CIRCLES!
    returnMessage.textContent = "Vennligst skriv et tall mellom 1 og 1000";
  } else {
    const circles = document.querySelectorAll(".circle");
    for (circle of circles) {
      circle.remove();
    }
    //MAKE CIRCLES!
    for (let i = 0; i < inputNum.value; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.textContent = i + 1;
      circle.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      circleContainer.append(circle);
    }
  }
};
