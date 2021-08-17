import bgimageLight from  '../img/bg-desktop-light.jpg';
import bgimageDark from  '../img/bg-desktop-dark.jpg';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import NewTodoForm from './NewTodoForm'
import ThemeToggle from './ThemeToggle'

const HeaderApp = () => {
    const { isLightTheme }  = useContext(ThemeContext);
    return isLightTheme ? ( 
        <header style={{backgroundImage: `url(${bgimageLight})` }}>
            <div className="header-container">
                <div className="title">
                    <h1>TODO</h1>
                    <ThemeToggle/>
                </div>
                <NewTodoForm/>
            </div>
        </header>
        
    ) : (
        <header style={{backgroundImage: `url(${bgimageDark})` }}>
            <div className="header-container">
                <div className="title">
                    <h1>TODO</h1>
                    <ThemeToggle/>
                </div>
                <NewTodoForm/>
            </div>
        </header>

    );
}
 
export default HeaderApp;