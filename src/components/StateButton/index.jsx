import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import ModalComponent from '../Modal/index.jsx'
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
        const { answers, tasks } = this.props
        let text = tasks.skill.id === 23 ? 'Next' : 'Prev'
        let max = tasks.skill.id === 23 ? answers.length/2 : (answers.length - 20) / 2 
        let disabled = tasks.skill.milestones.length / 2 < answers.length / 2 ? false : true

        return(
            <section>
                <div className="row justify-content-md-center">
                    <div className="col-12">
                        {
                            tasks.skill.id === 23 ?
                                <button className={`btn stateButton`} disabled={disabled} onClick={e => this.handlerState(e, tasks.skill.id)}>{text}</button>
                            :
                            <Fragment>
                                {(answers.length - 20) / 2  === tasks.skill.milestones.length ?
                                    <ModalComponent max={(answers.length - 20) / 2} current={tasks.skill.milestones.length} />
                                    :
                                    <button className={`btn stateButton`} onClick={e => this.handlerState(e, tasks.skill.id)}>{text}</button>
                            }
                            </Fragment>
                            }
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.results.task.data,
        answers: state.results.answers
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