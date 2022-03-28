const table = document.getElementsByClassName("rt-tr-group");
const realms = {};

for (let row of table) {
    row = row.childNodes[0];

    let names = row.childNodes[0].childNodes[0].childNodes;
    const language = row.childNodes[1].childNodes[0].childNodes[0].innerHTML;
    const pop =
        parseInt(
            row.childNodes[3].childNodes[0].childNodes[0].childNodes[0].childNodes[4].textContent.match(
                /\d+/
            )[0]
        ) * 1000;

    names = [...names].map((a) => {
        return a.innerHTML;
    });

    names.forEach((name) => {
        if (!name.includes("<") && pop)
            realms[name] = {
                language,
                pop,
            };
    });
}

console.log(realms);
