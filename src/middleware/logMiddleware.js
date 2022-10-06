import {
  LOGIN,
  login,
  SIGNIN_BY_TOKEN_ADMIN,
} from 'src/actions';
import Swal from 'sweetalert2'
import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios'

const logMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      
      Swal.fire({
        title: 'Connecté',
        text: `Bienvenue ${action.payload.email}`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      window.location.href="/admin"
      return next(action);
    }
    case SIGNIN_BY_TOKEN_ADMIN: {
      const token = action.payload;
      const headers = { Authorization: `Bearer ${token}` };
      const body = {
        token: `${token}`,
      };

      axios.post('https://backtennis.herokuapp.com/auth/signinbytokenadmin', body, { headers }).then((response) => {
        // console.log(response.data)
        if (response.data.msg === 'TokenExpiredError' || response.data.msg === 'JsonWebTokenError' || response.data.msg === 'Token Invalid') {        
          localStorage.removeItem('token_Tennis');
          Swal.fire({
            title: 'Connexion trop longtemps inactive, Veuillez vous reconnecter',
            icon: 'error',
            showConfirmButton: false,
            timer: 5000,
          });
          setTimeout(() => {
            window.location.href = '/login';
          }, 2000);
        }
        else {
          return next(action);
        }
      });
      return next(action);
    }
  }
  next(action);
};

export default logMiddleware;
