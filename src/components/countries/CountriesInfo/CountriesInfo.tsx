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
    <div className="border border-black">
      {georgiaData && (
        <div onClick={navigateToCountry}>
          <button>
            <Link to="/">Back</Link>
          </button>
          <div className="flex gap-8 justify-center">
            <img src={georgiaData.flags.png} />
            <div className="block">
              <h3>{georgiaData.name.common}</h3>
              <h3 className="flex gap-1">
                Native Name:
                <div className="text-[#111517]">{georgiaData.name.common}</div>
              </h3>
              <p className="flex gap-1 font-headerFont">
                Population:
                <div className="text-[#111517]">{georgiaData.population}</div>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeorgiaInfo;
