import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Hero from "./components/Hero";
import Container from "./components/Container";
import FoodDetail from "./components/FoodDetail";
import Footer from "./components/Footer";

function App({ setQuery }) {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");

  return (
    <>
      <Hero setQuery={setQuery} />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <FoodList
          key={foodData.id}
          foodData={foodData}
          setFoodData={setFoodData}
          setFoodId={setFoodId}
        />
        <FoodDetail foodId={foodId} />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
