import React from "react"
import {useState} from "react"
// because "./" means same folder (components), while context is one level up, therefore "../".
import {useTodo} from "../context/TodoContext.js"

function TodoItem({ todo }) {

 //by default toh editable  hoga tabhi toh voh icon show hota hain edit krne ka 
 const [isTodoEditable , setIsTodoEditable] = useState(true);
 const [todoMsg , setTodoMsg] = useState(todo.todo)

    //sabse phela kaam ha context lekar ana as ussi se toh functionality ayegi 
const {updatedTodo , deleteTodo , toggleComplete} = useTodo()

  const  editTodo = ()=> {
    //see we are not changing id as id we only need such that to get particular todo which u need to update thats it and then for todo u need to spread as it is an object and just change ur todo message as on update we only need to change message thats it 
     updatedTodo(todo.id , {...todo , todo:todoMsg})
     //abh todo editable hogya hain toh uski state change krdo
     setIsTodoEditable(false);
  }

  const toggleCompleted= () => {
    //yeh toggleCompleted mere context se arha hain aur toggleComplete mene method banaya hain 
     toggleComplete(todo.id)
  }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
