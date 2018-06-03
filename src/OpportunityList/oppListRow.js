import React from 'react';
import './opportunityList.css';

const OppListRow = (props) => {
    const setSelected = (e) => {
        e.preventDefault();
        props.setSelectedOpp(props.opportunity);
    };
    
    return (
        <div className="row listItemRow">
            <div className="col-md-2">
                <img src="TestIcon.jpg" alt="op icon" />
            </div>
            <div className="col-md-10">
                <div className="row">
                    <h3 className="col-md-12">{props.opportunity.title}</h3>
                </div>
                <div className="row">
                    <h5 className="col-md-12">{props.opportunity.startDate} - {props.opportunity.endDate}</h5>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {props.opportunity.description}
                    </div>
                </div>
                <div className="row" onClick={setSelected}>
                    <div className="col-md-12" className="btn-link">
                        Learn More
                    </div>
                </div>
            </div>
        </div>)
};
 
export default OppListRow;