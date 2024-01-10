import { useEffect, useState } from "react";
import "./Styles/Axios.css";
import axios from "axios";
export default function Axios() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee?limit=5&page=${page}`
      )
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [page]);

  // console.log("data", data);

  const handlepagination = (val) => {
    setPage(page + val);
  };

  if (loading) {
    return <h1>Loading.......</h1>;
  }
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
          {/* Mapping data */}

          {data.map((ele, i) => (
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
        {/*Pagintaion Buttons  */}

        <div className="buttons">
          <button disabled={page == 1} onClick={() => handlepagination(-1)}>
            Prev
          </button>
          <button>{page}</button>
          <button onClick={() => handlepagination(1)}>Next</button>
        </div>
      </table>
    </div>
  );
}
