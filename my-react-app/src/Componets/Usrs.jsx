// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Style.css";
// export default function Usrs() {
//   const [data, setEData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [sData, setSdata] = useState({});
//   const getData = () => {
//     axios
//       .get(`https://api.github.com/users`)
//       .then((res) => {
//         console.log(res);
//         setEData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   console.log(data);

//   setTimeout(() => {
//     for (let elem of data) {
//       if (search == elem.login) {
//         console.log(elem);
//         setSdata(elem);
//       } else {
//         console.log("hello");
//       }
//     }
//   }, 1000);

//   return (
//     <div>
//       <input onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
//       <div className="main_container">
//         {data.map((ele, i) => (
//           <div className="cards" key={i}>
//             <div className="images">
//               <img src={ele.avatar_url} />
//             </div>
//             <div className="content">
//               <h3>{ele.login}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// // https://api.github.com/users
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Style.css";

export default function Usrs() {
  const [data, setEData] = useState([]);
  const [search, setSearch] = useState("");
  const [sData, setSdata] = useState({});

  const getData = () => {
    axios
      .get(`https://api.github.com/users`)
      .then((res) => {
        setEData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Filter the data based on the search input
  const filteredData = data.filter((elem) =>
    elem.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <div className="main_container">
        {filteredData.map((ele, i) => (
          <div className="cards" key={i}>
            <div className="images">
              <img src={ele.avatar_url} alt={ele.login} />
            </div>
            <div className="content">
              <h3>{ele.login}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
