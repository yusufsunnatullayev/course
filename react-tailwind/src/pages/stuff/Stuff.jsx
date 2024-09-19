import React, { useState } from "react";

const fruits = [
  "apple",
  "banana",
  "pineapple",
  "peach",
  "strawberry",
  "watermelon",
];

const Stuff = () => {
  const [products, setProducts] = useState(fruits);
  const [val, setVal] = useState("");

  const reverseHandle = () => {
    const reversed = fruits.map((fruit) => fruit.split("").reverse().join(""));
    setProducts(reversed);
  };

  const resetHandle = () => {
    setProducts(fruits);
  };

  const searchHandler = () => {
    const filtered = fruits.filter((fruit) => fruit.endsWith(val));
    setProducts(filtered);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-8 items-start px-52 py-20 dark:bg-emerald-950 dark:text-white">
      <h1 className="font-semibold text-4xl ">Fruits</h1>
      <div className="flex items-center justify-center gap-4">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="px-3 py-1 rounded-md outline-none bg-transparent border border-white"
          type="text"
          placeholder="type end of the products..."
        />
        <button
          onClick={searchHandler}
          className="px-3 py-1 rounded-md font-semibold bg-blue-600 border-none hover:opacity-80 duration-150"
        >
          Search
        </button>
      </div>
      <div className="flex flex-col items-start gap-3 ">
        {products.length &&
          products.map((fruit, index) => (
            <span key={index} className="text-base font-semibold">
              {fruit}
            </span>
          ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={reverseHandle}
          className="px-3 py-1 rounded-md text-base font-semibold bg-blue-600 hover:opacity-80 duration-150"
        >
          Reverse
        </button>
        <button
          onClick={resetHandle}
          className="px-3 py-1 rounded-md text-base font-semibold bg-red-600 hover:opacity-80 duration-150"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stuff;
