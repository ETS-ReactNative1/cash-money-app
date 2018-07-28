import React, { Component } from 'react'
import { connect } from "react-redux";
import { addCategory } from "../Redux/budget";

import { Switch, Route, Link, withRouter } from "react-router-dom";

import '../Styles/body.css'

class LoansForm extends Component {
    render() {
        let { formData, handleChange } = this.props;
        console.log(formData);
        return (
            <div>
                <h1>Loans</h1>
                <input name="vehiclePayment" value={formData.vehiclePayment} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="busTrainUber" value={formData.busTrainUber} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="insurance" value={formData.insurance} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="licensing" value={formData.licensing} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="fuel" value={formData.fuel} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="maintenance" value={formData.maintenance} type="number" onChange={e => handleChange(e, "loans")} />
                <input name="other" value={formData.other} type="number" onChange={e => handleChange(e, "loans")} />
                <Link to="/form/entertainment">entertainment</Link>
            </div>
        )
    }
}


export default withRouter(connect(state => state, { addCategory })(LoansForm));