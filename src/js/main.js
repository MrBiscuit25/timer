import "../scss/style.scss";
document.addEventListener("DOMContentLoaded", () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const app = document.querySelector("#app");
  const timeInfo = app.querySelector(".text-info-time");

  function Timer() {
    const dateNow = new Date();
    const dayInFuture = new Date(2024, 0, 27, 8);
    const t = dayInFuture - dateNow.getTime();

    timeInfo.textContent = `until ${
      months[dayInFuture.getMonth()]
    }, ${dayInFuture.getDate()}th`;
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;

    const timeCards = document.querySelectorAll(".time");
    const times = [
      Math.floor(t / day),
      Math.floor((t % day) / hour),
      Math.floor((t % hour) / minute),
      Math.floor((t % minute) / 1000),
    ];

    timeCards.forEach((card, index) => {
      card.textContent = times[index];
    });
  }
  setInterval(() => {
    Timer();
  }, 1000);
});
