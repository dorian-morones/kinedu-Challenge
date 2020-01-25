import React from 'react'

const Description = (props) => {
    let titleSkills = props.areaType == "23" ? "Standing up" : "Secure attachment"

    return(
        <div className="row justify-content-md-center">
            <div className="col-lg-10">
                <h2 className="Skill_Title">Skill: {titleSkills}</h2>
                <p className="Skill_Description"> es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en</p>
            </div>
        </div>
    )
}

export default Description;