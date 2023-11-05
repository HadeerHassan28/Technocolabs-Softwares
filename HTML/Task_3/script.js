"use strict";

document
  .getElementById("story-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(event.target);
    const formObject = {};

    // Convert formData to an object
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Log the form data (you can perform other actions here)
    console.log(formObject);
  });
