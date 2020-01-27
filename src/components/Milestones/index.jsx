import React, { Component} from 'react'
import Area from '../Area/index.jsx'
import Description from '../Description/index.jsx'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';

class Milestones extends Component {
    constructor() {
        super()
    }

    render(){
        const { loading, tasks } = this.props
        let bk  = tasks.id == '23' ? 'blue_bk' : 'pink_bk';

            return(
                <section>
                    <div className={`row ${bk} justify-content-md-cetern`}>
                        <div className="col-12">
                            <Area />
                            <Description title={tasks.title} description={tasks.description} />
                        </div>
                    </div>
                </section>
            )
        }
}

const mapStateToProps = state => {
    return {
        loading: state.results.loading,
        tasks: state.results.task.data.skill
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
  )(Milestones);
