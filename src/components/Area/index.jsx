import React from 'react'

const Area = (props) => {
    let titleBk = props.areaType == "23" ? "bk_mix_A" : "bk_mix_B"
    return(
        <div className="row justify-content-md-center">
            <div className="col-lg-10">
                <h2 className="Secion_Title">Areas</h2>
            </div>
            <div className="col-lg-12">
                <div className="row justify-content-md-center">
                    <div className={`col-3 ${titleBk} Section_Type`}>
                        <p>Physical</p><p>Social & Emocional</p>
                    </div>
                </div>
            </div>
            <div className="col-4 line"></div>

        </div>
    )
}

export default Area;