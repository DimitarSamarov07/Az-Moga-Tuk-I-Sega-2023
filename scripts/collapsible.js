function collapse_init() {
    let items = document.querySelectorAll(".q-and-a-field")

    for (const item of items) {
        item.addEventListener("click", function (e) {
            let content = this.querySelector("p");
            if (content.style.display === "block") {
                content.style.display = "none"
            }
            else if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })
    }
}
collapse_init()
document.querySelector(".q-and-a-field").click()