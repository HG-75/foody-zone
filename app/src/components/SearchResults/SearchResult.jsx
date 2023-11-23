import { BASE_URL } from "../../Global things/BaseUrl";
import "../../Styles/Search.scss";
import PropTypes from "prop-types";
const SearchResult = ({ data }) => {
  return (
    <div>
      <div className="food_cardContainer">
        <div className="food_cards">
          {data?.map(({ name, image, text, price }) => (
            <div key={name} className="food_card">
              <div className="food-image">
                <img src={BASE_URL + image} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <button>${price.toFixed(2)}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  data: PropTypes.array,
};

export default SearchResult;
