import HeaderApp from './components/HeaderApp'
import TodoList from './components/TodoList'
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext';


function App() {
  return (
   
    <ThemeContextProvider>
        <div className="App">
          <TodoContextProvider>
            <HeaderApp/>
            <TodoList/>
          </TodoContextProvider>
        </div>
    </ThemeContextProvider>
    
  );
}

export default App;
