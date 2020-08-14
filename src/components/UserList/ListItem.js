import React, { Component } from 'react';
import './UserList.css';
/*const ListItem = props => {
    const{
        user: {id, fName, lName}} = props;
    const styles = this.isSelected ? {bgColor: 'orange'}: {bgColor: 'aqua'};
    this.isSelected = false;
    function toggleSelect()
    {
        this.isSelected = !this.isSelected;
    }
    return(
        <>
            <li style={styles} className="userItem" onClick={toggleSelect}>
                UserID: "{id}"; UserFullName: "{fName} {lName}";
            </li>
        </>
    );
};*/

class ListItem extends Component {
    constructor(props) {
        super(props);
        const{
            user: {id, fName, lName}} = props;
        this.state = {
            id: id,
            fName: fName,
            lName: lName,
            isSelected: true
        }
    }
    toggleSelect = () => {
        this.setState({isSelected: !this.state.isSelected})
    }
    render() {
        const styles = this.isSelected ? {bgColor: 'rgb(0,0,255)'}: {bgColor: 'aqua'};
        return(
                <li style={styles} className="userItem" onClick={this.toggleSelect}>
                    UserID: "{this.state.id}"; UserFullName: "{this.state.fName} {this.state.lName}";
                </li>
        )
    }
}

export default ListItem;