import { Logo } from "../Logo";
import { Navigation } from "../navigation";
import "./header-styled.scss";

const Header = () => {

    return (
        <header className="header">
            <Logo/>
            <Navigation/>
        </header>
    )

}

export {Header};