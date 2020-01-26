import React,{Fragment} from 'react'

const TaskItem = (props) => {
    console.log('TaskItem', props)
    return(
        <Fragment>
            <div className="row Task_Item">
                <div className="col-9">
                    <h4>{props.title}</h4>
                    <h6>usually achieved by: {props.age_range} months</h6>
                </div>
                <div className="col-3">
                    <button className="btn btn_notAnswered">Not answered</button>
                </div>
            </div>
        </Fragment>
    )
}

export default TaskItem;