import logomyflyx from "../Images/logomyflix.png"

import "./Nav.css"

export default function () {
    function handeleChange(){
        document.body.classList.toggle("light-mode")
    }
  return (
    <div className="nav">
      <img src={logomyflyx} alt="Logo" />
      <ul>
        <li>Home</li>
        <li>Series</li>
        <li>Movies</li>
        <li>Animes</li>
        <li>My List</li>
      </ul>
      
        <button onClick={handeleChange}></button>

    </div>
  );
}