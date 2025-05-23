import { useParams } from "react-router-dom";
import PackageCard from "./PackageCard";
import himanchal from "../Data/himancha.json"

const CityDetail = ({data})=>{
    const { stateName, cityName  } = useParams();
    const cities = data[stateName] || [];
    const city = cities.find(c => c.name  === cityName );
    {console.log(himanchal)}
    if (!city) {
      return <div>City not found</div>;
    }
    
    return (
      <div className="city-detail">
       
        <h2>{city.name}</h2>
        <p>City ID: {city.id}</p>
        {
  himanchal.data.packages.map((pkg)=>{
return <PackageCard key={pkg.id} pkg={pkg}/>
  })
}
      </div>
    );
}

export default CityDetail;