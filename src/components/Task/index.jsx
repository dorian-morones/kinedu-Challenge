import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import TaskItem from './TaskItem.jsx'
class Task extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { loading, tasks } = this.props
        let data = tasks.skill
        console.log(data)
        let items = data && loading !== true ? data.milestones.map( (item, index) => {
            return(<TaskItem key={index} title={item.title} age_range={data.age_range} />)
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
        tasks: state.results.task.data
    };
};

export default connect(
    mapStateToProps,
    null
  )(Task);