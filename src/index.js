import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StartRating from "./starRating";

// function Test() {
//   const [moive, setMovie] = useState(0);

//   return (
//     <div>
//       <StartRating
//         maxRating={5}
//         color="blue"
//         size={52}
//         message={["Terrible", "ok", "Good", "decent", "amazing"]}
//         onSetRating={setMovie}
//       />

//       <p>This movie is rated as {moive}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
