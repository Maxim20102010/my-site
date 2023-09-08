
import './App.css';
import {useEffect, useState } from "react"
import Header from './Components/Header/Header';
import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Tasks/Tasks';

function App() {
const [todo, setTodo] = useState([
    {
        id: 1, 
        titel: 'first-todo', 
        status: true
    },
    {
        id: 2, 
        titel: 'second-todo', 
        status: true
    },
    {
        id: 1, 
        titel: 'thind-todo', 
        status: true
    },
]);
return (
<div>
    <Header />
    <NewTask />
    <Tasks />
</div>
);
    }
export default App;