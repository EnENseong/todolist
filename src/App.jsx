import './App.css'
import { useState,useRef } from 'react'
import Header from './comcpnents/Header'
import Editor from './comcpnents/Editor'
import List from './comcpnents/List'
const mockData=[
  { 
    id:2,
    isDone:false,
    content: "react 공부하기",
    date : new Date().getTime(),
  },
  { 
    id:1,
    isDone:false,
    content: "밥먹기",
    date : new Date().getTime(),
  },
  { 
    id:0,
    isDone:false,
    content: "자기",
    date : new Date().getTime(),
  },
]
function App() {
const [todos,setTodos] = useState(mockData);
const idRef = useRef(3);
const onCreate = (content)=>{
  const newTodo = {
    id : idRef.current++,
    isDone: false,
    content: content,
    date: new Date().getTime(),
  }
  setTodos([newTodo,...todos])
}
const onUpdate =(targetId)=>{
  setTodos(todos.map((todo)=>
    todo.id === targetId 
    ?{...todo, isDone: !todo.isDone}
    : todo
  ))
}
const onDlete =(targetId)=>{
  setTodos(todos.filter((todo)=>todo.id !== targetId))
}
  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List 
      todos={todos} 
      onUpdate={onUpdate}
      onDlete={onDlete}
      />
    </div>
  )
}

export default App
