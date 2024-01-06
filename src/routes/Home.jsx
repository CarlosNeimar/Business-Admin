import React from "react";
import Start from "./Home-sections/Start";
import Irdash from "./Home-sections/Irdash";
import Sobre from "./Home-sections/Sobre";

const Home = () => {
    return (
        <div>
            <Start/>
            <Sobre />
            <Irdash />
        </div>
    )
}

export default Home