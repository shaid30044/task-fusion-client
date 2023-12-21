import { Helmet } from "react-helmet-async";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Task Fusion | Dashboard</title>
      </Helmet>

      <Navbar />
    </div>
  );
};

export default Dashboard;
