import logomyflyx from "../Images/logomyflix.png"

import "./Nav.css"

export default function () {
    function handeleChange(){
      const btnMode = document.querySelector(".btn-mode")
        document.body.classList.toggle("light-mode")
        btnMode.innerHTML = btnMode.innerHTML === "☀" ? "🌙" : "☀"

    }
  return (
    <div className="nav-container">
      <div className="nav">
        <img className="logo-img" src={logomyflyx} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>Animes</li>
          <li>My List</li>
        </ul>
        
        <button className="btn-mode" onClick={handeleChange}> ☀ </button>
      </div>
    </div>
  );
}