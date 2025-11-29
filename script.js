const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const bookList = document.getElementById("bookList");
const items = bookList.getElementsByTagName("li");

searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    const keyword = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++){
        const text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(keyword) ? "" : "none";
    }
});
