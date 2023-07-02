import { useState } from "react";
import AddCategory from "./AddCategory";

function App() {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <h1>Gif App</h1>
      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
