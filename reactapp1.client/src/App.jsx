import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
    const [forecasts, setForecasts] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        {
            defaultValues: {
                ControlType: "",
                GridColumn: "",
            LabelEnglish: "",
            ValidationExp: "",
            MaxSize: "",
            LabelArabic: "",
            ValidatetionExpArabic: "",
            MaxSizeArabic: "",
            DisplayOrder: "",
            Mandatory: ""
            }
        },);
           
    //const gridColumn = useRef();
    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading....</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>ControlType</th>                    
                    <th>LabelEnglish</th>                   
                    <th>Label Arabic</th>
                    <th>Mandatory</th>
                   
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.id}>
                        <td>{forecast.controlType}</td>                      
                        <td>{forecast.labelEnglish}</td>                      
                        <td>{forecast.labelArabic}</td>
                        <td>{(forecast.mandatory ? "True" : "False")}</td>
                        
                    </tr>
                )}
            </tbody>
        </table>;
    
    const onSubmit = async (data) => {
        console.log(data);
        const response = await fetch('https://localhost:7075/Demo/Save', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
        alert('Credit information saved successfully!!');
        populateWeatherData();
    }
       
    
    return (
        <div>
            <div>
                <h2>Please Enter Control Details...</h2>
                <form>
                  
                        <table>
                            <tr>
                                <td>
                                    Control Type :
                                </td>
                                <td>
                                <select className="form-control" data-val="true" name="controlType"  {...register("controlType")}>
                                        <option value="">-- Select --</option>
                                        <option value="Textbox">Textbox</option>
                                        <option value="Checkbox">Checkbox</option>
                                    </select>
                                </td>
                                <td>
                                    Grid Column:
                                </td>
                                <td>
                                    <input type="number" name='gridColumn' {...register("gridColumn")}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Label English :
                                </td>
                                <td>
                                    <input type="text" name='LabelEnglish' {...register("LabelEnglish")}></input>
                                </td>
                                <td>
                                    Validation Exp  english: 
                                </td>
                                <td>
                                    <input type="text" name="ValidationExpenglish" {...register("ValidationExpenglish")}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Max Size :
                                </td>
                                <td>
                                    <input type="number" name="MaxSize" {...register("MaxSize")}></input>
                                </td>
                                <td>
                                    Label Arabic:
                                </td>
                                <td>
                                    <input type="text" name="LabelArabic" {...register("LabelArabic")}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Validatetion Exp Arabic :
                                </td>
                                <td>
                                    <input type="text" name="ValidatetionExpArabic" {...register("ValidatetionExpArabic")}></input>
                                </td>
                                <td>
                                    MaxSize Arabic:
                                </td>
                                <td>
                                    <input type="number" name="MaxSizeArabic" {...register("MaxSizeArabic")}></input>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    Display Order :
                                </td>
                                <td>
                                    <input type="number" name="DisplayOrder" {...register("DisplayOrder")}></input>
                                </td>
                                <td>
                                    Mandatory:
                                </td>
                                <td>
                                    <input type="checkbox" name="Mandatory" {...register("Mandatory")}></input>
                                </td>
                            </tr>
                        </table>
                   
                        <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit</button>
                </form>
            </div>
            <h1 id="tabelLabel">Control Data View</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

  
    function populateWeatherData() {
        
        fetch("https://localhost:7075/Demo/GetData")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                setForecasts(data)
            })
    }
    
   
}

export default App;