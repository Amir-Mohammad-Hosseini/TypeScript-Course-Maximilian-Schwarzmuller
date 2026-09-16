import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

type Goal = {
  id: string;
  title: string;
  description: string;
};

const App = () => {
  const [goals, setGoals] = useState<Goal[]>([
  ]);

  const handleDeleteGoal = (goalId : string) => {
    setGoals((prevGoals) => {
      const unRemovedgoals = prevGoals.filter((goal) => goal.id !== goalId)
      return [...unRemovedgoals]
    })
  }

  const handleAddGoal = (title : string , description : string) => {
    setGoals((prevGoals) => [...prevGoals , {id : `g${goals.length + 1}` , title , description}])
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
      <NewGoal onAddGoal={handleAddGoal} />
    </main>
  );
};

export default App;
