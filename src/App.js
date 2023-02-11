import React from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import DeleteButton from "./Components/DeleteButton";
import imgtest from "./assets/index.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: "Estudiar" },
        { id: 2, text: "Practicar" },
        { id: 3, text: "Descansar" },
      ],
      newTodo: "",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section className="showcase">
            <img src={imgtest} alt="testimg"></img>
            <h1 className="title">TODO APP</h1>
          </section>
          <form className="formStyle" onSubmit={this.handleSubmit}>
            <input
              className="inputStyle"
              type="text"
              placeholder="Ingrese una nueva tarea"
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
            <button type="submit">Add TODO</button>
          </form>
          <ul>
            {this.state.todos.map((todo) => {
              return (
                <div className="list">
                  <TodoItem key={todo.id} text={todo.text} />
                  <DeleteButton onDelete={this.handleDelete} todoId={todo.id} />
                </div>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((p) => ({
      todos: [...p.todos, { id: Date.now(), text: p.newTodo }],
      newTodo: "",
    }));
  };

  handleDelete = (todoId) => {
    this.setState((preventDefault) => ({
      todos: preventDefault.todos.filter((todo) => todo.id !== todoId),
    }));
  };
}

export default App;
