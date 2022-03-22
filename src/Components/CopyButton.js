function CopyButton(title, style, onClick) {
    const button = document.createElement("button");
    button.innerHTML = title;
    button.style = style;
    button.onclick = onClick;

    return button;
}

module.exports = CopyButton;
