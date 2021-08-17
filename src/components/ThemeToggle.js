import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import sun from '../img/icon-sun.svg';
import moon from '../img/icon-moon.svg'

const ThemeToggle = () => {

    const { isLightTheme, toggleTheme}  = useContext(ThemeContext);
    console.log(toggleTheme);
    return isLightTheme ? ( 
        <button onClick={toggleTheme}>
            <img src={sun} alt="" />
        </button>
    ) :(
        <button onClick={toggleTheme}>
        <img src={moon} alt="" />
        </button> 
    );
}
 
export default ThemeToggle;