type Goal = {
  id: string;
  title: string;
  description: string;
};

interface CourseGoalsProps {
  goals: Goal[];
}

const CourseGoals = ({ goals }: CourseGoalsProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>
            <button>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoals;
