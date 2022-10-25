import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import API from "./Components/API";

export default function App() {
  const [counter, setCount] = useState(0);
  const [data, setData] = useState("");

  const handleCounterIncreament = () => {
    setCount(counter + 1);
  };

  const fetchRandomData = () => {
    return axios
      .get("https://randomuser.me/api")
      .then((randomData) => {
        // handle success
        // console.log(data);
        setData(JSON.stringify(randomData));
        return randomData;
      })
      .catch((err) => {
        // handle error
      });
  };

  useEffect(() => {
    fetchRandomData().then((randomData) => {
      // const temp = JSON.parse(randomData;
      setData(JSON.stringify(randomData) || "No user data found");
    });
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          fetchRandomData();
        }}
      >
        Fetch Random Data
      </button>
      <HoverCounter />
      <ClickCounter />
      <API />
    </div>
  );
}
