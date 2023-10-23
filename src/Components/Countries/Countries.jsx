import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountry] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const handleVisitedCountry = (country) => {
    console.log(country.name.common);
    setVisitedCountry([...visitedCountry, country]);
  };
  return (
    <div>
      {visitedCountry.map((country) => (
        <p key={country.name.common}>{country.name.common}</p>
      ))}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            countryData={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
}
