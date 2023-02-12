import React from "react";
import "../App.css";

class DeleteButton extends React.Component {
    handleDelete = () => {
        this.props.onDelete(this.props.todoId);
        console.log('Tarea Borrada')
    }

    render(){
        return <button className="main-button" onClick={this.handleDelete}>Delete</button>;
    }
}

export default DeleteButton;