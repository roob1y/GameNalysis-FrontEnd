import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import CategoryChosenOption from "./components/CategoryChosenOption";
import CategoryList from "./components/CategoryList";
import CategoryOption from "./components/CategoryOption";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const categoryOptions = [
    "strategy",
    "hidden-roles",
    "dexterity",
    "push-your-luck",
    "roll-and-write",
    "deck-building",
    "engine-building",
  ];
  const [selectCategoryOption, setCategoryOption] = useState(null);
  const handleClick = (value) => {
    setCategoryOption(value);
  };
  return (
    <div className="App">
      <Header />
      <CategoryChosenOption displayValue={selectCategoryOption} />
      <CategoryList>
        {categoryOptions.map((category, index) => {
          return (
            <CategoryOption key={index + 1} optionVal={category} handleClick={handleClick} />
          );
        })}
      </CategoryList>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/strategy" element={<Main />} />
        <Route path="/hidden-roles" element={<Main />} />
        <Route path="/dexterity" element={<Main />} />
        <Route path="/push-your-luck" element={<Main />} />
        <Route path="/roll-and-write" element={<Main />} />
        <Route path="/deck-building" element={<Main />} />
        <Route path="/engine-building" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
