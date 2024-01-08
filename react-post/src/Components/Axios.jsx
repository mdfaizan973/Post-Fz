import axios from "axios";
import "./Styles/Axios.css";
import { useState, useEffect } from "react";
export default function Axios() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee"
      )
      .then((response) => {
        console.log("Response:", response.data);
        setDatas(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  for (let elem of datas) {
    console.log(elem.category.image);
  }
  return (
    <div id="main">
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>ID</th>
            <th>Images</th>
            <th>Price</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((ele, i) => (
            <tr key={i}>
              <td>{ele.title}</td>
              <td>Description 1</td>
              <td>1</td>
              <td>
                <img src={ele.category.image} alt="Product Image 1" />
              </td>
              <td>$19.99</td>
              <td>Product Title 1</td>
            </tr>
          ))}
        </tbody>{" "}
        <div className="buttons">
          <button>Next</button>
          <button>0</button>
          <button>Prev</button>
        </div>
      </table>
    </div>
  );
}
