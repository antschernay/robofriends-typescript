import React from 'react';
import Card from './Card.tsx';
import { IRobot } from '../containers/App';


const Cardlist = ({ robots }: {robots: Array<IRobot>}) => {
    return (
    <div>
        {
        robots.map((user, i) => {
            return (
                <Card
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
            );
        })
        }
    </div>
    );
}

export default Cardlist;