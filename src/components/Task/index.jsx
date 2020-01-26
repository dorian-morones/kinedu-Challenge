import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import TaskItem from './TaskItem.jsx'
import { validateItemTitle, validateItemClass } from '../../utils/validateItem.js'

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
                age_range={data.age_range}
                answer={'dd'}
                buttonClass={validateItemClass(item.id)}
                buttonText={validateItemTitle(item.id)}
            />)
        }) : <p>Loading...</p>
        
        return(
            <section>
                <div className="row justify-content-md-center">
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