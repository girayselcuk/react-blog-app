import { Link } from "react-router-dom";
import "./navigation-styled.scss";

const Navigation = () => {

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link className="navigation__link">Anasayfa</Link>
                </li>

                <li className="navigation__item">
                    <Link className="navigation__link">Hakkımda</Link>
                </li>
            </ul>
        </nav>
    )

}

export {Navigation};