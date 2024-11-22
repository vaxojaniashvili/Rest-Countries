import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainCountries: any = ({ searchQuery }: any) => {
  const [countries, setCountries] = useState<any>([]);
  const [gifSrc, setGifSrc] = useState(
    "https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952uzn6m25jbdpn3l6w19qf6lvlyqktm842lpscdv96&ep=v1_gifs_search&rid=200w.gif&ct=g"
  );

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
    const timer = setTimeout(() => {
      setGifSrc("");
    }, 2300);
    return () => clearTimeout(timer);
  }, []);
  const filtredCountries = countries.filter((country: any) => {
    return country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex flex-wrap gap-3 justify-center my-12">
      {filtredCountries.length > 0 ? (
        <div className="xl:grid xl:grid-cols-4 xl:gap-44 grid-cols-1 grid gap-10">
          {filtredCountries.map((country: any) => (
            <Link to={`/country/${country.name.common}`} state={country}>
              <div
                className="bg-white shadow-xl w-fit h-[320px] m-auto"
                key={country.cca3}
              >
                <div>
                  <img
                    className="w-[267px] h-[160px] rounded-md"
                    src={country.flags.png}
                    alt={country.name.common}
                  />
                </div>
                <div className="px-6 grid gap-1 text-[#111517] font-light text-sm font-headerFont">
                  <h3 className="text-[#111517] font-extrabold py-4 text-[18px]">
                    {country.name.common}
                  </h3>
                  <h6>Population: {country.population.toLocaleString()}</h6>
                  <h6>Region: {country.region}</h6>
                  <h6>Capital: {country.capital?.[0] || "N/A"}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <img className="m-auto" src={gifSrc} />
      )}
    </div>
  );
};

export default MainCountries;
