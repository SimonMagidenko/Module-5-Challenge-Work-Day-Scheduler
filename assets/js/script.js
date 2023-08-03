// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should

  let parentButtonEl = document.querySelectorAll(".time-block");
  let childButton = parentButtonEl.querySelectorAll(".saveBtn")
  let childButtonSave = localStorage.getItem("saveBtn")
  let textArea = document.querySelectorAll("textarea")
  let timeText = textArea.textContent

  childButton.addEventListener("click", function () {
    localStorage.setItem("saveBtn", timeText)
  })
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time

});
let rows = document.querySelectorAll(".row")

for (let i = 0; i < rows.length; i++) {
  let currentHour = parseInt(document.querySelectorAll(".row")[i].dataset.time)

  if (currentHour < dayjs().hour()) {
    rows[i].classList.add("past")
  } else if (currentHour === dayjs().hour()) {
    rows[i].classList.add("present")
  } else {
    rows[i].classList.add("future")
  }
}

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
let currentDate = document.querySelector("#currentDay")
currentDate.textContent = dayjs().format("dddd, MMMM D")
//With event Delegation, we only need 1 on click
