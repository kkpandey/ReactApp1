import { useForm } from 'react-hook-form';
import './App.css';

function App() {
   // const [forecasts, setForecasts] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm(
        {
            defaultValues: {
                Username: "",
                Password: "",
                
            }
        },);

    //const gridColumn = useRef();
   
    
    const onSubmit = async (data) => {
        console.log(data);
        const response = await fetch('https://localhost:7075/User/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
        alert('Login successfully!!');
    }


    return (
        <div>
            <div>
                <h2>Please Enter Control Details...</h2>
                <form>

                    <table>
                        <tr>
                            <td>
                                User Name :
                            </td>
                            <td>
                                <input type="text" name='Username' {...register("Username")}></input>
                            </td>
                            <td>
                                Password:
                            </td>
                            <td>
                                <input type="password" name='Password' {...register("Password")}></input>
                            </td>
                        </tr>
                    </table>

                    <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>Submit</button>
                </form>
            </div>
            
        </div>
    );




}

export default App;