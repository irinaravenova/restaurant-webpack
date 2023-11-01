import teacup from './teacup.jpeg';

function homepageComponent() {

    const contentDiv = document.querySelector("#content")

    const header = document.createElement('h1');
    const caption = document.createElement('p');
    const image = new Image();
    
    image.src = teacup;
    header.innerHTML = "TeaBar";
    caption.innerHTML = "A lively yet comforting oasis for connoisseurs of quality tea.";
    
    contentDiv.appendChild(image);
    contentDiv.appendChild(header);
    contentDiv.appendChild(caption);
}

export { homepageComponent };