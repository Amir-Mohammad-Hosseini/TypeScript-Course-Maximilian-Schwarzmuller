import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";

const App = () => {
  const [goals, setGoals] = useState([
    { id: "g1", title: "Learn TS", description: "Learn TS from the ground up" },
    { id: "g2", title: "Practice TS", description: "Practice working with TS" },
  ]);

  const handleDeleteGoal = (goalId : string) => {
    setGoals((prevGoals) => {
      const unRemovedgoals = prevGoals.filter((goal) => goal.id !== goalId)
      return [...unRemovedgoals]
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
};

export default App;
