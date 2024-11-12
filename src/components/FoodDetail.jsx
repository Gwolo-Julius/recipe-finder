import React, { useEffect, useState } from "react";
import "./foodDetail.css";
import { API_KEY } from "../utils/utility";

const FoodDetail = ({ foodId }) => {
  const URL2 = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const [food, setFood] = useState({});
  const [foodInfo, setFoodInfo] = useState("715415");
  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(`${URL2}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFoodDetails();
  }, []);
  return (
    <div className="food__detail">
      <div className="food__title">
        <h4>{food.title}</h4>
      </div>
      <h3>I'm food detail container{foodId}</h3>
    </div>
  );
};

export default FoodDetail;
