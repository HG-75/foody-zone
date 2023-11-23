import { useEffect, useState } from "react";
import "./Styles/App.scss";
import SearchResult from "./components/SearchResults/SearchResult";

import { BASE_URL } from "./Global things/BaseUrl";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    fetchFoodData();
  }, []);

  console.log(data);

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="top_Container">
        <div className="logo">
          <img src="/Images/Foody Zone.svg" alt="logo" />
        </div>
        <div className="search">
          <input placeholder="Search Food" />
        </div>
      </div>
      <div className="filter_container">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>
      <SearchResult data={data} />
    </div>
  );
};

export default App;
