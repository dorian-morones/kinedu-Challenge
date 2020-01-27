import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

class Area extends Component {
    constructor(props) {
        super(props)

        this.handlerState = this.handlerState.bind(this)
    }

    handlerState(e, id, currentId){
        e.preventDefault();
        let skills = id === 2 ? '../../../data/skills_2.json' : '../../../data/skills_23.json'
        id !== currentId ?
        this.props.getResults(skills) 
        : null
    }

    render(){
        const { tasks } = this.props;
        let titleBk = tasks.skill.id == "23" ? "bk_mix_A" : "bk_mix_B"
        let ctaA =  tasks.skill.id == "23" ? "" : "cta"
        let ctaB =  tasks.skill.id == "2" ? "" : "cta"
        return(
            <div className="row justify-content-center fade1">
                <div className="col-12 col-md-10 col-lg-10">
                    <h3 className="Secion_Title">Areas</h3>
                </div>
                <div className="col-12 col-md-12 col-lg-12">
                    <div className="row justify-content-center">
                        <div className={`col-10 col-md-3 col-lg-3 ${titleBk} Section_Type`}>
                            <p className={ctaA} onClick={ e => this.handlerState(e, 23, tasks.skill.id)}>Physical</p><p className={ctaB} onClick={ e => this.handlerState(e, 2, tasks.skill.id)}>Social & Emocional</p>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-4 col-lg-4 line"></div>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        tasks: state.results.task.data,
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
  )(Area);