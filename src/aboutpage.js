function aboutComponent() {
    const bodyContent = document.querySelector("#content");

    const header = document.createElement('h1');
    const bodyText = document.createElement('p');

    header.innerHTML = "About Us";
    bodyText.innerHTML = "TeaBar was created by a group of tea lovers based in NYC.";

    bodyContent.appendChild(header);
    bodyContent.appendChild(bodyText);
 
}

export { aboutComponent };