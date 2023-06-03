import styles from './Formulario.module.css'
import { useState } from 'react'
import Card from './Card'


function Formulario(props){

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const [submitedValues, setSubmitedValues] = useState()

    function handleSubmit(e){
        e.preventDefault()

        user.trim
        password.trim
        
        let bUser = true
        let bPass = true

        if(user.length <= 2){
            setError('Error : La longitud mínima para el nombre de usuario debe ser 3')
            bUser = !bUser
        }

        if(password.length <= 5){
            setError('Error : La longitud mínima para la contraseña debe ser de 6 caracteres')
            bPass = !bPass
        }

        if(bUser && bPass){
            setSubmitedValues({
                user,
                password
            })
            setUser('')
            setPassword('')
            setError()
        }
    }

    function handleChange(e){
        if(e.target.id==="user"){
            setUser(e.target.value)
        }else if(e.target.id==="password"){
            setPassword(e.target.value)
        }
    }

    return (
        <>

        <div className={styles.box}>
            <h1>Registro de Usuario</h1>
            <p>Por favor ingrese su usuario y contraseña.</p>
            
            <form onSubmit={handleSubmit}>
            
                <div>
                    <label htmlFor='user'>Usuario : </label>
                    <input 
                        id="user" 
                        placeholder='Ingrese el nombre de usuario'
                        value={user}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>    
                    <label htmlFor='password'>Contraseña : </label>
                    <input 
                        type="password"
                        id="password" 
                        placeholder='Ingrese la Contraseña'
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.error}>
                    {error ? <p>{error}</p>:undefined}
                </div>

                <div>
                    <button type='submit'>Submit</button>
                </div>
            
            </form>

        </div>

        <div>
            {submitedValues ? (
                <Card values={submitedValues} ></Card>
            ):undefined}
        </div>
                
        </>
    )

}

export default Formulario