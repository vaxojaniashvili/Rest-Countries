import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const GeorgiaInfo: React.FC = () => {
  const [georgiaData, setGeorgiaData] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/name/georgia");
        const [georgia] = await res.json();
        setGeorgiaData(georgia);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  const navigateToCountry = () => {
    if (georgiaData) {
      navigate(`/country/${georgiaData.name.common}`, {
        state: georgiaData,
      });
    }
  };

  return (
    <div>
      {georgiaData && (
        <div onClick={navigateToCountry}>
          <button>
            <Link to="/">Back</Link>
          </button>
          <h3>{georgiaData.name.common}</h3>
          <img
            src={georgiaData.flags.png}
            alt={georgiaData.name.common}
            style={{ width: "50px", height: "auto" }}
          />
          <p>Population: {georgiaData.population}</p>
          <p>Map: {georgiaData.maps.googleMaps}</p>
        </div>
      )}
    </div>
  );
};

export default GeorgiaInfo;
