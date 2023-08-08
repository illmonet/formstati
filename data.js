// This function creates a GitHub issue with user data
async function createGitHubIssue(name, place) {
    const apiUrl = "https://api.github.com/repos/your-username/your-repo/issues";
    const accessToken = "your-personal-access-token";
  
    const issueData = {
      title: "User Data Submission",
      body: `Name: ${name}\nPlace: ${place}`,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issueData),
      });
  
      if (response.ok) {
        console.log("Issue created successfully.");
      } else {
        console.error("Issue creation failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Attach event listener to form submission
  const dataForm = document.getElementById("data-form");
  
  dataForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = dataForm.elements["name"].value;
    const place = dataForm.elements["place"].value;
  
    // Create a GitHub issue with user data
    createGitHubIssue(name, place);
  
    // Display the submitted data
    const outputDiv = document.createElement("div");
    outputDiv.classList.add("output");
    outputDiv.innerHTML = `<p class="output-name">${name}</p><p class="output-place">${place}</p>`;
    document.body.appendChild(outputDiv);
  
    // Reset the form
    dataForm.reset();
  });
  