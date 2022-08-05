import React, { FC, useState } from 'react';
import { User } from '../user/User';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './users.css';
import { UserType } from '../../App';

interface usersProps{
    users: UserType[];
    handleDelete: (id: string) => void;
}

export const Users: FC<usersProps> = (props) =>{
    return(
        <div className='users'>
            <div className='clickable-add-user'> 
                <Link to="/add"><h2 className='add-button'>Add user</h2></Link>
            </div>
                <div className='users-list'>
                    {props.users.map((user) =>(
                        <User user={user} handleDelete={props.handleDelete} />
                    ))}
            </div>
        </div>
    );
}