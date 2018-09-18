import { connect } from 'react-redux';
import Messenger from '../../components/messenger/Messenger';

const mapStateToProps = (state)=> {
  return {
    messenger: state.messenger
  }
}

const mapDispatchToProps = (dispatch)=> {
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)
