import {useNavigate } from "react-router";
import { useState } from "react";
import Details from "./Details";

function Albums() {
    let [state] = useState({
        album: [
            {
                name: "Burzum",
                short: "burzum",
                released: 1992,
                genre: "Black metal",
                cover: "https://i.discogs.com/_oFHuMbBaQ_pttNBFbEDzXQwyytCyAe6B-eg95uAxQQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxMzQ0/NC0xMzIyMzAyMjUz/LmpwZWc.jpeg",
                tracks: {
                    1: "fffff"
                }
            },
            {
                name: "Aske",
                short: "aske",
                released: 1992,
                genre: "Black metal",
                cover: "https://i.discogs.com/uX0KVpxe98B9dENJdkZG5NZn5XTvmne6tfdeXjUuTxs/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2OTcz/OS0xMzAwMDM5MTEw/LmpwZWc.jpeg"
            },
            {
                name: "Det Som Engang Var",
                short: "detsomengangvar",
                released: 1993,
                genre: "Dark Ambient, Black Metal",
                cover: "https://i.discogs.com/dBTcXnL22reUPYKDSFZhpkuuwGohg6GvCN0sfa1N3vk/rs:fit/g:sm/q:90/h:600/w:586/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMzA4/OC0xNDgzMTIwNTM3/LTg5NzguanBlZw.jpeg"
            },
            {
                name: "Hvis Lyset Tar Oss",
                short: "hvis",
                released: 1994,
                genre: "Dark Ambient, Black Metal",
                cover: "https://avatars.yandex.net/get-music-content/38044/90398d5d.a.769905-1/m1000x1000"
            },
            {
                name: "Filosofem",
                short: "filosofem",
                released: 1995,
                genre: "Ambient, Black Metal",
                cover: "https://avatars.yandex.net/get-music-content/28589/2ccea722.a.817239-1/m1000x1000"
            },
            {
                name: "Dauði Baldrs",
                short: "baldrs",
                released: 1997,
                genre: "Dungeon Synth, Ambient",
                cover: "https://avatars.yandex.net/get-music-content/38044/2daaa16e.a.769904-1/m1000x1000"
            },
            {
                name: "Hliðskjálf",
                short: "hliskjlf",
                released: 1999,
                genre: "Dungeon Synth, Ambient",
                cover: "https://avatars.yandex.net/get-music-content/49707/8f490553.a.801294-1/m1000x1000"
            },
            {
                name: "Belus",
                short: "belus",
                released: 2010,
                genre: "Black metal",
                cover: "https://i.discogs.com/74Y6mYGhuk9qCEFglZy2pVPAVYP7PL_vEiAcryaxRKY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNjEz/NDMtMTI3Mjk4OTMz/NC5qcGVn.jpeg"
            },
            {
                name: "Fallen",
                short: "fallen",
                released: 2011,
                genre: "Black metal",
                cover: "https://avatars.yandex.net/get-music-content/42108/bcbcc471.a.683682-1/m1000x1000"
            },
            {
                name: "From The Depths Of Darkness",
                short: "fromdepths",
                released: 2011,
                genre: "Black metal",
                cover: "https://avatars.yandex.net/get-music-content/34131/e19a6079.a.702906-1/m1000x1000"
            },
            {
                name: "Umskiptar",
                short: "umskiptar",
                released: 2012,
                genre: "Black metal",
                cover: "https://avatars.yandex.net/get-music-content/34131/40b65e89.a.687192-1/m1000x1000"
            },
            {
                name: "Sôl Austan, Mâni Vestan",
                short: "austan",
                released: 2013,
                genre: "Dark Ambient, Dungeon Synth",
                cover: "https://avatars.yandex.net/get-music-content/28589/c7385662.a.1405590-1/m1000x1000"
            },
            {
                name: "The Ways Of Yore",
                short: "wayofyore",
                released: 2014,
                genre: "Ambient, Nordic",
                cover: "https://i.discogs.com/4y2Y6yVnUzMq72h1DfVtuG1IESlPr-xkK0obn_rtRq4/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU3MDA4/MzEtMTQwMTg0MjA1/MC04MTMwLmpwZWc.jpeg"
            },
            {
                name: "Thulêan Mysteries",
                short: "thulean",
                released: 2020,
                genre: "Dungeon Synth, Dark Ambient",
                cover: "https://avatars.yandex.net/get-music-content/2373979/55e2563a.a.9487645-1/m1000x1000"
            },
        ]
    });

    let navigate = useNavigate();
    let toHome = () => {
        navigate("/");
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {
                    state.album.map((item, index) => {
                        return (
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