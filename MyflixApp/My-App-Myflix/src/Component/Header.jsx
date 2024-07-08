import Slider from "./Slider.jsx"
import "./Header.css"
export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Slider/>
      </div>
      <section className="header-section">
        <h1>Retrouvez le plus grand classement de chef d'oeuvre</h1>
        <p>Explorez notre catalogue de films, séries et animes.</p>
        <button className="btn">Rechercher</button>
      </section>
    </div>
  )
}