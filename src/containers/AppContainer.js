import { ActionCreators } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Layout from '../components/Layout'

const mapStateToProps = (state) => {
 return {}
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
