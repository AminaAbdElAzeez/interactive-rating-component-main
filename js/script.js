const rattingItem = document.querySelector(".rating-item");
const rattingList = document.querySelector(".rating-list");
const rattingListItems = document.querySelectorAll(".rating-list li");
const rattingLink = document.querySelector(".rating-link");
const thanksItem = document.querySelector(".thanks-item");
const rattingValue = document.querySelector(".ratting-value")


rattingListItems.forEach((ele) => {
    ele.addEventListener("click", () => {
        rattingListItems.forEach((ele) => {
            ele.classList.remove("added")
        })
        ele.classList.add("added");
        value=ele.textContent;
    })
})

rattingLink.addEventListener("click",() => {
    if (value > 0) {
        rattingItem.style.display="none";
        thanksItem.style.display="flex";
        rattingValue.textContent=`You Selected ${value} out of 5`
    }
})