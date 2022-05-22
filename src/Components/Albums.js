import {useNavigate } from "react-router";
import { useState } from "react";
import db from '../storage/db.json';
import AlbumList from "./AlbumList";

function Albums() {
    let [state] = useState({albums: db});

    let navigate = useNavigate();
    let toHome = () => {
        navigate("/");
    }


    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                    state.albums.map((item, index) => {
                        return (
                            // <AlbumList key={index}
                            //            name={item.name}
                            //            short={item.short}
                            //            year={item.released}
                            //            genre={item.genre}
                            //            cover={item.cover}
                            //            tracks={item.tracks}
                            // />
                            <div
                                style={
                                    {
                                        width: "250px",
                                        margin: "20px",
                                        alignSelf: "center",
                                        cursor: "pointer"
                                    }
                                }
                                key={index}
                                onClick={() => {
                                    navigate(`/albums/${item.short}`);
                                }}
                            >
                                <img style={{width: "100%", height: "auto", borderRadius: "10px", margin: "5px"}} src={item.cover} alt={item.name}/>
                                <p><strong>Name: </strong>{item.name}</p>
                                <p><strong>Date release: </strong>{item.released}</p>
                                <p><strong>Genre: </strong>{item.genre}</p>
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={toHome}>Back to home</button>

            <footer>
                <p><strong>Copyright:</strong> 1991-{new Date().getFullYear()}.</p>
            </footer>
        </div>

    );


}

export default Albums;