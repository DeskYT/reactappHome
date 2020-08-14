import React, { Component } from 'react';
import ListItem from "./ListItem";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           users: [
                {
                    id: 1,
                    fName: 'Sam',
                    lName: 'Brown',
                },
                {
                    id: 2,
                    fName: 'Jack',
                    lName: 'Simpson',
                },
                {
                    id: 3,
                    fName: 'Robert',
                    lName: 'Sparrow',
                },
                {
                    id: 4,
                    fName: 'John',
                    lName: 'Cameron',
                },
                {
                    id: 5,
                    fName: 'Bill',
                    lName: 'Woods',
                },
            ],
        }
    }
    userMap = user => {
        return <ListItem key={user.id} user={user}/>
    };
    render(){
        const {users} = this.state;
        return <ul>{users.map(this.userMap)}</ul>
    }
}

export default UserList;