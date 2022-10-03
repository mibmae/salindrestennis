import React, {
    useRef, useEffect,
  } from 'react';
  import { useSelector } from 'react-redux';
  import './styles.scss';
  
  import { useForm } from 'react-hook-form';
  import store from 'src/store';
  import Swal from 'sweetalert2'
  import { login } from 'src/actions';
  import { useNavigate, Link } from 'react-router-dom';
  // import Swal from 'sweetalert2/dist/sweetalert2.js';
  
  function Login() {
    const navigate = useNavigate();
    const formLogin = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const globalState = useSelector((state) => state);
  
   const ident = (data, event) => {
        event.preventDefault();
        const forma = document.getElementById('login_form');
        const datas = Object.fromEntries(new FormData(forma).entries());
        console.log(datas)
        fetch('https://backtennis.herokuapp.com/auth/signin', {
        method: 'POST',
        body: JSON.stringify(datas),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        // console.log(response)
        response.json()
        .then((res) => localStorage.setItem('token_Tennis', res.token))      
        if (response.status === 200) {
            // Swal.fire({
            //     title: 'Connecté',
            //     text: `Bienvenue ${datas.email}`,
            //     icon: 'success',
            //     confirmButtonText: 'Cool'
            //   })
              store.dispatch(login(datas));
              // navigate('/admin')
              // window.location.href="/admin"
        } else {
            Swal.fire({
                title: 'Erreur',
                text: `Erreur E-mail / Password`,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
      })
        // fetch("https://backtennis.herokuapp.com/auth/signin", {method: 'POST', body: datas})
    //   .then((response) => response.json())
    //   .then((res) => console.log(res.data))
    //   .then((res) => setArticlesList(res.data))
      };

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, []);
  
    // useEffect(() => {
    //   if (store.getState().jobsilog.logged === true) {
    //     navigate('/account');
    //   }
    // }, [store.getState().jobsilog.logged]);
    // useEffect(() => {
    //   if (store.getState().jobsilog.admin === true) {
    //     navigate('/admin');
    //   }
    // }, [store.getState().jobsilog.admin]);
  
    return (
        <>
        {store.getState().Tennis.logged === false ? (

        <form className="form_login" onSubmit={handleSubmit(ident)} ref={formLogin} id="login_form">
        <h1 className="white">Admin Login</h1>
        <div className="inset">
        <p>
          <label className="label_login" htmlFor="email">EMAIL</label>
          <input type="text" className="login_input" name="email" id="email" />
        </p>
        <p>
          <label className="label_login" htmlFor="password">MOT DE PASSE</label>
          <input type="password" className="login_input" name="password" id="password" autoComplete='true' />
        </p>
        {/* <p>
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember me for 14 days</label>
        </p> */}
        </div>
        <p className="p-container">
          {/* <span>Forgot password ?</span> */}
          <input type="submit" name="go" id="go" value="Log in" />
        </p>
      </form>
        ) : (navigate('/admin'))}
</>
    );
  }
  
  export default Login;
  