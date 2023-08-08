document.addEventListener("DOMContentLoaded", function () {
    const storedData = JSON.parse(localStorage.getItem("storedData") || "[]");

    const table = document.querySelector("table");
    for (const data of storedData) {
        const row = table.insertRow();
        const timeStampCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const placeCell = row.insertCell(2);

        timeStampCell.textContent = data.timestamp;
        nameCell.textContent = data.name;
        placeCell.textContent = data.place;
    }
});
