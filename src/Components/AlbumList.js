// import {useNavigate} from "react-router";
//
// function AlbumList(props) {
//     let { name, short, year, genre, cover } = props;
//
//
//     let navigate = useNavigate();
//
//     return(
//         <div
//             style={
//                 {
//                     width: "250px",
//                     margin: "20px",
//                     alignSelf: "center",
//                     cursor: "pointer"
//                 }
//             }
//             onClick={() => {
//                 navigate("/albums/" + short, {state: {test: 2}});
//             }}
//         >
//             <img style={{width: "100%", height: "auto", borderRadius: "10px", margin: "5px"}} src={cover} alt={name}/>
//             <p><strong>Name: </strong>{name}</p>
//             <p><strong>Date release: </strong>{year}</p>
//             <p><strong>Genre: </strong>{genre} </p>
//         </div>
//     )
// }
// export default AlbumList;