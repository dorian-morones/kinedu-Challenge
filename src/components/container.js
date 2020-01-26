import React, {Component,Fragment } from 'react'
import Milestones from './Milestones/index.jsx'
import Task from './Task/index.jsx'
import StateButton from './StateButton/index.jsx'
import "./app.scss";
import { connect } from 'react-redux';

class Container extends Component {
    constructor() {
        super()
    }
    render(){
        const {loading} = this.props

        return(
            <div className="container-fluid">
                {
                    loading === false ?
                        <Fragment>
                            <Milestones />
                            <Task />
                            <StateButton />
                        </Fragment>
                    :
                        <p>Loading...</p> 
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.results.loading,
    };
};


export default connect(
    mapStateToProps,
    null
  )(Container);
