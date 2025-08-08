import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Title from "./Title.jsx";
import Card from "./card.jsx";
import cardData from "../cardata.js";

function App() {
  const [filter, setFilter] = useState("all"); // all | active | inactive
  const [theme, setTheme] = useState("dark-theme"); // dark-theme | light-theme

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark-theme" ? "light-theme" : "dark-theme"));
  };

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme);
  }, [theme]);

  // Filter the cards based on the filter state
  const filteredCards = cardData.filter((card) => {
    if (filter === "active") return card.isActive;
    if (filter === "inactive") return !card.isActive;
    return true; // "all"
  });

  return (
    <div>
      <Header
        logo="/assets/images/logo.svg"
        themeIcon={
          theme === "dark-theme"
            ? "/assets/images/icon-sun.svg"
            : "/assets/images/icon-moon.svg"
        }
        onThemeToggle={toggleTheme}
      />

      <Title filter={filter} setFilter={setFilter} />

      <div className="card-container">
        {filteredCards.map((data) => (
          <Card
            key={data.id}
            logo={data.logo}
            name={data.name}
            description={data.description}
            isActive={data.isActive}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
