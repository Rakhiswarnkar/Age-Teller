import React, { Component } from 'react';

class Agestats extends Component{
    calculateAge(date){
        let today = new Date().getTime();
        let birthdate = new Date(date).getTime();
        let difference = Math.abs(today-birthdate);

        let days = Math.floor(difference/(1000*3600*24));
        let years = Math.floor(days/365);
        days = days-(years*365);
        let months = Math.floor(days/31);
        days = days-(months*31);

        return `${years}Years ${months}Months ${days}Days`;
    }

    render () {
        return <div>
            <h3>{this.props.date}</h3>
            <h4>{this.calculateAge(this.props.date)}</h4>
        </div>

        
    }
}
export default Agestats;