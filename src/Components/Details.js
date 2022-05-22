import {useParams} from "react-router";
import {useState} from "react";
import './Details.css';
import db from '../storage/db.json';
import algis from "./premium-icon-algiz-4989001.png";

function Details() {
    let { name } = useParams();
    let all = {albums: db};
    let current = all.albums.filter((item, index) => all.albums[index].short === name);
    let [state] = useState(current[0]);

    console.log(state.tracks);


    return  (
        <div className="container">
            <div className="card-inner">
                <div className="card-template">
                    <div className="info">
                        <div className="cover">
                            <img src={state.cover} alt=""/>
                        </div>
                        <div className="about">
                            <p><strong>Name: </strong>{state.name}</p>
                            <p><strong>Released: </strong>{state.released}</p>
                            <p><strong>Genre: </strong>{state.genre}</p>

                        </div>
                    </div>
                    <div className="runes-outline">
                        <img src={algis} alt="/"/>
                        <img src={algis} alt="/"/>
                        <img src={algis} alt="/"/>
                    </div>
                    <div>
                        <h3>Tracks: </h3>
                        <ul className="track-list">
                            {
                                Object.keys(state.tracks).map(index => {
                                    return (
                                        <li className="track-item" key={index}>{state.tracks[index]}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <footer>
                    <p><strong>Copyright:</strong> 1991-{new Date().getFullYear()}.</p>
                </footer>
            </div>
        </div>


)}

export default Details;