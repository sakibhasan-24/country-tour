import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export default function Countries() {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div className="countries">
      {countries.map((country) => (
        <Country key={country.cca3} countryData={country}></Country>
      ))}
    </div>
  );
}
