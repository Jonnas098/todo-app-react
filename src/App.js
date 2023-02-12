import React from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import DeleteButton from "./Components/DeleteButton";
import imgtest from "./assets/index.jpg";
import Footer from "./Components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
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
          <div className="container">
          <form className="formStyle" onSubmit={this.handleSubmit}>
            <input
              className="inputStyle"
              type="text"
              placeholder="Enter a new task"
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
            <button className="circle" type="submit">Add Task</button>
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
          </div>
        </header>
        <Footer/>
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
