import { homepageComponent } from "./homepage";
import { menuComponent } from "./menupage";
import { aboutComponent } from "./aboutpage";

document.addEventListener("DOMContentLoaded", function() {
    // function body

    // Write the tab-switching logic inside of index.js
    // You should have event listeners for each tab
    // that wipes out the current contents and
    // then runs the correct ‘tab module’ to populate it again.

    const contentDiv = document.querySelector("#content")

    // Create navbar div
    const navBar = document.createElement("div")
    navBar.className = "nav"

    // Create contain
    
    // Create menu tab buttons
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

