import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList.tsx';
import SearchBox from '../components/SearchBox.tsx';
import Scroll from '../components/Scroll.tsx'
import ErrorBounduary from '../components/ErrorBoundary.tsx';
import './app.css'

export interface IRobot {
    name: string;
    id: number;
    email: string;
}


function App() {
    
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {setRobots(users)})
    }, [])
    

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchfield(event.target.value)
    }


    const filteredRobots = robots.filter((robot: IRobot) =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })


    return !robots.length ?
        <h1>Loading</h1> :        
        (
            <div className='tc pa4'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBounduary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBounduary>
                </Scroll>
                
            </div>
        );
        
    
}

export default App;