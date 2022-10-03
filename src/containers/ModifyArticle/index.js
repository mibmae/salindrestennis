import { connect } from 'react-redux';
import ModifyArticle from 'src/components/Admin/modifyArticle.js';
import { reload } from 'src/actions/';

const mapStateToProps = (state) => ({
    //   cities: state.cities,
    });
    
    const mapDispatchToProps = (dispatch) => ({
      reload: (payload) => {
        dispatch(reload(payload));
      },
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(ModifyArticle);