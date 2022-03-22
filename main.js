const CopyToolbar = require("./src/Components/CopyToolbar");

// get wrapper
const tableWrapper = document.getElementsByClassName("search-result")[0];

// fix style
document.getElementsByClassName(
    "search-result-border search-result-target"
)[0].style = "top: 30px";

// append event to favorite
const favorite = document.getElementsByClassName("favorite")[0];
console.log(favorite);
favorite.onclick = () => {
    console.log(111111);
    document.getElementById("copyToolbarId")?.remove();
    const toolbar = CopyToolbar(tableWrapper);
    tableWrapper.insertBefore(toolbar, tableWrapper.firstChild);
};
