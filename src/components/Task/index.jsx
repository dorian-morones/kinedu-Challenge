import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

class Task extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div className="row">
                <h2>Task</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.results.task.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getResults: () => {
         dispatch(actions.getResults());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Task);