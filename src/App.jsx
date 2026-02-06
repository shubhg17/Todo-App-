import {TodoProvider} from "./context/TodoContext"

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
         //idhar prev me purai array ajayegi todos wali then uspe loop lagaya with map forEach se bhi krskte hain and then prevTodo har ek value pe jayega uss list ki and hum kya kr rhe ha har ek todo ki id ko compare kr rhe ha humari id se joh humne pass ki agar match hoti ha toh new todo add krdo todo varna same rhene do prevTodo
         setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo ))
    }

    const deleteTodo = (id)=> { 
        //delete krte same generally filter use krte ha isme conditon joh satisfy nhi kr payenge voh to as it is rahenge lekin jiski id humare prevTodo ki id se match hogyi voh delete hojayega 
        setTodos((prev)=>prev.filter((prevTodo)=> prevTodo.id !== id))
    }

  return (
    //Provider kya provide krega toh value bhi pass krni padegi value me hum voh sare property/attribute pass krte hain joh humne createContext me banaye hain 
    <TodoProvider value={{todos , addTodo , updatedTodo , deleteTodo , toggleComplete , Tod}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
       </div>
    </TodoProvider>
  )
}

export default App
