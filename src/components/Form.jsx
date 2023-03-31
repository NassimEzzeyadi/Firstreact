import './Form.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Form(){
    return(
        <>
         <h1>Mon Beau Formulaire </h1>
        <form action='#' className="form">
            
        <TextField id="username" label="username" variant="outlined"/>
        <TextField id="email" label="email" variant="outlined"/>
        <TextField id="mdp" label="password" variant="outlined"/>
        <Button variant="contained">Envoyez</Button>
        </form>
    </>
    )
}
export default Form