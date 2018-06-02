import React , { Component } from 'react';

class opportunityList extends Component {

    render() {
        return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <img src="TestIcon.jpg" alt="op icon" />
                </div>
                <div className="col-md-10">
                    <div className="row">
                        <h3 className="col-md-12">Opportunity Header</h3>
                    </div>
                    <div className="row">
                        <h5 className="col-md-12">6/1/2018-6/30/2018</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            Hodor. Hodor HODOR hodor, hodor hodor, hodor. Hodor hodor hodor hodor?! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor; hodor hodor hodor, hodor. Hodor hodor, hodor, hodor hodor.    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <u>Learn More</u>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
        );
    }
}

export default opportunityList;