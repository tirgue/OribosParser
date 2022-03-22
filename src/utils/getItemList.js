function getItemList() {
    const nameReg =
        /<tr>.*?((<span class="gold">(.*?)<\/span>).*?(<span class="silver">(.*?)<\/span>)|(<span class="silver">(.*?)<\/span>)).*?(<span class="(q[0-9])">(.*?)<\/span>).*?<\/tr>/gm;

    const text = document.getElementsByClassName(
        "search-result-border search-result-target"
    )[0].innerHTML;

    const matchName = [...text.matchAll(nameReg)].map((i) => {
        return `${i[10]}`;
    });

    return matchName.join("\n");
}

module.exports = getItemList;
