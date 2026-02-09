import {TodoProvider} from "./context/TodoContext"
import {useEffect, useState} from "react"
import TodoForm from "./components/TodoForm.jsx"
import TodoItem from "./components/TodoItem.jsx"
function App() {
    //by default hum isme empty array pass krenge jesa humne todo project me dekha tha as render krte same issue na aye
    //isme todos me sari todos hongi 
    const [todos , setTodos] = useState([])

    //iss todo parameter me individual todo hogi naki sari todos voh hum dekhenge kese ayegi abhi individual todo nhi hai abhi sirf functionality define kr rhe ha kaha se value ayegi voh abhi dekhenge 
    const addTodo = (todo) => {
        //this is wrong as todos me joh purani vali agar hogi toh voh overwrite hojayegi aur voh display nhi hogi toh hume purani values ki copy banani padegi with help of spread operator
        //  setTodos(todo)

        //prev me purana array miljayega aur iss se new array banado aur iss array me purani aur new dono value daldo 
        //isme glti kya hain apko todo banana padega  ese nhi krenge 
        // setTodos((prev)=>[todo , ... prev])

        //id me hum voh denge joh barbar change hoga as id should be unique varna loop lagane me dikkat hogi isliye Date.now() ki har bari date alag hogi toh kaam hojayega aur ...todo bhi ek object ha toh usko spread krdiya and ...prev se toh purani array ki copy banjayegi aur todo ko direclty ese pass nhi krskte as voh humne context me ek object ki form me banaya hain 
        setTodos((prev)=>[{id: Date.now() , ...todo} , ...prev])
    }

    function updatedTodo(id , todo) {
         //idhar hume todos wali array me loop lagana padega to find that particular todo which u need to update and we also have id to find that todo 
         //curly braces hata diye varna return krna padta
         //idhar prev me purani array ajayegi todos wali then uspe loop lagaya with map forEach se bhi krskte hain and then prevTodo har ek value pe jayega uss list ki and hum kya kr rhe ha har ek todo ki id ko compare kr rhe ha humari id se joh humne pass ki agar match hoti ha toh new todo add krdo todo varna same rhene do prevTodo
         setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo ))
    }

    const deleteTodo = (id)=> { 
        //delete krte same generally filter use krte ha isme conditon joh satisfy nhi kr payenge voh to as it is rahenge lekin jiski id humare prevTodo ki id se match hogyi voh delete hojayega voh return nhi hoga 
        setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id !== id))
    }

     //isme hume apne todos me jana padega aur toggle krna padega apne checked ko true or false 
    const toggleComplete = (id)=> {
//kya kiya basically prev me old state leli jisme humari array ayegi todo wali uspe map lagaya aur joh todo ki id humari id se match hogi usme completed property ko sirf change krdiya aur baki sabko same rkhna tha toh spread operator ka use krliya jabh id match hogi but id jabh match nhi hogi then todo ko same rhene do toh prevTodo
        setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo , completed:!prevTodo.completed} : prevTodo))
    }

   
    useEffect(()=> {
        //sabse phele kya krna ha apko saari values lekar ani hain aap localstorage directly access krskte ho jabh tk aap react me ho jabh tk aap server site rendering ki baat nhi kr rhe kyuki agar sara kaam server pe hogya toh kabhi browser pe aya hi nhi toh localstorage kese kaam krega 
        //abhi me get kr rha ho kyuki mene set nhi kiya hain get krna phele zaruri hain 
        //this getItem will give u value of corresponding key u have gave but yeh sari ki sari value hoti hain string me but hume chaiye json toh hum ese use nhi krenge
        // localStorage.getItem("todos")
        //JSON.parse yeh apko direclty js deta hain isme apna yeh localStorage wala pass krdo  
         const todos = JSON.parse(localStorage.getItem("todos"))
         //abh values ko set kro agar usme kuch ho toh todos likhne ka matalb ki voh exist krta hain aur eventually yeh ek array ha toh length > 0 honi chaiye tabhi set krenge nah
         if(todos && todos.length > 0) {
            setTodos(todos)
         }
    } , [])

    // iss se yeh ha ki jabh load hua toh sare ke sare todos agye but jese hi yeh sari values load horhi hain me usko localstorage me add krvana chahta hun aur kab add krvana chahta hun jab todos me kuch change hoga tab add krenge localStorage me aur tum try kroge ki apne iss useEffect me dependency me todos daldoge but problem yeh ha ki usme agar kuch bhi change ayega toh voh dubara se usko get bhi krega so we use second useEffect separately we can use multiple useEffect

    useEffect(()=> {
        //isme hume key aur value dena padta hain aur joh naam keys ka tumne getItem me diya ha lete same vohi same setItem me ayega  aur JSON.stringify string me convert krdega aur humari todos humne pass krdi 
        localStorage.setItem("todos" , JSON.stringify(todos))
    } , [todos]) // Because of [], it runs only once → initial empty array save ho jata hai → refresh pe todos vanish. we need to add todos also so after refreshing all our todos stays there and not vanish 



  return (
    //Provider kya provide krega toh value bhi pass krni padegi value me hum voh sare property/attribute pass krte hain joh humne createContext me banaye hain 
    <TodoProvider value={{todos , addTodo , updatedTodo , deleteTodo , toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
 {/* // agar hum (todo)=> { } ese krte hain toh return keyword lagana padta hain but agar hum ese likhe (todo)=> () iska mtb auto return hota ha  */}
                        {todos.map((todo)=> (
//we can also use index but if id u have prefer that that is more suitable as compared to index 
                            <div key={todo.id}
                             className="w-full">
                                <TodoItem todo = {todo} />
                            </div>
                        ))}
                    </div>
                </div>
       </div>
    </TodoProvider>
  )
}

export default App
