document.getElementById("searchOrders")?.addEventListener("keyup", function () {

    var search = this.value.toLowerCase();
    var rows = document.querySelectorAll("#ordersTable tr");

    rows.forEach(function (row) {
        var text = row.innerText.toLowerCase();

        if (text.includes(search)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });

});

document.getElementById("searchMenu")?.addEventListener("keyup", function () {

    var search = this.value.toLowerCase();
    var cards = document.querySelectorAll(".menu-card");

    cards.forEach(function (card) {

        var text = card.innerText.toLowerCase();

        if (text.includes(search)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});