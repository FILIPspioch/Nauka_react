import ReactDOM from "react-dom/client";

const data = new Date();
const godzina = data.getHours();

const Funkcja = () => <h1>{godzina}</h1>;

const element = <Funkcja></Funkcja>;

ReactDOM.createRoot(document.getElementById("root")).render(element);
