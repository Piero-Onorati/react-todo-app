import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoNav = () => {
    const { todos, setFilter} = useContext(TodoContext);
    const setFilterHandler = (e) =>{
        e.preventDefault();
        // console.log(e.target.value);
        setFilter(e.target.value);
    }
    const { isLightTheme, light , dark }= useContext(ThemeContext);
    const theme  = isLightTheme ? light : dark;
    return ( 
        <li className="navbar" style={{ background:theme.divbg, color: theme.navcolortext}}>
            <span className="navbar-item">There are {todos.length} items left</span>
            <form onChange={setFilterHandler}>
                <label htmlFor="input1">All</label>
                <input type="radio" value="all" name='input' id="input1" />

                <label htmlFor="input2">Active</label>
                <input type="radio" value="active" name='input' id="input2"/>
                
                <label htmlFor="input3">Completed</label>
                <input type="radio" value="completed" name='input' id="input3"/>
            </form>
            <span className="navbar-item">Welcome back, User !</span>
        </li>
    );
}
 
export default TodoNav;