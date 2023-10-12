"use client"
import styles from "./page.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "./MainHeader";

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

  
  return (
    <main style={{
      backgroundImage: `url("https://images8.alphacoders.com/875/875387.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100vw',
      height: '200vh',
    }}>
      <MainHeader />
    </main>
  );
}
