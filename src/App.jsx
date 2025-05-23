import { Routes, Route,} from 'react-router-dom';
import Home from "./components/Home";
import CityList from "./components/CityList";
import data from "./Data/extended_location_data.json";
import "bootstrap/dist/css/bootstrap.min.css";

import CityDetail from "./components/CityDetails";
import Layout from './components/Layout';

export default function App() {
  return (
    <>
      
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
              path="/state/:stateName"
              element={<CityList data={data} />}
            />
            <Route
              path="/state/:stateName/:cityName"
              element={<CityDetail data={data} />}
            />
      </Routes>
      </Layout>
    </>
  );
}
