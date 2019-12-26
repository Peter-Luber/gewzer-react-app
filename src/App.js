import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  state = {
    todos: [],
    inputText: ""
  }

  handleChange = (event) => {
    this.setState({inputText: event.target.value})
  }

  handleSubmit = (event) => {
    this.setState({
      todos: [...this.state.todos, this.state.inputText],
      inputText: ""
    
    })
    event.preventDefault()
  }

  listWeed = () => {
    return (
      <ul>
        
      </ul>
    )
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.text = 'var cursorArray = ["url(/cur/fresa.cur), auto", "url(/cur/sword.cur), auto","url(/cursors/bug.cur), auto"];var rand = cursorArray[~~(Math.random() * cursorArray.length | 0)];document.getElementById(App).css("cursor", rand);'
    document.body.appendChild(script);
  }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
            gewzer
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="bioBox">
          juan escobedo aka 'gewzer'
          <br></br> 
          @gewzer38 on <a href="https://www.instagram.com/gewzer38">instagram</a>
          <br></br>
          @juander on <a href="http://soundcloud.com/juander">soundcloud</a>
          <br></br>
          los angeles / fresno
          <br></br>
          3800
        </div>
        <form id="form1" onSubmit={this.handleSubmit}>
          <label>
            to do:   
            <input 
              type="text" 
              onChange={this.handleChange}
              value={this.state.inputText}
            /> 
          </label>
          
        </form>
        <ul>
         {this.state.todos.map(function(todo) {
           return <li>{todo}</li>
         })}
        </ul>
      </div>
    );
  }
}

export default App;
