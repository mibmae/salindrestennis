import {
    MODIFY_BANDEAU,
    SET_MODAL_STATUS,
    RELOAD,
    reload
  } from 'src/actions';
  import Swal from 'sweetalert2'
  import { useNavigate, Link } from 'react-router-dom';
  
  import axios from 'axios'
  
  const bandeauMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case MODIFY_BANDEAU: {
        console.log('modify_bandeau', action.payload)
        // // store.dispatch(login(false));
        // window.location.href="/admin"
        // Swal.fire({
        //   title: 'Connecté',
        //   text: `Bienvenue ${action.payload.email}`,
        //   icon: 'success',
        //   confirmButtonText: 'Cool'
        // })
        
        
      }
      case SET_MODAL_STATUS: {
        console.log(action)
        return next(action);
      }
      case RELOAD: {
        console.log('modify_bandeau', action)
        reload(action.payload);
        return next(action);
      }
      
    }
    next(action);
  };
  
  export default bandeauMiddleware;
  