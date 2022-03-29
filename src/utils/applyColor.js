const colors = require("../constants/colors.json");
const realms = require("../constants/realms.json");

function applyColor(table) {
    let res = 0;
    [...table.getElementsByTagName("td")].forEach((td) => {
        const text = td.textContent;
        const realm = realms[text];
        const color = colors[realm?.language];
        const pop = realm?.pop / 1000;
        if (color) {
            const div = document.createElement("div");
            div.style = `display: inline-block;
            width: 50px;
            text-align: right;
            padding-right: 15px;
            margin-right: 10px;
            background-color: ${color}`;
            try {
                div.innerHTML = `${pop >= 100 ? "" : " "}${pop}k`;
                td?.prepend(div);
            } catch (e) {}
            res += 1;
        }
    });
}

module.exports = applyColor;
