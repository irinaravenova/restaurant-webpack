function aboutComponent() {
    const contentDiv = document.querySelector("#content")

    const header = document.createElement('h1');
    const bodyText = document.createElement('p');

    header.innerHTML = "About Us";
    bodyText.innerHTML = "TeaBar was created by a group of tea lovers based in NYC.";

    contentDiv.appendChild(header);
    contentDiv.appendChild(bodyText);
 
}

export { aboutComponent };