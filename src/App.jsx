import { useEffect, useState } from "react";
import "./app.css";
import { Header } from "./componente/Moldura";

function App() {
  const imagens = ["src/god1.jpeg", "src/god2.jpeg", "src/god3.jpeg"];

  const [img, setImg] = useState();
  let temp = 0;
  let interval;
  function Slide() {
    console.log(temp);
    interval = setInterval(() => {
      if (temp < imagens.length) {
        setImg(imagens[temp]);
        clearInterval(interval);
        temp++;
      } else {
        temp = 0;
      }
    }, 2000);
  }

  useEffect(() => {
    Slide();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="slideShow">
        <img className="img" src={img} />
      </div>
    </div>
  );
}

export default App;
