function getPriceList() {
    const nameReg =
        /<tr.*?>.*?((<span class="gold">(.*?)<\/span>).*?(<span class="silver">(.*?)<\/span>)|(<span class="silver">(.*?)<\/span>)).*?(<span class="(q[0-9])">(.*?)<\/span>).*?<\/tr>/gm;

    const text = document.getElementsByClassName(
        "search-result-border search-result-target"
    )[0].innerHTML;

    const matchPrice = [...text.matchAll(nameReg)].map((i) => {
        if (i[7]) return `0.${i[7]}`.replace(/\s/g, "");
        return `${i[3]}.${i[5]}`.replace(/\s/g, "");
    });

    return matchPrice.join("\n");
}

module.exports = getPriceList;
