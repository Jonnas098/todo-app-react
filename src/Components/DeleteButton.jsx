import React from "react";

class DeleteButton extends React.Component {
    handleDelete = () => {
        this.props.onDelete(this.props.todoId);
        console.log('Tarea Borrada')
    }

    render(){
        return <button onClick={this.handleDelete}>Delete</button>;
    }
}

export default DeleteButton;