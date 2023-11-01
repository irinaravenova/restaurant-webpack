function menuComponent() {
    const contentDiv = document.querySelector("#content")

    const header = document.createElement('h1');
    header.innerHTML = "Menu";

    contentDiv.appendChild(header)



}

export { menuComponent };