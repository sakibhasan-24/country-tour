import "./Country.css";

export default function Country({ countryData }) {
  console.log(countryData);
  return (
    <div className="country">
      <div className="image-country">
        <img src={countryData.flags.png} alt="" />
      </div>
      <div className="country-info">
        <h1>{countryData.name.common}</h1>
        <h3>{countryData.capital}</h3>
        <h2>Continents:{countryData.continents}</h2>
        <div className="border-country">
          <p>{countryData.borders ? countryData.borders + " " : "not found"}</p>
        </div>
        <button className="visited-country-btn">Visited Country</button>
      </div>
    </div>
  );
}
/* 
<div  className="country">
      <div className="image-country">
        <img src={countryData.flags.svg} alt="" />
      </div>
      <div className="country-info">
        <h1>{countryData.name.common}</h1>
        <h3>{countryData.capital}</h3>
        <h2>Continents:{countryData.continents}</h2>
        <div className="border-country">
          <p>{countryData.borders ? countryData.borders + " " : "not found"}</p>
        </div>
      </div>
    </div>
*/
