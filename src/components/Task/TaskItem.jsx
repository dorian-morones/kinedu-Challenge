import React,{Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import { contactAnswers } from '../../utils/saveAnswers.js'
class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.state ={
            buttonState: props.answer,
            buttonText: props.buttonText,
            buttonClass: props.buttonClass,
        }
        this.handlerSaveState = this.handlerSaveState.bind(this);
        this.handleStateItem = this.handleStateItem.bind(this);
    }

    handlerSaveState(e, id){
        let state = this.handleStateItem(id, this.state.buttonState);
        let answeredItems = contactAnswers(id, state); //create new array with the answered item
        this.props.saveAnswers(answeredItems);
    }

    handleStateItem(id, state){
        let answerItems = this.props.answers; // all answered items
        let saved = false;
        console.log('[saved 0]', saved + " - " + state)
        answerItems.forEach(item => {
            item.id === id ? saved = true : null
       })
       console.log('[saved 1]', saved + " - " + state)
       let value = state === null || state === true ? false : true;

        if(state === null && saved === false){
            this.setState({buttonState: false});
            value == false;
        }else if(state === false && saved === true){
            this.setState({buttonState: true});
            value == true;
        }else if(state === true && saved === true){
            value == false;
            this.setState({buttonState: false});
        }
        console.log('[saved 1]', value)

        return value
    }


    render(){
        const { id, title, age_range, answer, description } = this.props
        let titleState = this.props.buttonText;

        return(
            <Fragment>
                <div className="row Task_Item">
                    <div className="col-9">
                        <h4>{title}</h4>
                        <h6>{description}</h6>
                        <h6>usually achieved by: {age_range} months</h6>
                    </div>
                    <div className="col-3">
                        <button className={`btn ${this.props.buttonClass}`} onClick={e => this.handlerSaveState(e, id)}>{titleState}</button>
                    </div>
                </div>
            </Fragment>
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
  )(TaskItem);