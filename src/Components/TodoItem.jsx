import React from "react";
import '../App.css';

class TodoItem extends React.Component {
constructor(){
    super();
    this.state = {checked: false}
    this.handleToggleClick = this.handleToggleClick.bind(this)
}

handleToggleClick(){
    this.setState(prevState => ({
        checked: !prevState.checked
    }));
}

    render() {
        return(
            <div className="todoList">
                <input
                    onChange={this.handleToggleClick}
                    type={"checkbox"}>
                </input>
                {this.state.checked ? <li className="todoStyleChecked">{this.props.text}</li> : <li className="todoStyle"> {this.props.text} </li> }
            </div>
        );
    }

   
}

export default TodoItem;