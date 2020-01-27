import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import TaskItem from './TaskItem.jsx'
import { validateItemTitle, validateItemClass } from '../../utils/validateItem.js'
import Loading from '../Loading/index.jsx'

class Task extends Component {
    constructor(props) {
        super(props)
    }



    render(){
        const { loading, tasks } = this.props
        let data = tasks.skill
        let items = data && loading !== true ? data.milestones.map( (item, index) => {
            return(
            <TaskItem 
                key={index}
                id={item.id}
                title={item.title} 
                description={item.description}
                age_range={data.age_range}
                answer={item.answer}
                buttonClass={validateItemClass(item.id)}
                buttonText={validateItemTitle(item.id)}
            />)
        }) : <Loading />
        
        return(
            <section>
                <div className="row justify-content-center">
                    <div className="col-12">
                        {items}
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
        saveAnswers: (items) => {
         dispatch(actions.saveAnswers(items));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Task);