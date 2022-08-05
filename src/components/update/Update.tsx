import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserType } from '../../App';

interface UpdateProps{
    users: UserType[];
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
}

export const Update: FC<UpdateProps> = (props) =>{
    const {userId} = useParams();
    let user: UserType = props.users.find((obj) =>{
        return obj.id === userId;
    })!;
    console.log(user);
    const [name, setName] = useState<string>(user.name);
    const [lastName, setLastName] = useState<string>(user.lastName);
    const [username, setUsername] = useState<string>(user.username);
    const setData = (data: UserType) => {
        setName(user.name);
        setLastName(user.lastName);
        setUsername(user.username);
     }
    
    return(
        <div className='add'>
            <form>
                <label>
                    <h3 className="label">Name:</h3>
                    <input type="text" name="name" className='input' required maxLength={15} value={name} onChange={(e) => setName(user.name = e.target.value) }/>
                </label>
                <label>
                    <h3 className="label">Surname:</h3>
                    <input type="text" name="surname" className='input' required maxLength={15} value={lastName} onChange={(e) => setLastName(user.lastName = e.target.value) } />
                </label>
                <label>
                    <h3 className="label">Username:</h3>
                    <input type="text" name="username" className='input' maxLength={30} value={username} onChange={(e) => setUsername(user.username = e.target.value) } />
                </label>
            </form>
            <div className='form-buttons'>
                <div className='clickable-submit-button'> 
                    <Link to='/'><h2 className='submit-button' onClick={() => setData(user)}>Update</h2></Link>
                </div>
                <div className='clickable-submit-button'> 
                    <Link to="/"><h2 className='cancel-button'>Cancel</h2></Link>
                </div>
            </div>
            
        </div>
    );
}