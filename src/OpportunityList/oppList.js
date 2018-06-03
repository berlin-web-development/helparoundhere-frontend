import React from 'react';
import OppListRow from './oppListRow';

const OppList = (props) => {

        const oppRows = props.filteredOpps.map( o =>
            <OppListRow key={o.id.toString()} opportunity={o} 
                setSelectedOpp={props.setSelectedOpp} />);

        return (
            <div>
                {oppRows}
            </div>
        )
    }

    export default OppList;