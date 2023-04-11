//1. grab the save-el paragraph and store it in a variable called saveEl
let Elcount = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1;
    Elcount.textContent = count;
}

//2 create a variable that contains both the count and the dash separator, i.e "12-"
//3. render teh variable in the save-el using innetText
//TODO make sure to not delete the existing content of the paragraph
function save() {
    let entries = count + " - ";
    saveEl.textContent += entries;
    //reset the counter to 0 every time you press save
    Elcount.textContent = 0;
    count = 0;
}


