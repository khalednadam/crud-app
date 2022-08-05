import React, {FC, useState} from 'react';
import './App.css';
import { Users } from './components/users/Users';
import { Routes, Route } from 'react-router-dom';
import { Add } from './components/add/Add';
import { Update } from './components/update/Update';

export type UserType = {
    id: string,
    name: string,
    lastName: string,
    username: string
};

export const App: FC = () =>{
    const [users, setUsers] = useState<UserType[]>([]);
    const handleSet = (arg: UserType) =>{
        users.push(arg);
    }
    
    const handleDelete = (id: string) =>{
        let newUsers: UserType[];
        newUsers = users.filter(user => user.id !== id);
        setUsers(newUsers);
    }

   

    
    return (
        <div className="App">
            <h1 className='header'>React Crud App</h1>
            <Routes>
                <Route path='/' element={<Users users={users} handleDelete={handleDelete}/>}/>
                <Route path='/add' element={<Add handleSet={handleSet}/>}/>
                <Route path='/edit/:userId' element={<Update users={users} setUsers={setUsers} />} />
            </Routes>
        </div>
  );
}

export default App;
