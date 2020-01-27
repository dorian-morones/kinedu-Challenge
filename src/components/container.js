import React, {Component,Fragment } from 'react'
import Milestones from './Milestones/index.jsx'
import Task from './Task/index.jsx'
import StateButton from './StateButton/index.jsx'
import "./app.scss";
import { connect } from 'react-redux';
import Loading from '../components/Loading/index.jsx'
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
                        <Loading />
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
