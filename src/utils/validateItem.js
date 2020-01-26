import store from '../store/index.js';
import _ from 'lodash';

export const validateItemTitle = (id) => {
    let storedAnswers = store.getState().results.answers;
    let savedState = null;
    let savedTitle = ''

    storedAnswers.forEach(item => {
        id === item.id ? savedState = item.state : null
    })

    if(savedState === null){
        savedTitle = 'Not answered'
    }else if(savedState === false){
        savedTitle = 'Uncompleted'
    }else if(savedState === true){
        savedTitle = 'Uncompleted'
    }

    return savedTitle;
}

export const validateItemClass = (id) => {
    let storedAnswers = store.getState().results.answers;
    let savedState = null;
    let savedClass = ''

    storedAnswers.forEach(item => {
        id === item.id ? savedState = item.state : null
    })

    if(savedState === null){
        savedClass = 'btn_notAnswered'
    }else if(savedState === false){
        savedClass = 'btn_uncompleted'
    }else if(savedState === true){
        savedClass = 'btn_completed'
    }

    return savedClass;
}