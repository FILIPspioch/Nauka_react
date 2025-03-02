import ReactDOM from "react-dom/client";

const data = new Date();
const godzina = data.getHours();

const Funkcja = (hr) => <h1>{hr}</h1>;

const element = <>{Funkcja(godzina)}</>;

ReactDOM.createRoot(document.getElementById("root")).render(element);
