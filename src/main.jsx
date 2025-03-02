import ReactDOM from "react-dom/client";

const data = new Date();
const godzina = data.getHours();
const minuta = data.getMinutes();
const element = (
  <h1>
    {godzina} {minuta}
  </h1>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);
