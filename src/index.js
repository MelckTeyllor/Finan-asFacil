import { createRoot } from "react-dom/client";
import App from "./App";
 // Importe o componente App aqui

const root = createRoot(document.querySelector("#root"));

root.render(<App/>);