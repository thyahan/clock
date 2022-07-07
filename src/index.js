import "./styles.css";

function renderDash() {
  const clockBody = document.getElementById("clock-body");

  for (let i = 0; i < 360; i = i + 15) {
    const dashElem = document.createElement("div");

    dashElem.setAttribute("class", "dash");
    dashElem.setAttribute(
      "style",
      `
    --dash-rotate: ${i}deg;
    --dash-width: ${i % 90 === 0 ? 5 : 3}%;
    --dash-color: ${i % 90 === 0 ? "red" : "black"}
    `
    );

    if (i % 90 === 0) console.log(i);

    clockBody.appendChild(dashElem);
  }
}

renderDash();
