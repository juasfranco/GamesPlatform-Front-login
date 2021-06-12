import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';

function Menu(props) {

    const cookies = new Cookies();

    const cerrarSesion=()=>{
        cookies.remove('Id', {path: '/'});
        cookies.remove('City', {path: '/'});
        cookies.remove('Department', {path: '/'});
        cookies.remove('UserName', {path: '/'});
        cookies.remove('Email', {path: '/'});
        cookies.remove('Password', {path: '/'});
        props.history.push('./');
    }

    useEffect(()=>{
        if(!cookies.get('Id')){
            props.history.push('./');
        }
          },[]);

    return (
        <div className="containerMenu">
            <br />
            <button className="btn btn-danger" onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
            <br />
            <h5>ID: {cookies.get('Id')}</h5>
            <br />
            <h5>City: {cookies.get('City')}</h5>
            <br />
            <h5>Department: {cookies.get('Department')}</h5>
            <br />
            <h5>Email: {cookies.get('Email')}</h5>
            <br />
            <h5>Username: {cookies.get('UserName')}</h5>
            <br />
            <h5>Password: {cookies.get('Password')}</h5>
            <br />
        </div>
    );
}

export default Menu;