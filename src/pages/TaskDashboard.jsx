import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";

function TaskDashboard() {
  return (
    <div>
      <Helmet>
        <title>Task Fusion | Task Dashboard</title>
      </Helmet>

      <Navbar />

      <Footer />
    </div>
  );
}

export default TaskDashboard;
