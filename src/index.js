import { homepageComponent } from "./homepage";
import { menuComponent } from "./menupage";
import { aboutComponent } from "./aboutpage";
import './style.css';

document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.querySelector("#content")

    const navBar = document.createElement("div")
    navBar.className = "nav"
    
    const homeTab = document.createElement("button")
    const menuTab = document.createElement("button")
    const aboutTab = document.createElement("button")

    // Write button labels
    homeTab.innerHTML = "Home"
    menuTab.innerHTML = "Menu"
    aboutTab.innerHTML = "About Us"

    // Append buttons to navbar div
    navBar.appendChild(homeTab)
    navBar.appendChild(menuTab)
    navBar.appendChild(aboutTab)
    document.body.insertBefore(navBar, contentDiv)

    homeTab.addEventListener('click', () => {
        contentDiv.replaceChildren();
        homepageComponent();
    })

    menuTab.addEventListener('click', () => {
        contentDiv.replaceChildren();
        menuComponent();
    })

    aboutTab.addEventListener('click', () => {
        contentDiv.replaceChildren();
        aboutComponent();
    })

 });

homepageComponent();

