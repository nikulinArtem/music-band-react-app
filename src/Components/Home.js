import { useNavigate } from "react-router";
import logo from './logo.png';
import algis from './premium-icon-algiz-4989001.png';
import othila from './premium-icon-othila-4992760.png';
import './Home.css';
import About from "./About";
import Style from "./Genre";

function Home() {
    let navigate = useNavigate();
    function albumList() {
        navigate("/albums");
    }

    return (
        <div className="home-container">
            <div className="about-section">
                <div className="image-inner">
                    <img  src={logo} alt="logo"/>
                </div>

                <blockquote >
                    <p>
                        The word "burzum" means "darkness" in the black speech, a fictional language crafted by Lord of the Rings writer J. R. R. Tolkien.
                    </p>
                </blockquote>

                <div className="runes-outline">
                    <img src={algis} alt="/"/>
                    <img src={algis} alt="/"/>
                    <img src={algis} alt="/"/>
                </div>

                <About />

                <div className="runes-outline">
                    <img src={othila} alt="/"/>
                    <img src={othila} alt="/"/>
                    <img src={othila} alt="/"/>
                </div>

                <Style />

                <button className="album-btn" onClick={albumList} >GO TO ALBUMS</button>

                <div className="runes-outline">
                    <img src={algis} alt="/"/>
                    <img src={algis} alt="/"/>
                    <img src={algis} alt="/"/>
                </div>
            </div>

            <footer>
                <p><strong>Copyright:</strong> 1991-{new Date().getFullYear()}.</p>
            </footer>
        </div>
    );
}

export default Home;