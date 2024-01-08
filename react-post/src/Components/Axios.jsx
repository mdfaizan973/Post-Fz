import axios from "axios";
import "./Styles/Axios.css";
import { useState, useEffect } from "react";
export default function Axios() {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?limit=5&page=${page}`
      )
      .then((response) => {
        console.log("Response:", response.data.data);
        setDatas(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page]);

  const handlepage = (val) => {
    setPage(page + val);
  };
  return (
    <div id="main">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>ID</th>
            <th>Images</th>
            <th>Title</th>

            <th>₹Price</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((ele, i) => (
            <tr key={i}>
              <td>{ele.description}</td> <td>{ele.id}</td>
              <td>
                <img src={ele.image} alt="Product Image 1" />
              </td>
              <td>{ele.title}</td>
              <td>₹ {ele.price}</td>
              <td>{ele.ingredients[0]}</td>
            </tr>
          ))}
        </tbody>
        <div className="buttons">
          <button disabled={page === 1} onClick={() => handlepage(-1)}>
            Prev
          </button>
          <button>{page}</button>
          <button onClick={() => handlepage(+1)}>Next</button>
        </div>
      </table>
    </div>
  );
}
