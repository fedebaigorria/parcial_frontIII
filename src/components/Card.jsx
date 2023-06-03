import styles from './Card.module.css'


function Card(props){

    return (
        <>
        <div className={styles.box}>
            <h1>Usuario Registrado</h1>
            <p>El usuario <b>{props.values.user}</b> ha sido creado exitosamente</p>
            <p>Guarde su contraseña en un lugar seguro <b>{props.values.password}</b> :/</p>
        </div>
        </>
    )

}

export default Card