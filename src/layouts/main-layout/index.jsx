import "./main-layout-styled.scss";
import { Header } from "../../components/header";
import { Main } from "../../components/main";

const MainLayout = () => {

    return (
        <div className="main-layout">
            <Header/>
            <Main/>
        </div>
    )

}

export {MainLayout};