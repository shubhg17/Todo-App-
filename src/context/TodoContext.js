import {createContext , useContext} from "react"
//context api bade projects ke liye nhi bana hain 
const TodoContext = createContext({
  //hum  parameters yaha paas krte hain aur unme functionality App.jsx me dalte hain jese humne pichli video me dekha same 
  
  // Here todos property ha aur baki addTodo updatedTodo , deleteTodo , toggleComplete yeh sare method/function hain  method ki functionality toh me app.jsx me likhunga aur joh values mujhe todo se hi leni hain component koi bhi ho me values yahi se lunga 
    todos: [
       {
         id:1,
         todo: "Todo Msg" ,
         completed: false
       }
    ],
    //functionality me definiton nhi likhte sirf unke naam likhte hain  idhar mene ek property dedi todo ki jabh todo aye toh yeh function kuch kaam krega kya krega voh app.jsx me hum dekhenge baad main 
    addTodo : (todo)=> {} ,
    //isme hum apna pura todo paas krenge aur uski id ki pta ho kisko edit kr rhe ho isliye 
    updatedTodo : (id , todo)=> {} ,
    //as jabh delete kroge todo ko toh sirf id ki need hogi 
    deleteTodo : (id) => {} ,
    //isme bhi id chaiye hogi baki kaam css ka hain 
    toggleComplete: (id) => {}
})
export {TodoContext}

export function useTodo() {
     return useContext(TodoContext)
}

const TodoProvider = TodoContext.Provider
export {TodoProvider}