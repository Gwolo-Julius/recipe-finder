import React from "react";
import Search from "./Search";
// import FoodItems from "./FoodItems";
const FoodList = ({ foodData, setFoodData, setFoodId }) => {
  return (
    <div className="food_list">
      {foodData.map((food) => (
        <div className="food_detail" key={food.id}>
          <div className="img_wrapper">
            <img src={food.image} alt="" />
          </div>
          <div className="food_name">{food.title}</div>
          <button onClick={() => setFoodId(food.id)} className="btn">
            View Recipe
          </button>
        </div>
      ))}
      {/* <Search foodData={foodData} setFoodData={setFoodData} /> */}
    </div>
  );
};

export default FoodList;
