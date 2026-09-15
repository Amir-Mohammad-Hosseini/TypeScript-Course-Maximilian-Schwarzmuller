import type { SubmitEventHandler } from "react";

const NewGoal = () => {

    const handleSubmitNewGoal : SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        console.log(event.target)
    }
  return (
    <form onSubmit={handleSubmitNewGoal}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Your goal</label>
        <input type="text" id="summary" />
      </p>
      <p>
        <button type="submit">Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
