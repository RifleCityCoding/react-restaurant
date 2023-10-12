"use client"
import styles from "./page.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const baseURL = "https://www.jsonkeeper.com/b/MDXW";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Display our information to the page
  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
