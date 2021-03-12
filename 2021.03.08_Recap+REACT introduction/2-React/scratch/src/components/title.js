import React from "react"
import Par from "./par";

class Title extends React.Component {
    render() {
        return (
            <>
                <h2>{this.props.someproperties}</h2>
                <Par />
            </>);
    }
    
}

export default Title;


