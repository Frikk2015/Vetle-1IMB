const container = document.getElementById("container");

Array.from(document.getElementsByClassName("nettside"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            container.dataset.activeIndex = index;
        }
});

let links = document.getElementsByClassName("nettside")


for (i = 0; i < links.length; i++){
    let number = 100 / links.length * i
    let styles = `
        #container[data-active-index="` + i + `"] > #bakgrunn {
            background-position: 0% -` + number + `%;
    }`
    let styleSheet = document.createElement("style")
    styleSheet.innerText = styles

    let number2 = 20 / links.length * i + 30
    let styles2 = `
        #container[data-active-index="` + i + `"] > #bakgrunnBilde {
            background-position: center ` + number2 + `%;
    }`
    styleSheet.innerText += styles2
    document.head.appendChild(styleSheet)
}
