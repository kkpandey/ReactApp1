import { useForm } from 'react-hook-form';
import './App.css';
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
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
        localStorage.setItem("accessToken", result.token);
        navigate("/user");
        

    }


    return (
        <div>
            <div>
                <h2>User Auth
                </h2>
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