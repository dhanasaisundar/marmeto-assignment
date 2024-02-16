let titles = ["Latest Edition", "Shirts", "Hoodies"];
let searchInput = document.getElementById("search");

searchInput.addEventListener("input", function() {
    var query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";
    var filteredTitles = titles.filter(function(title) {
        return title.toLowerCase().includes(query);
    });
    filteredTitles.forEach(function(title) {
        var titleElement = document.createElement("div");
        titleElement.textContent = title;
        searchResults.appendChild(titleElement);
    });
});