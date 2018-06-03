import React , { Component } from 'react';
import OppList from './oppList';

class opportunityList extends Component {
    state = {};

    componentDidMount() {   
        this.fetchDummyData();
    }

    fetchDummyData = () => {
        fetch('/DummyData.json')
        .then(rsp => rsp.json())
        .then(oppList => {
          this.oppList = oppList;
          this.applyFilters();
        });
    }

    applyFilters = () => {
        //placeholder for now
        const filteredOpps = this.oppList.filter((o) => o.id > 0);
        this.setState({ filteredOpps });
    }

    setSelectedOpp = (opp) => {
        alert(opp.id);
    }

    render() {

        const oppsToShow = this.state.filteredOpps ? this.state.filteredOpps : [];
        return (
            <OppList filteredOpps={oppsToShow} setSelectedOpp={this.setSelectedOpp} />
        )
    }
}

export default opportunityList;