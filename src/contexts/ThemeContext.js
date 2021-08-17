import { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light:{ 
            bg:'hsl(236, 33%, 92%)',
            colortext:'hsl(235, 19%, 35%)',
            navcolortext:'hsl(236, 9%, 61%)' ,
            divbg:'hsl(0, 0%, 98%)',
            border:'hsl(233, 11%, 84%)',
        },
        dark:{
            bg:'hsl(235, 21%, 11%)',
            colortext:'hsl(234, 39%, 85%)',
            navcolortext: 'hsl(233, 14%, 35%)',
            divbg:'hsl(235, 24%, 19%)',
            border:'hsl(233, 14%, 35%)',
        }
    }

    toggleTheme = () =>{
        this.setState({ isLightTheme: !this.state.isLightTheme})
    };

    render() { 
        return ( 
            <ThemeContext.Provider value ={{...this.state, toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;
