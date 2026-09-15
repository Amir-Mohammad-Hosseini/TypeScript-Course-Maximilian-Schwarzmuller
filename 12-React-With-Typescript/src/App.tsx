import Header from "./components/Header"
import goalsImg from "./assets/goals.jpg"
import CourseGoals from "./components/CourseGoals"


const App = () => {
  return (
    <main>
      <Header image={{src : goalsImg , alt : "A list of goals"}}>
        <h1>Your Course Goals</h1>
      </Header>
      <CourseGoals goals={[{id : "g1" , title : "Learn TS" , description : "Learn TS from the ground up"} , 
        {id : "g2" , title : "Practice TS" , description : "Practice working with TS"}
      ]} />
    </main>
  )
}

export default App
