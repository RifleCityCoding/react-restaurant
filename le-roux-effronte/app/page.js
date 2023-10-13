"use client";
import styles from "./page.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "./MainHeader";
import MenuAccord from "./MenuAccord";
import { Main } from "next/document";
import MenuCard from "./MenuCard";

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
console.log(data);
  return (
    <main
      style={{
        backgroundImage: `url("https://images8.alphacoders.com/875/875387.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100vw",
        height: "200vh",
      }}
    >
      <div className="Container">
        <div className="Row">
          <div className="Col">
            <MainHeader />

           <MenuCard data={data}>
           </MenuCard>
           
          
          
          
          </div>
        </div>
      </div>
    </main>
  );
}
