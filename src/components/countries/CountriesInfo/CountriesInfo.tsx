import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryInfo: React.FC = () => {
  const { name } = useParams(); // URL პარამეტრი
  const [countryData, setCountryData] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const [country] = await res.json();
        setCountryData(country);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [name]); // დინამიური პარამეტრი

  const navigateBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={navigateBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mb-6"
        >
          Back
        </button>
        {countryData ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={countryData.flags.png}
              alt={countryData.name.common}
              className="w-full h-64 object-contain"
            />
            <div className="p-6">
              <h1 className="text-3xl font-bold text-blue-700 mb-4">
                {countryData.name.common}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Native Name:</h3>
                  <p className="text-gray-700">
                    {Object.values(countryData.name.nativeName || {})
                      .map((n: any) => n.common)
                      .join(", ")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Population:</h3>
                  <p className="text-gray-700">
                    {countryData.population.toLocaleString()}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Region:</h3>
                  <p className="text-gray-700">{countryData.region}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Capital:</h3>
                  <p className="text-gray-700">
                    {countryData.capital
                      ? countryData.capital.join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading country data...</p>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
