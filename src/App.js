import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Todo({todo,index,completeTodo,deleteTodo}){    //we use props for this i we use that we have props.todo.text like that we want to access

      return <div style={{textDecoration:todo.isCompleted ? 'line-through':''}} className="todo">{todo.text}
      <div>
<button onClick={()=>completeTodo(index)}>Complete</button>
<button onClick={()=>deleteTodo(index)}>x</button>
</div>
      </div>;
}
function Name({name}){
  return <div className="todo">{name}</div>
}
function TodoForm({addTodo}){
 const [value, setValue]=useState('');
 const handleSubmit = e=>{
   e.preventDefault();
   if(!value) return;
   addTodo(value);
   setValue('');
 }
 return(
   <form onSubmit={handleSubmit}>
     <input type="text" placeholder="Input Field" className="input" value={value} onChange={e=>setValue(e.target.value)}/>
   </form>
 )
}
function NameForm({addName}){
  const [valuee, setValuee]=useState('');
  const handleSubmit = e=>{
    e.preventDefault();
    if(!valuee) return;
    addName(valuee);
    setValuee('');
    console.log("hiii");
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Input Field" className="input" value={valuee} onChange={e=>setValuee(e.target.value)}/>
    </form>
  )
 }
function App() {
  const [todos, setTodos]=useState([
    {
      text:"checking is it working",
      isCompleted:false
    },{
      text:"checking is it not working",
      isCompleted:false
    }
  ]);
  const [name,setName]=useState('Checking');
const addTodo=text=>{
  const newTodos=[...todos,{text}];
  setTodos(newTodos);
};
const addName=text=>{
  const newTodos=name+", "+text;
  setName(newTodos);
};
const completeTodo=index=>{
  const newTodos=[...todos];
  if(newTodos[index].isCompleted==true){
    //console.log("test");
    newTodos[index].isCompleted=false;
  }else{
    newTodos[index].isCompleted=true;
    //console.log("hiii");
  }
  setTodos(newTodos);
}
const deleteTodo=index=>{
  const newTodos=[...todos];
  newTodos.splice(index,1);
  setTodos(newTodos);
}
  return (
    <div className="app">
      <div className="inline">
      <div className="todo-list">
        {todos.map((todo,index)=>(
<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <TodoForm addTodo={addTodo}/>
</div>
<center>
<div className="name-list">
<Name todo={name} />

        {name}
        <NameForm addName={addName}/>
</div></center>
</div>
    </div>
  );
}

export default App;
