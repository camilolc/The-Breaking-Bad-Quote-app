import React from "react";
import { useFetch } from "../hooks/useFetch";
import "../breakingbadapp.css";

export const Img = ({ author }) => {
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/characters?name=${author}`
  );
  const { img, occupation, status, nickname } = !!data && data[0];
  return (
    <>
      <div className="card">
        <img src={img} alt=""></img>
      </div>
      <ul>
        <li>Nickname: {nickname}</li>
        <li>Occupation: {`${occupation} `}</li>
        <li>Status: {status}</li>
      </ul>
    </>
  );
};
