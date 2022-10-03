import { connect } from 'react-redux';
import ModifyBandeau from 'src/components/Admin/modifyBandeau.js';
import { reload } from 'src/actions/';

const mapStateToProps = (state) => ({
    //   cities: state.cities,
    });
    
    const mapDispatchToProps = (dispatch) => ({
      reload: (payload) => {
        dispatch(reload(payload));
      },
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(ModifyBandeau);