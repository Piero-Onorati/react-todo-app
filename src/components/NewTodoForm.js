import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const NewTodoForm = () => {
    const { isLightTheme, light , dark } = useContext(ThemeContext);
    const theme  = isLightTheme ? light : dark;
    const { addNewTodo } = useContext(TodoContext);
    const [ name, setName] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addNewTodo(name);
        setName('');
        
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
                placeholder="Create a new to-do..." 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required 
                style={{
                    background: theme.divbg,
                    color: theme.colortext
                }}
            />
        </form>
    );
}
 
export default NewTodoForm;