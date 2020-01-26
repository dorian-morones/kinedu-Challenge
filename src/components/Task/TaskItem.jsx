import React,{Component, Fragment} from 'react'

class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.state ={
            buttonState: "NA",
            buttonText: 'Not answered',
            buttonClass: 'btn_notAnswered'
        }
        this.handlerButtonState = this.handlerButtonState.bind(this);

    }

    handlerButtonState(e){
        console.log('click')
        switch (this.state.buttonState) {
            case 'NA':
                console.log('click',this.state.buttonState)
                this.setState({buttonState: false, buttonText: 'Uncompleted', buttonClass: 'btn_uncompleted'})
              break;
              case false:
                console.log('click',this.state.buttonState)
                this.setState({buttonState: true, buttonText: 'Completed', buttonClass: 'btn_completed'})
              break;
              case true:
                console.log('click',this.state.buttonState)
                this.setState({buttonState: false, buttonText: 'Uncompleted', buttonClass: 'btn_uncompleted'})
              break;
            default:
              break;
          }

    }


    render(){
        const { title, age_range } = this.props
        
        let titleState = this.state.buttonText;

        return(
            <Fragment>
                <div className="row Task_Item">
                    <div className="col-9">
                        <h4>{title}</h4>
                        <h6>usually achieved by: {age_range} months</h6>
                    </div>
                    <div className="col-3">
                        <button className={`btn ${this.state.buttonClass}`} onClick={e => this.handlerButtonState(e)}>{titleState}</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}    


export default TaskItem;