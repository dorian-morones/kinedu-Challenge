import React from 'react'
import Area from '../Area/index.jsx'
import Description from '../Description/index.jsx'

const Milestones = (props) => {

    let bk  = props.areaType == '23' ? 'blue_bk' : 'pink_bk';
    return(
        <section>
            <div className={`row ${bk} justify-content-md-cetern`}>
                <div className="col-12">
                    <Area areaType={props.areaType}/>
                    <Description areaType={props.areaType}/>
                </div>
            </div>
        </section>
    )
}

export default Milestones;