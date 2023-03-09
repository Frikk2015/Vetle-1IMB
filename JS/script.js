const container = document.getElementById("container");

Array.from(document.getElementsByClassName("nettside"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            container.dataset.activeIndex = index;
        }
    });