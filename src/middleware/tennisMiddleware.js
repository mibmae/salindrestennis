import {
    SET_MODAL_STATUS
  } from 'src/actions';

  
  const tennisMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case SET_MODAL_STATUS: {
        console.log(action)
        return next(action);
      }

      
    }
    next(action);
  };
  
  export default tennisMiddleware;
  