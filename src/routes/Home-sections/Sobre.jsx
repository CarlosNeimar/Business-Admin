import "./Homes.css"
import { IoLogoGithub } from "react-icons/io5";


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
                        <p className="title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>

            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">FLIP CARD</p>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>


            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">FLIP CARD</p>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p className="title">BACK</p>
                        <p>Leave Me</p>
                    </div>
                </div>
            </div>



        </section>
    )

}

export default Sobre;