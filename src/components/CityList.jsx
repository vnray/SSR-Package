import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import himanchal from "../Data/himancha.json";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

const CityList = ({ data }) => {
  const { stateName } = useParams();
  const cities = data[stateName] || [];
  const [openCity, setOpenCity] = useState(null);
  const [limit, setLimit] = useState(9);

  console.log(cities);

  const handleAccordionToggle = (cityName) => {
    // If clicked city is already open, close it
    if (openCity === cityName) {
      setOpenCity(null);
    } else {
      setOpenCity(cityName);
    }
  };

  return (
    <div className="city-table-container">
      <div className="button-wrapper">
        <Footer />
      </div>
      <div className="content-wrapper">
        <h1>Cities in {stateName}</h1>
        <div className="city-wrapper">
          {cities.map((city, index) => (
            <div
              key={city.id}
              className="city-cell"
              style={{
                maxWidth: openCity === city.name ? "100%" : "30%",
                order: (index + 1) % 2 !== 0 ? 2 : 1,
              }}
            >
              <div className="accord-wrap">
                <div
                  className="accord"
                  onClick={() => handleAccordionToggle(city.name)}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  <h2>{city.name}</h2>{" "}
                  <div className="icon">
                    {openCity === city.name ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
              </div>
              {openCity === city.name && (
                <div
                  className="accordion-body"
                  style={{ padding: "10px", maxWidth: "100%" }}
                >
                  {/* Example details — you can show actual data */}
                  <div className="accordian-wrapper">
                    <div className="tour-packages">
                      <h3>Tour Packages</h3>
                      <div className="all-tour-packages">
                        {himanchal.data.packages.slice(0, limit).map((pack) => {
                          return (
                            <h4 key={pack.id}>
                              {pack.name.substring(0, 35)}...
                            </h4>
                          );
                        })}
                        <div className="btn-show">
                          {limit ? (
                            <button onClick={() => setLimit(limit.length)}>
                              Show More
                            </button>
                          ) : (
                            <button onClick={() => setLimit(12)}>
                              Show less
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="family-packages">
                      <h3>Family Packages</h3>
                      <div className="all-family-packages">
                        {himanchal.data.packages.slice(0, limit).map((pack) => {
                          return (
                            <h4 key={pack.id}>
                              {pack.name.substring(0, 35)}...
                            </h4>
                          );
                        })}
                        <div className="btn-show">
                          {limit ? (
                            <button onClick={() => setLimit(limit.length)}>
                              Show More
                            </button>
                          ) : (
                            <button onClick={() => setLimit(9)}>
                              Show less
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="family-packages">
                      <h3>Honeymoon Packages</h3>
                      <div className="all-family-packages">
                        {himanchal.data.packages.slice(0, limit).map((pack) => {
                          return (
                            <h4 key={pack.id}>
                              {pack.name.substring(0, 35)}...
                            </h4>
                          );
                        })}
                        <div className="btn-show">
                          {limit ? (
                            <button onClick={() => setLimit(limit.length)}>
                              Show More
                            </button>
                          ) : (
                            <button onClick={() => setLimit(9)}>
                              Show less
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="family-packages">
                      <h3>Luxury Tour Packages</h3>
                      <div className="all-family-packages">
                        {himanchal.data.packages.slice(0, limit).map((pack) => {
                          return (
                            <h4 key={pack.id}>
                              {pack.name.substring(0, 35)}...
                            </h4>
                          );
                        })}
                        <div className="btn-show">
                          {limit ? (
                            <button onClick={() => setLimit(limit.length)}>
                              Show More
                            </button>
                          ) : (
                            <button onClick={() => setLimit(9)}>
                              Show less
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Link to city page */}
                  <div className="pc-btn">
                    <Link to={`/state/${stateName}/${city.name}`}>
                      Explore Packages
                    </Link>
                    {limit ? (
                      <button onClick={() => setLimit(limit.length)}>
                        Show More
                      </button>
                    ) : (
                      <button onClick={() => setLimit(9)}>Show less</button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityList;
