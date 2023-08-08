const dataForm = document.getElementById("dataForm");
const resetBtn = document.getElementById("resetBtn");

dataForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = dataForm.elements["name"].value;
    const place = dataForm.elements["place"].value;

    // Display the submitted data
    const outputDiv = document.createElement("div");
    outputDiv.classList.add("output");
    outputDiv.innerHTML = `<p class="output-name">${name}</p><p class="output-place">${place}</p>`;
    document.body.appendChild(outputDiv);

    // Store the data in a local array (you can replace this with any desired storage method)
    storeData(name, place);
    
    // Reset the form
    dataForm.reset();
});

resetBtn.addEventListener("click", function () {
    document.querySelectorAll(".output").forEach(el => el.remove());
});

function storeData(name, place) {
    const timestamp = new Date().toLocaleString();
    const data = {
        timestamp,
        name,
        place
    };

    // Add the data to the local storage array
    let storedData = JSON.parse(localStorage.getItem("storedData") || "[]");
    storedData.push(data);
    localStorage.setItem("storedData", JSON.stringify(storedData));
}
