// Only For Tabs:
const tabs = document.querySelectorAll(".classic-list li");
const tabsData = document.querySelectorAll(".content>div");
tabs.forEach((tab) => {
    tab.addEventListener("click", (li) => {
        noActiveLi(li.target.parentElement);
        getInfoByLiText(li.target.innerHTML.toLowerCase());
        li.target.classList.add("active-li");
    });
});
function noActiveLi(liList) {
    Array.from(liList.children).forEach((li) => {
        li.setAttribute("class", "");
    });
}
function getInfoByLiText(liText) {
    tabsData.forEach((tabData) => {
        tabData.classList.add("d-none");
        if (tabData.classList.contains(liText)) {
            tabData.classList.remove("d-none");
        }
    });
}
