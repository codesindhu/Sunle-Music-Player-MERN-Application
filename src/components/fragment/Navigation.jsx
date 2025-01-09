import React, { useContext, useState } from "react";
import '../assets/scss/Navigation.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DropDownLanguageList from "./DropDownLanguageList";
import SearchBar from "./SearchBar";
import Brand from "./Brand";
import { Button } from "@material-ui/core";
import { ThemeContext } from "../../api/Theme";
import { Link } from "react-router-dom";
import AddMusic from "./AddMusic";

function Navigation() {

    const [isLanguageListOpen, setLangList] = useState(false);

    function handleOpenLanguageList() {
        setLangList(!isLanguageListOpen);
    }

    const useStyle = useContext(ThemeContext);
    
    return (
        <nav style={useStyle.component}>
            <Brand/>
            <div className={"navigation"}>
               {/* <NavigationButton href={"/home"} name={"Home"}/>*/}
               {/* <NavigationButton href={"/home/about"} name={"About"}/>*/}
                {/*<NavigationButton href={"/home/add"} name={"Add"}/>*/}
            </div>
            <SearchBar/>
            <div className={"language"} onClick={handleOpenLanguageList}>
                <Button className={"Dropdown-btn"}
                        endIcon={isLanguageListOpen ? <ExpandMoreIcon/> : <ExpandLessIcon/>}>
                    <div className="wrapper">
                        <p>Music Languages</p>
                    </div>
                </Button>
                {
                    isLanguageListOpen
                    &&
                    <DropDownLanguageList/>
                }
            </div>
        </nav>
    );
}

export default Navigation;
