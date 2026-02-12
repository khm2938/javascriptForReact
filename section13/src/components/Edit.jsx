import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";


const Edit = () => {
  const params = useParams();
  return <>
      <h2>{params.id}edit</h2>    
    </>
};

export default Edit;
