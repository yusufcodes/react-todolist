import React, { Component, useRef } from 'react';

// Set up context here

/* COMPONENT: MyProvider */
const MyContext = React.createContext();

// MyProvider: class controlling context api for the app
class MyProvider extends Component {
  state = {
    items: [
      {id: 1, text: 'Item One!'},
      {id: 2, text: 'Item Two!'}
    ]
  }

  render() {
    return (
      <MyContext.Provider value={
        {
          state: this.state,
          setCurrentItem: (item) => {
            const currentItems = [...this.state.items];

            currentItems.push(
              {id: 5, text: item}
            );

            const newItems = currentItems;

            this.setState({
              items: newItems
            });
          }
        }
      }>
      {this.props.children}
      </MyContext.Provider>
    )
  } // End of render()
} // End of MyProvider class

// List of To Dos - needs access to Context API
/* COMPONENT: ToDoList */
class ToDoList extends Component {
  InputElement = () => {
    const currentItemRef = useRef(null);

    return (
      <MyContext.Consumer>
        {
        (context) => { return (
          <React.Fragment>
            <input ref={currentItemRef} type="text" placeholder="Enter to do..."></input>
            <input type="submit" onClick={ () => {context.setCurrentItem(currentItemRef.current.value)}}></input>
          </React.Fragment>
        )}
        }
      </MyContext.Consumer>
    )
  }

  render() {
    return (
      <div>
        <this.InputElement></this.InputElement>
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              {
                context.state.items.map((current, index) => {
                return <li key={index}>{current.text}</li>
                })
              }
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

/* COMPONENT: App (main) */
class App extends Component {
  render()
  {
    return (
      <div className="App">
        <MyProvider>
          <ToDoList />
        </MyProvider>
      </div>
    );
  }
  
}

export default App;
