/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { items } from "./../../assets/data/filtered";

function Filter() {
  const [filter, setFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [popoopContent, setPopoopContent] = useState([]);
  const [closePopup, setClosePopup] = useState(false);
  const changeContent = (item) => {
    setPopoopContent([item]);
    setClosePopup(!closePopup);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredItems = items
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .filter(
      (item) => categoryFilter === "" || item.category === categoryFilter
    );

  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3 p-5 text-slate-800 dark:bg-slate-800 dark:text-slate-300 min-h-screen">
      
      <div className="">
        <h1 className="text-center font-bold">LIGHT SOCKET</h1>
        <div className="flex justify-center gap-2 text-slate-800 font-medium p-3">
          <span className="dark:text-slate-300">LIGHT ON</span>

          <input
            type="checkbox"
            id="toggleSwitch"
            className="hidden"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />

          <label htmlFor="toggleSwitch">
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <div
                className={
                  "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
                  (toggle ? null : toggleClass)
                }
              ></div>
            </div>
          </label>

          <span className="dark:text-slate-300">LIGHT OFF </span>
        </div>
      </div>

      <div className="text-center mt-5 text-3xl font-bold container ">
        <h1>Food Recipe</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 mt-7">
        <div className="">
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Food name"
            className="bg-transparent focus:outline-0 border-b mr-5"
          />
          <select
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className=" rounded-sm focus:outline-0 bg-transparent"
          >
            <option value="" className="dark:bg-slate-800 border-0">Food Categories</option>
            <option value="Asian" className="dark:bg-slate-800 border-0">Asian</option>
            <option value="Italian" className="dark:bg-slate-800 border-0">Italian</option>
            <option value="Meksiko" className="dark:bg-slate-800 border-0">Meksiko</option>
            <option value="Eropa" className="dark:bg-slate-800 border-0">Eropa</option>
            <option value="Spanyol" className="dark:bg-slate-800 border-0">Spanyol</option>
            <option value="Indian" className="dark:bg-slate-800 border-0">Indian</option>
          </select>
        </div>
  
        <div className="mt-7">
          <ul className="flex flex-wrap gap-3 justify-center items-center sm:container">
            {filteredItems.map((item) => (
              <button type="button" onClick={() => changeContent(item)}>
                <li key={item.id} className="border-2 shadow-xl p-3 h-max w-44 rounded-md dark:shadow-slate-950 dark:border text-left dark:border-slate-300">
                  <img
                    src={item.imageUrl}
                    alt="food img"
                    className="object-cover rounded-md mb-2"
                  />

                  <div className="">
                    <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </li>
              </button>
            ))}
          </ul>
          {closePopup && (
            <>
              {popoopContent.map((pop) => {
                return (
                  <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 ">
                    <div className="border-2 shadow-xl p-3 bg-white w-3/4 h-max relative dark:bg-slate-800 rounded-md dark:border dark:shadow-2xl dark:shadow-slate-950 sm:w-96 flex flex-col items-center sm:p-5">
                      <button
                        className="py-1 px-2.5 text-sm rounded-full bg-red-600 absolute top-0 right-0 text-white font-black text-center m-auto border flex justify-center items-center border-white dark:border-slate-800 dark:text-slate-100"
                        onClick={changeContent}
                      >
                        X
                      </button>
                      <img src={pop.imageUrl} alt="food img" className="rounded-md"/>
                      <div className="">
                        <h3 className="text-lg font-semibold my-3">
                          {pop.name}
                        </h3>
                        <p className="mb-2">{pop.desc}</p>
                        <p className="first-letter:font-semibold first-letter:text-lg color">
                          {pop.recipe}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Filter;
