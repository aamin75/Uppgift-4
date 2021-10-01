// Declaring variables
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const labelItem = document.getElementById("countItem");
const labelCompleted = document.getElementById("countComplete");
const arrayItem = [];
let indexItem = 0;
let indexComplete = 0;


// when clicking OK
button.addEventListener("click", function() {
    const text = input.value;

    // checking empty pushing empty item
    if (text.length == 0) {
        document.querySelector("small").innerText = "Input must not be empty";
        // alert("Input must not be empty");
        return;
    } else {
        document.querySelector("small").innerText = "";
    };

    // creating list element
    const item = document.createElement("li");
    list.appendChild(item);

    // element label
    const itemlabel = document.createElement("span");
    itemlabel.innerText = text;
    item.appendChild(itemlabel);

    // adding an element to element's array
    arrayItem.push(text);
    // console.log(arrayItem); // test the array

    // adding trash bin to each list element
    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1F5D1";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);

    // changing the item attribute by clicking on it
    itemlabel.addEventListener("click", function() {
        if (item.getAttribute("class") == "completed") {
            // emptying class if it's completed
            item.setAttribute("class", "");

            // reduce completed
            indexComplete--;
        } else {
            // completing class if it's empty
            item.setAttribute("class", "completed");

            // increase completed
            indexComplete++;
        };
        // counting completed
        labelCompleted.innerText = `${indexComplete} completed`;
    });

    // counting items
    indexItem++;
    labelItem.innerText = `${indexItem} item`;

    // on clicking the trash bin to remove the item
    trashcan.addEventListener("click", function() {
        // counting items
        indexItem--;
        labelItem.innerText = `${indexItem} item`;

        // removing an element from the element's array
        // it seems to need more improvement at this point
        arrayItem.pop();
        // console.log(arrayItem); // test the array

        // counting completed
        item.getAttribute("class") == "completed" ? indexComplete-- : "";
        labelCompleted.innerText = `${indexComplete} completed`;

        // removing the item
        item.remove();
    });

    // emptying input value so be ready for next item
    input.value = "";

});