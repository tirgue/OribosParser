const CopyButton = require("./CopyButton");
const copyToClipboard = require("../utils/copyToClipboard");
const getItemList = require("../utils/getItemList");
const getPriceList = require("../utils/getPriceList");

function CopyToolbar(parent) {
    // create toolbar
    const copyToolbar = document.createElement("div");
    copyToolbar.id = "copyToolbarId";
    copyToolbar.style = `
        display: flex;
        flex-direction: row;
        margin-left: 4px;
    `;

    // append buttons to toolbar
    copyToolbar.appendChild(
        // price
        CopyButton("copy", "width: 191px; padding: 5px 0px", () => {
            const priceList = getPriceList();
            copyToClipboard(priceList);
        })
    );
    copyToolbar.appendChild(
        // name
        CopyButton("copy", "width: 396px; padding: 5px 0px", () => {
            const itemList = getItemList();
            copyToClipboard(itemList);
        })
    );
    copyToolbar.appendChild(
        // quantity
        CopyButton("copy", "width: 205px; padding: 5px 0px")
    );

    return copyToolbar;
}

module.exports = CopyToolbar;
