import "./Homes.css"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


const Sobre = () => {

    return (
        <section className="Sobrehome">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="title">
                        <IoLogoGithub className="icon" />
                        </div>
                        <p className="title">GIT HUB</p>
                    </div>
                    <div className="flip-card-back">
                        <a href="https://github.com/CarlosNeimar">
                        <div className="profilearea">
                        <div className="profile">
                            <img src="https://avatars.githubusercontent.com/u/130559029?v=4" alt="" />
                        </div>
                        </div>
                        <p className="title">Carlos Neimar</p>
                        <p>Ver perfil</p>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="title">
                        <FaLinkedin className="icon" />
                        </div>
                        <p className="title">Linkedin</p>
                    </div>
                    <div className="flip-card-back">
                        <a href="https://github.com/CarlosNeimar">
                        <div className="profilearea">
                        <div className="profile">
                            <img src="https://avatars.githubusercontent.com/u/130559029?v=4" alt="" />
                        </div>
                        </div>
                        <p className="title">Carlos Neimar</p>
                        <p>Ver perfil</p>
                        </a>
                    </div>
                </div>
            </div>


            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="title">
                        <IoLogoGithub className="icon" />
                        </div>
                        <p className="title">GIT HUB</p>
                    </div>
                    <div className="flip-card-back">
                        <a href="https://github.com/CarlosNeimar">
                        <div className="profilearea">
                        <div className="profile">
                            <img src="https://avatars.githubusercontent.com/u/130559029?v=4" alt="" />
                        </div>
                        </div>
                        <p className="title">Carlos Neimar</p>
                        <p>Ver perfil</p>
                        </a>
                    </div>
                </div>
            </div>



        </section>
    )

}

export default Sobre;