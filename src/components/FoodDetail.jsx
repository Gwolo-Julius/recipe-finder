import React, { useEffect, useState } from "react";
import "./foodDetail.css";
import { API_KEY } from "../utils/utility";

const FoodDetail = ({ foodId }) => {
  const URL2 = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [foodInfo, setFoodInfo] = useState("715415");

  useEffect(() => {
    async function fetchFoodDetails() {
      const res = await fetch(`${URL2}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFoodDetails();
  }, [foodId]);

  return (
    <div className="food__detail">
      <div className="food__detail__wrapper">
        <div className="food__title">
          <h4>{food.title}</h4>
        </div>
        <div className="food__image">
          <img src={food.image} alt="" />
        </div>
        <div className="details">
          <div className="sub__info">
            <span>
              <strong>⏰ {food.readyInMinutes} Minutes</strong>
            </span>
            <span>
              <strong>
                {food.vegetarian ? "🥕 Vegetarian" : " 🍖 Non-vegetarian"}
              </strong>
            </span>
            <span>
              <strong>👨‍👩‍👧‍👧 serves: {food.servings} People</strong>
            </span>
            <span>
              <strong>{food.vegan ? "🐄  Vegan" : ""}</strong>
            </span>
          </div>
          <div className="pricing">
            <span>
              Price: ${(food.pricePerServing / 100).toFixed(2)} per serving
            </span>
          </div>
        </div>
      </div>
      <h1>Ingredients</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div className="ingredient_container">
            <div className="image_con">
              <img
                src={
                  `https://img.spoonacular.com/ingredients_100x100/` +
                  item.image
                }
                alt=""
              />
            </div>
            <div className="name_qty">
              <h4 className="name">{item.name}</h4>
              <h4 className="amount">
                {item.amount} {item.unit}
              </h4>
            </div>
          </div>
        ))
      )}

      <div className="instructions">
        <h2>Instructions:</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => (
            <li className="instructions_detail">{step.step}</li>
          ))
        )}
      </div>
    </div>
  );
};

export default FoodDetail;
