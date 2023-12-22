import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Features = () => {
  return (
    <div>
      <Helmet>
        <title>Task Fusion | Features</title>
      </Helmet>

      <Navbar />

      <Footer />
    </div>
  );
};

export default Features;
