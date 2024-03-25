import { useEffect, useState } from "react";

const MainCountries = () => {
  const [countries, setCountries] = useState<any>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 justify-center my-12">
      {countries.length > 0 ? (
                <div className="xl:grid xl:grid-cols-4 xl:gap-44 grid-cols-1 grid gap-10">
                {countries.map((country: any, index: number) => (
                  <div className="bg-white shadow-xl w-fit h-[320px] m-auto" key={index}>
                    <div>
                      <img className="w-[267px] h-[160px] rounded-md" src={country.flags.png}/>
                    </div>
                    <div className="px-6 grid gap-1 text-[#111517] font-light text-sm font-headerFont">
                      <h3 className="text-[#111517] font-extrabold py-4 text-[18px]">{country.name.common}</h3>
                      <h6>population: {country.population}</h6>
                      <h6>region: {country.region}</h6>
                      <h6>capital: {country.capital}</h6>
                    </div>
                  </div>
                ))}
              </div>
      ) : (
        <img className="m-auto" src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952uzn6m25jbdpn3l6w19qf6lvlyqktm842lpscdv96&ep=v1_gifs_search&rid=200w.gif&ct=g"/>
      ) }
    </div>
  );
};

export default MainCountries;