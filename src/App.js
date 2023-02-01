import React from 'react'
import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/TodoItem';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, text: 'Estudiar'},
        {id: 2, text: 'Practicar'},
        {id: 3, text: 'Descansar'},
      ],
      newTodo: '',
  };
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO</h1>
          <ul>
            {this.state.todos.map((todo) => {
              return(
                <TodoItem key = {todo.id} text = {todo.text}  />
              );
            })}
          </ul>
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit = {this.handleSubmit}>
            <input
              type = "text"
              value = {this.state.newTodo}
              onChange = {this.handleChange}
              />
              <button type="submit">Add TODO</button>
          </form>
        </header>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value  });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState( prevState => ({
      todos: [],
      newTodo: '',
    }));
  }
  
}

export default App;
