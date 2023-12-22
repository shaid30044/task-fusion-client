import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Helmet } from "react-helmet-async";
import ToDoList from "../Components/TaskDashboard/ToDoList";

function TaskDashboard() {
  return (
    <div>
      <Helmet>
        <title>Task Fusion | Task Dashboard</title>
      </Helmet>

      <Navbar />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default TaskDashboard;
