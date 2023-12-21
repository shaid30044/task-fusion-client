import { Helmet } from "react-helmet-async";
import Banner from "../Shared/Banner";
import Navbar from "../Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Fusion</title>
      </Helmet>

      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
