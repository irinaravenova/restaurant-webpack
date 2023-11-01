function homepageComponent() {

    const contentDiv = document.querySelector("#content")

    const image = document.createElement('img');
    const header = document.createElement('h1');
    const caption = document.createElement('p');

    image.src = "teacup.jpeg";
    header.innerHTML = "TeaBar";
    caption.innerHTML = "A lively yet comforting oasis for connoisseurs of quality tea.";
    
    contentDiv.appendChild(image);
    contentDiv.appendChild(header);
    contentDiv.appendChild(caption);
}


export { homepageComponent };