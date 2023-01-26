import React from 'react';
import { useSelector } from 'react-redux';
import Todo from "../Todo/Todo";

const TodoList = () => {

    const todo =useSelector(state=>state.todo)
    const filters =useSelector(state=>state.filter)
    const filterByStatus=(todo)=>{
      const{status}=filters
      switch (status) {
        case 'Complete':
         return todo.completed
        case 'Incomplete':
         return !todo.completed
      
        default:
          return true
      }
    }
    const filterByColor=(todo)=>{
      const{colors}=filters
      if (colors.length>0) {
       return colors.includes(todo?.color)
      } else {
        return true
      }
    }
    return (
        <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
           
          {todo.filter(filterByStatus)
          .filter( filterByColor)
          .map(singleTodo=><Todo singleTodo={singleTodo} key={singleTodo.id}/>)} 
           
        </div>
    );
};

export default TodoList;