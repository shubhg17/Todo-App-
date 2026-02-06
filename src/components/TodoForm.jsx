import React from "react"
import {useState} from "react"
import { useTodo } from "../context/TodoContext";
function TodoForm() {
    
//state for individual todo default koi todo chahta nhi isliye ""
const [todo , setTodo] = useState("")
const {addTodo} = useTodo()

//abh vala method hum bana rhe hain todos ke liye jisko humne spread kiya tha aur id me Date.now() diya uske liye declare krenge

const add = (e) => {
   e.preventDefault()
   //this means todo nhi hain 
   if(!todo) return
   //varna ese but yeh galat hain as humara todo ek object me ha jisse tum spread kr rhe ho toh voh values bhi deni padegi toh hume object se denge ese nhi todo me message ayega input box vala as type text hain yeh sare property humne de rkhi ha todos me todocontext.js mein vohi hai yeh hume ese dena padega varna voh sirf string lega but humne object ko spread kr rkha hain aur Date.now() App.jsx me  de diya isliye idhar dene ki zaruat nhi  hain toh joh baki cheeze humne nahi di sirf spread krdi thi voh yaha pass krni padegi as App.jsx me nhi hain aur naye syntax me todo: todo ko directly tum todo hi likhskte hon as key aur value dono same the isliye 
   addTodo({ todo , completed:false})
   //aur jabh tum add pe click kroge toh todo ayega aur uss field me bhi toh todo likha hoga toh usko bhi gayab krdo as voh todo wali state se hi toh value le rha hoga
   setTodo("")
}

    return (
      //form automatically submit ho jayega toh onSubmit lagayenge form pe 
        <form onSubmit = {add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value = {todo}
                onChange = {(e)=>setTodo(e.target.value)}
            />
            //add button pe hume koi functionality call krne ki zarurat nhi hain kyuki yeh type submit ha automatically submit hojayega 
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

