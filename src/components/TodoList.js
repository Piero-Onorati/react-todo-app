import { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import check from '../img/icon-check.svg';
import cross from '../img/icon-cross.svg';
import TodoNav from './TodoNav';


const TodoList = () => {
    const { isLightTheme, light , dark } = useContext(ThemeContext);
    const theme  = isLightTheme ? light : dark;

    const { todos, removeTodo, completeTodo, filterTodos} = useContext(TodoContext);


    const handleDragEnd = (result) =>{
        console.log(result);
        if (!result.destination) return;
        
        const [reorderedItem] = filterTodos.splice(result.source.index, 1);
        filterTodos.splice(result.destination.index, 0, reorderedItem);
    };

    console.log(todos);
    return todos.length ? ( 
        <main style={{ background:theme.bg}}>
            <div className="main-container">
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="tasks">
                    {(provided)=>(
                        <ul className="all-items"
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {filterTodos.map((todo,index) => {

                            return (
                                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                                    {(provided) => (    
                                        <li className={`item ${todo.completed ? "completed":''}` }
                                        key={todo.id}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        {...provided.dragHandleProps.style}
                                        ref={provided.innerRef}
                                        style={{ background:theme.divbg, color:theme.colortext, borderColor:theme.border,...provided.draggableProps.style }}>
                                            <span >{ todo.name }</span>
                                            <span className="item-buttons">
                                                <button className="check-item" onClick={()=> completeTodo(todo.id)}><img src={check} alt="check icon" /></button>
                                                <button className="remove-item" onClick={()=> removeTodo(todo.id)}><img src={cross} alt="cross icon"/></button>
                                            </span>
                                        </li>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                        <TodoNav/>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <p style={{ color: theme.navcolortext}}>Drag and drop to reorder list </p>
            </div>
        </main>
    ) : (
        <main>
         <div className="main-container">
                <ul className="all-items">
                    <li className="item" style={{ background:theme.divbg, color:theme.colortext, borderColor:theme.border}}>
                        <span >There are no to-do left. Hello free time :)</span>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default TodoList;