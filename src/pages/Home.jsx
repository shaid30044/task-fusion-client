import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Banner from "../Shared/Banner";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Task Fusion</title>
      </Helmet>

      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
