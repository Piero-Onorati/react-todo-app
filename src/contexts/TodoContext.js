import { useEffect } from "react";
import { createContext, useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    
    const [ todos, setTodos ] = useState([
        { name:'Jog around the park 3x', completed: false, id: 1 },
        { name:'10 minutes meditation', completed: false, id: 2 },
        { name:'Read for 1 hour', completed: false, id: 3 },
        { name:'Pick up groceries', completed: false, id: 4} ,
        { name:'Complete Todo App', completed: false, id: 5} 
    ]);

    const [filter, setFilter] = useState('all');
    const [filterTodos, setFilterTodo] = useState([]);

    const applyFilter = () =>{
        switch (filter) {
            case 'completed':
                setFilterTodo(todos.filter(todo=> todo.completed === true))
                break;
            case 'active':
                setFilterTodo(todos.filter(todo=> todo.completed === false))
                break;
        
            default: setFilterTodo(todos);
                break;
        }
    }

    useEffect(()=>{
        applyFilter()},[todos, filter]
    );

    const addNewTodo = (name) =>{
        setTodos([...todos, { name , completed: false,  id: uuidv1()}]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const completeTodo = (id) => {
        setTodos(todos.map((todo)=>{
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}   
            }
            return todo;
        }))
    };

    return ( 
        <TodoContext.Provider value={{ todos , addNewTodo, removeTodo, completeTodo, setFilter, filterTodos}}>
            {props.children}
        </TodoContext.Provider>
     );
}
 
export default TodoContextProvider;
