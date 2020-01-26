import React,{Component, Fragment} from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index.js';
import { saveAnswers } from '../../utils/saveAnswers.js'
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
        let answeredItems = saveAnswers(id, state); //create new array with the answered item
        this.props.saveAnswers(answeredItems);
        switch (this.state.buttonState) {
            case null:
                this.setState({ buttonText: 'Uncompleted', buttonClass: 'btn_uncompleted'})
              break;
              case false:
                this.setState({ buttonText: 'Completed', buttonClass: 'btn_completed'})
              break;
              case true:
                this.setState({ buttonText: 'Uncompleted', buttonClass: 'btn_uncompleted'})
              break;
            default:
              break;
          }
    }

    handleStateItem(id, state){
        let answerItems = this.props.answers;
        let saved = false;
        answerItems.forEach(item => {
            id === item.id ? saved = true : null
       })

        if(state === null && saved === false){
            this.setState({buttonState: false})
        }else if(state === false && saved === true){
            this.setState({buttonState: true})
        }else if(state === true && saved === true){
            this.setState({buttonState: false})
        }
        return saved
    }


    render(){
        const { id, title, age_range, answer } = this.props
        let titleState = this.props.buttonText;

        return(
            <Fragment>
                <div className="row Task_Item">
                    <div className="col-9">
                        <h4>{title}</h4>
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