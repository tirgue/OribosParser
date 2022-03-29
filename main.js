const CopyToolbar = require("./src/Components/CopyToolbar");
const applyColor = require("./src/utils/applyColor");

// get wrapper
const tableWrapper = document.getElementsByClassName("search-result")[0];

// fix style
document.getElementsByClassName(
    "search-result-border search-result-target"
)[0].style = "top: 30px";

// append event to favorite
const favorite = document.getElementsByClassName("favorite")[0];
favorite.onclick = () => {
    document.getElementById("copyToolbarId")?.remove();
    const toolbar = CopyToolbar(tableWrapper);
    tableWrapper.insertBefore(toolbar, tableWrapper.firstChild);
};

const intervalFunction = () => {
    try {
        const table = document.getElementsByClassName("list")[0];
        applyColor(table) > 15 ? clearInterval(interval) : null;
    } catch (e) {}
};

let interval;
document.onclick = () => {
    clearInterval(interval);
    interval = setInterval(intervalFunction, 1000);
};
