import React, { useState } from 'react';
import { userInfo } from 'os';
import Display from './Display';
import 'semantic-ui-css/semantic.min.css';
import { Button, Segment, Divider } from 'semantic-ui-react';



export default function Dashboard() {

    const [strikes, setStrikes] = useState(0); 
    const [balls, setBalls] = useState(0);
    const [fouls, setFouls] = useState(0);
    const [hits, setHits] = useState(0);

    const scoreStrikes = () => {
        if(strikes < 3){
            setStrikes(strikes + 1);
        } else {
            setStrikes(0)
        }
    };

    const scoreBalls = () => {
        if(balls === 3){
            setBalls(0);
            setStrikes(0);
        } else {
            setBalls(balls+1)
        }
    };
    
    const scoreHits = () => {
        setStrikes(0);
        setBalls(0);
    };

    const scoreFouls = () => {
        if(strikes === 0){
            setStrikes(1);
        } else if (strikes === 1){
            setStrikes(2);
        } else{
            setStrikes(strikes);
        }
    };

    

    return (

        <Segment raised>

        <div className='dashboardDis'>

            <h1>Dashboard</h1>
            
            <Button color='blue' fluid size='large' onClick={() => scoreBalls()}>Ball</Button>
            <Button color='red' fluid size='large' onClick={() => scoreFouls()}>Foul</Button>
            <Button color='black' fluid size='large' onClick={() => scoreStrikes()}>Strike</Button>
            <Button color='green' fluid size='large' onClick={() => scoreHits()}> Hit </Button>
            
            <Divider horizontal>-</Divider>

            <Display 
            
                    balls={balls}
                    setBalls={setBalls}
                    strikes={strikes}
                    setStrikes={setStrikes}
                    fouls={fouls}
                    setFouls={setFouls} 
                    hits={hits}
                    setHits={setHits}/>
        </div>

        </Segment>
    )

}
