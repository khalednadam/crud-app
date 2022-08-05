import React, {FC, useEffect, useState} from 'react';
import './add.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Users } from '../users/Users';
import { UserType } from '../../App';
import { v4 as uuidv4 } from 'uuid';

interface addProps{
    handleSet: (arg: UserType) => void;
}

export const Add: FC<addProps> = (props) =>{
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    let newUser: UserType = {
        id: uuidv4(),
        name: name,
        lastName: lastName,
        username: username
    };
    const handleAdd = () =>{
        if(newUser.name !== "" || newUser.lastName !== "" || newUser.username !== ""){
            return props.handleSet(newUser);
        }
        return;   
    }
    
    
    return(
        <div className='add'>
            <form onSubmit={handleAdd}>
                <label>
                    <h3 className="label">Name:</h3>
                    <input type="text" name="name" className='input' required maxLength={15} value={name} onChange={(e) => setName(e.target.value) }/>
                </label>
                <label>
                    <h3 className="label">Surname:</h3>
                    <input type="text" name="surname" className='input' required maxLength={15} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    <h3 className="label">Username:</h3>
                    <input type="text" name="username" className='input' required maxLength={30} value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </form>
            <div className='form-buttons'>
                <div className='clickable-submit-button'> 
                    <Link to='/'><h2 className='submit-button' onClick={handleAdd}>Add user</h2></Link>
                </div>
                <div className='clickable-submit-button'> 
                    <Link to="/"><h2 className='cancel-button'>Cancel</h2></Link>
                </div>
            </div>
            
        </div>
    );
}