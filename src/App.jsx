import React, { Component } from 'react';
import Greeting from './components/Greeting';
import UserList from "./components/UserList";
import UserComment from "./components/UserComment";
import Counter from "./components/Counter";
import ListItem from "./components/UserList/ListItem";

/*
function App() {
  return <Hello name={'React!'} />;
}
*/

/*class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <UserList />;
    }
}*/
const App = () => {
    const userComment = {fName: "John", lName: "Smith", avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", comment: "I`m first)"
    }
    return(
        <>
            <UserComment userComment={userComment}/>
            <Counter />
        </>
        )

}


/*const App = () => {
    return <> <UserList /></>;
}*/

export default App;
