import { useState, useEffect } from "react";
import "./Styles.css";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
export default function BarCharts() {
  //API -  https://dummyjson.com/products
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="main_containter">
      <h1>Stock Levels by Brand</h1>
      {/* here i will use Bar chart */}
      <ResponsiveContainer aspect={5}>
        <BarChart data={data}>
          <XAxis dataKey="brand" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stock" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
// npm install recharts
