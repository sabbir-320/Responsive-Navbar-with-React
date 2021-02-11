import { useState } from "react";
import "./styles.css";

export default function App() {
  const [click, setClick] = useState(false);

  const handleMenu = (x) => setClick(!click);
  return (
    <div className="nav">
      <div className="icon">
        <a href="#" onClick={handleMenu}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <div className={click ? "after-click" : "nav-items"}>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>
    </div>
  );
}
