import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

class StateButton extends Component {
    constructor(props) {
        super(props)

        this.handlerState = this.handlerState.bind(this)
    }

    handlerState(e){
        e.preventDefault();
        console.log('click')
        this.props.getResults('../../../data/skills_2.json')
    }

    render(){
        const { loading, tasks } = this.props
        
        return(
            <section>
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <button className="btn stateButton" onClick={e => this.handlerState(e)}>Next</button>
                    </div>
                </div>
            </section>
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
        getResults: (skill) => {
         dispatch(actions.getResults(skill));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StateButton);