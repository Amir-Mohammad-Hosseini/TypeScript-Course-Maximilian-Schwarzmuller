import { useRef, type SubmitEventHandler } from "react";

interface NewGoalProps {
  onAddGoal: (title : string , description : string) => void;
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmitNewGoal: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    // validation ...

    onAddGoal(enteredGoal, enteredSummary);

    goalRef.current!.value = "";
    summaryRef.current!.value = "";
  };
  return (
    <form onSubmit={handleSubmitNewGoal}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Your goal</label>
        <input type="text" id="summary" ref={summaryRef} />
      </p>
      <p>
        <button type="submit">Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
