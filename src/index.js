import "./styles.css";

const app = document.getElementById("app");
const clock = document.getElementById("clock");
const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const btn = document.getElementById("btn");

const renderDashs = () => {
  for (let i = 0; i < 360; i = i + 30) {
    const style = `
      --dash-rotate: ${i}deg;
      --dash-width: ${i % 90 === 0 ? 5 : 3}%;
      --dash-color: ${i % 90 === 0 ? "red" : "black"}`;

    const dash = document.createElement("div");

    dash.setAttribute("class", "dash");
    dash.setAttribute("style", style);

    clock.appendChild(dash);
  }

  app.appendChild(clock);
};

renderDashs();

btn.addEventListener("click", () => {
  const CIRCLE_DEGREE = 360;
  const ONE_HOUR_DEGREE = CIRCLE_DEGREE / 12;
  const ONE_MIN_DEGREE = CIRCLE_DEGREE / 60;

  const minDegree = mm.value * ONE_MIN_DEGREE;
  const minDegreeInPercent = (minDegree / CIRCLE_DEGREE) * 100;
  const extraHourDegree = (minDegreeInPercent * ONE_HOUR_DEGREE) / 100;
  const _hourDegree = hh.value * ONE_HOUR_DEGREE + extraHourDegree;

  const overCircleDegreeAmount = _hourDegree % CIRCLE_DEGREE;
  const hourDegree = overCircleDegreeAmount ? overCircleDegreeAmount : _hourDegree;

  document.getElementById("result").innerHTML = `degree: ${hourDegree}:${minDegree}`;
  document.getElementById("hour-hand").setAttribute("style", `--hour-hand-rotate: ${hourDegree + 90}deg;`);
  document.getElementById("min-hand").setAttribute("style", `--min-hand-rotate: ${minDegree + 90}deg;`);
});
