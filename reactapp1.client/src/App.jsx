import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();
    
    //const gridColumn = useRef();
    useEffect(() => {
        populateWeatherData();
    }, []);
   
    
    const contents = forecasts === undefined
        ? <p><em>Loading....</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <td>
                    First Name:
                    </td>
                    <td>
                        {forecasts.firstName }
                    </td>

                </tr>
                <tr>
                    <td>
                        Last Name:
                    </td>
                    <td>
                        {forecasts.lastName}
                    </td>

                </tr>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        {forecasts.email}
                    </td>

                </tr>
                <tr>
                    <td>
                        Gender:
                    </td>
                    <td>
                        {forecasts.gender}
                    </td>

                </tr>
                <tr>
                    <td>
                        Phone:
                    </td>
                    <td>
                        {forecasts.phone}
                    </td>

                </tr>
            </thead>
           
        </table>;
    
   
    
    return (
        <div>           
            <p>Auth Users </p>
            {contents}
        </div>
    );

  
   async function populateWeatherData() {
        const token = localStorage.getItem('accessToken');
       
        const response =await fetch('https://localhost:7075/Demo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
       const result = await response.json();
        console.log(result);
        setForecasts(result);
        return result;
        
    }
    
   
}

export default App;