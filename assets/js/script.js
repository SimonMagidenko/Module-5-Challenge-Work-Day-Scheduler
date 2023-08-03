$(function () {

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

  let currentDate = document.querySelector("#currentDay");
  currentDate.textContent = dayjs().format("dddd, MMMM D");


  $(".saveBtn").on("click", function () {

    let timeBlock = $(this).parent().attr("id");
    let textArea = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, textArea)
  })

  for (let hour = 9; hour <= 17; hour++) {
    let descriptionEl = $(`#hour-${hour} .description`);
    let localStorageKey = `hour-${hour}`;

    let storedValue = localStorage.getItem(localStorageKey);
    if (storedValue !== null) {
      descriptionEl.val(storedValue);
    }
  }



});

