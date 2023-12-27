import React from "react";
import Navbar from "../layout/Navbar";
import Novotype from "./Novonegocio-sites/Novotype";
import useLocalStorage from "use-local-storage"


const Novonegocio = () => {

    const preferencia = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isdark, setisdark] = useLocalStorage("isdark", preferencia);

    return(<>
    <Navbar isdark={isdark} setisdark={setisdark}/>
    <Novotype isdark={isdark} setisdark={setisdark}/>
    </>)

}

export default Novonegocio;