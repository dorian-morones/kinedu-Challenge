import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

class StateButton extends Component {
    constructor(props) {
        super(props)

        this.handlerState = this.handlerState.bind(this)
    }

    handlerState(e, id){
        e.preventDefault();
        let skills = id === 23 ? '../../../data/skills_2.json' : '../../../data/skills_23.json'
        this.props.getResults(skills)
    }

    render(){
        const { loading, tasks } = this.props
        let text = tasks.skill.id === 23 ? 'Next' : 'Prev'

        return(
            <section>
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        <button className="btn stateButton" onClick={e => this.handlerState(e, tasks.skill.id)}>{text}</button>
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