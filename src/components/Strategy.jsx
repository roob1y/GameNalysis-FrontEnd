import ListReviews  from "./ListReviews";
import CategoryList from "./CategoryList";

import { getAllReviews } from "../utils/api";

import { useState } from "react";

const Strategy = () => {
  const [strategyReviews, setStrategyReviews] = useState([]);
  getAllReviews().then(({ reviews }) => {
    const filteredStrategyReviews = reviews.filter((review) => review.category === 'strategy');
    setStrategyReviews(filteredStrategyReviews);
  });
  return (
    <>
      <main className="main">
        <h2>Reviews</h2>
        <CategoryList />
        <ListReviews reviews={strategyReviews} />
      </main>
    </>
  );
}

export default Strategy;