import React, { Component } from 'react';
import './UserComment.css';

class UserComment extends Component {
    constructor(props) {
        super(props);
        const{
            userComment: {fName, lName, avatar, comment}} = props;
        this.state = {
            fName: fName,
            lName: lName,
            avatar: avatar,
            comment: comment,
            commentDate: this._formatDate(new Date()),
        }
    }
    _formatDate(date) {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear();

        return dd + '.' + mm + '.' + yy;
    }
    render() {
        const styles = this.isSelected ? {bgColor: 'rgb(0,0,255)'}: {bgColor: 'aqua'};
        return(
            <div className="commentContainer">
                <div className="avatarContainer">
                    <img src={this.state.avatar} alt=""/>
                </div>
                <div className="commentContent">
                    <div className="commentHeader">
                        <div className="commentFullName">{`${this.state.fName} ${this.state.lName}`}</div>
                        <div className="commentDate">{this.state.commentDate}</div>
                    </div>
                    <div className="commentBody">{this.state.comment}</div>
                </div>

            </div>
        );
    }
}

export default UserComment;