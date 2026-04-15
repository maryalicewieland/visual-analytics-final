// resourced used:
//      tabs: 
//      1) https://www.w3schools.com/howto/howto_js_tabs.asp

// make tabs
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

// handle logic in selecting tabs by adding event listener so when tab is clicked on the css class active is added or deleted, showing and hiding content as needed. This should scale up well if we decide to add another tab.
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = tab.dataset.tab;

        //Remove all active classes
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        //Activate content accordingly
        tab.classList.add("active");
        document.getElementById(target).classList.add("active");

        // enter function to change charts here
    })
})