import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";
import TaskList from "../Components/TaskDashboard/TaskList";

function TaskDashboard() {
  return (
    <div>
      <Helmet>
        <title>Task Fusion | Task Dashboard</title>
      </Helmet>

      <Navbar />
      <TaskList />
      <Footer />
    </div>
  );
}

export default TaskDashboard;
