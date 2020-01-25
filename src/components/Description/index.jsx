import React from 'react'

const Description = (props) => {

    return(
        <div className="row justify-content-md-center">
            <div className="col-lg-10">
                <h2 className="Skill_Title">Skill: {props.title}</h2>
                <p className="Skill_Description">{props.description}</p>
            </div>
        </div>
    )
}

export default Description;