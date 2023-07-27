import React, { FC } from "react";
import './user.css';
import {UserType} from '../../App';
import { Link } from "react-router-dom";
interface UserProps{
    user: UserType;
    handleDelete: (id: string) => void;
}
export const User: FC<UserProps> = (props) =>{
    const id = props.user.id;
    return(
        <div>
            <div className="user">
                <p>Name: {props.user.name}</p>
                <p>Last Name: {props.user.lastName} </p>
                <p>Username: {props.user.username}</p>
                <div className="buttons">
                    <Link to={`/edit/${id}`}><p className="button edit">Edit</p></Link>
                    <p className="button remove" onClick={() => props.handleDelete(props.user.id)}>Remove</p>
                </div>
            </div>
        </div>
    );
}