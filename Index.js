
const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

const maxLength = 100;

let alertShown = false;

textarea.addEventListener("input", () => {

    const charactersTyped = textarea.value.length;

    counter.textContent = scharactersTyped + " / " + maxLength;

    if (charactersTyped === maxLength) {

        textarea.style.borderColor = "red";

        if (alertShown === false) {
            alert("You have reached the maximum character limit!");
            alertShown = true;
        }

    } else {

        textarea.style.borderColor = "#ccc";

        alertShown = false;

    }

});

