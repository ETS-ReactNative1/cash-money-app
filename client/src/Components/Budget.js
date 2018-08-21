import React, { Component } from 'react';
import { loadBudget, editBudget } from "../Redux/budget";
import { connect } from "react-redux";
import '../Styles/budget.css';

// import { Switch, Route, Link, withRouter } from "react-router-dom";

class Budget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            budget: null
        }
    }

    handleChangeActual = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                budget: {
                    ...prevState.budget,
                    [category]: {
                        ...prevState.budget[category],
                        [name]: { ...prevState.budget[category][name], actual: value }
                    }
                }
            }
        })
    }

    handleChangeProjected = (e, category) => {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                budget: {
                    ...prevState.budget,
                    [category]: {
                        ...prevState.budget[category],
                        [name]: { ...prevState.budget[category][name], projected: value }
                    }
                }
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault
        this.props.editBudget(this.state.budget);
    }

    componentDidMount() {
        this.props.loadBudget().then(() => this.setState({ budget: this.props.budget.data }))
    }


    render() {
        let { loading } = this.props.budget;
        // console.log(this.props.budget)
        console.log(this.state);
        const { budget } = this.state;
        console.log(budget);
        return (
            budget ?
                <div className="budget-wrapper">
                    {/* <div>
                        <label htmlFor="">Actual Income<input value={budget.income.actual} placeholder="Enter income" /></label>
                    </div> */}
                    <div className="housing-wrapper">
                        <div className="category">
                            <h4>Housing</h4>
                            <h4>ProjectedCost</h4>
                            <h4>Actual Cost</h4>
                            <h4>Difference</h4>
                        </div>
                        <div className="category">
                            <label className="category-name">Mortgage/ Rent  </label>
                            <input
                                name="mortgageRent"
                                className="projected-input"
                                type='number'
                                value={budget.housing.mortgageRent.projected}
                                placeholder={budget.housing.mortgageRent.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="mortgageRent"
                                className="actual-input"
                                type="number"
                                value={budget.housing.mortgageRent.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Phone</label>
                            <input
                                name="phone"
                                className="projected-input"
                                type='number'
                                value={budget.housing.phone.projected}
                                placeholder={budget.housing.phone.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="phone"
                                className="actual-input"
                                type="number"
                                value={budget.housing.phone.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Electricity</label>
                            <input
                                name="electricity"
                                className="projected-input"
                                type='number'
                                value={budget.housing.electricity.projected}
                                placeholder={budget.housing.electricity.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="electricity"
                                className="actual-input"
                                type="number"
                                value={budget.housing.electricity.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">gas</label>
                            <input
                                name="gas"
                                className="projected-input"
                                type='number'
                                value={budget.housing.gas.projected}
                                placeholder={budget.housing.gas.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="gas"
                                className="actual-input"
                                type="number"
                                value={budget.housing.gas.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">waterSewer</label>
                            <input
                                name="waterSewer"
                                className="projected-input"
                                type='number'
                                value={budget.housing.waterSewer.projected}
                                placeholder={budget.housing.waterSewer.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="waterSewer"
                                className="actual-input"
                                type="number"
                                value={budget.housing.waterSewer.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">internet</label>
                            <input
                                name="internet"
                                className="projected-input"
                                type='number'
                                value={budget.housing.internet.projected}
                                placeholder={budget.housing.internet.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="internet"
                                className="actual-input"
                                type="number"
                                value={budget.housing.internet.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">wasteRemoval</label>
                            <input
                                name="wasteRemoval"
                                className="projected-input"
                                type='number'
                                value={budget.housing.wasteRemoval.projected}
                                placeholder={budget.housing.wasteRemoval.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="wasteRemoval"
                                className="actual-input"
                                type="number"
                                value={budget.housing.wasteRemoval.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">maintenance</label>
                            <input
                                name="maintenance"
                                className="projected-input"
                                type='number'
                                value={budget.housing.maintenance.projected}
                                placeholder={budget.housing.maintenance.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="maintenance"
                                className="actual-input"
                                type="number"
                                value={budget.housing.maintenance.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">supplies</label>
                            <input
                                name="supplies"
                                className="projected-input"
                                type='number'
                                value={budget.housing.supplies.projected}
                                placeholder={budget.housing.supplies.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="supplies"
                                className="actual-input"
                                type="number"
                                value={budget.housing.supplies.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">other</label>
                            <input
                                name="other"
                                className="projected-input"
                                type='number'
                                value={budget.housing.other.projected}
                                placeholder={budget.housing.other.projected}
                                onChange={e => this.handleChangeProjected(e, "housing")} />
                            <input
                                name="other"
                                className="actual-input"
                                type="number"
                                value={budget.housing.other.actual}
                                onChange={e => this.handleChangeActual(e, 'housing')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <h4>Subtotals</h4>
                            <h4>$0</h4>
                            <h4>$0</h4>
                            <h4>$0</h4>
                        </div>
                    </div>

                    <div className="entertainment-wrapper">
                        <div className="category">
                            <h4>Entertainment</h4>
                            <h4>ProjectedCost</h4>
                            <h4>Actual Cost</h4>
                            <h4>Difference</h4>
                        </div>
                        <div className="category">
                            <label className="category-name">Movies  </label>
                            <input
                                name="movies"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.movies.projected}
                                placeholder={budget.entertainment.movies.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="movies"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.movies.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Music</label>
                            <input
                                name="music"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.music.projected}
                                placeholder={budget.entertainment.music.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="music"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.music.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Vacation</label>
                            <input
                                name="vacation"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.vacation.projected}
                                placeholder={budget.entertainment.vacation.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="vacation"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.vacation.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Theater</label>
                            <input
                                name="theater"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.theater.projected}
                                placeholder={budget.entertainment.theater.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="theater"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.theater.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Sports</label>
                            <input
                                name="sports"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.sports.projected}
                                placeholder={budget.entertainment.sports.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="sports"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.sports.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Winter Sports</label>
                            <input
                                name="winterSports"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.winterSports.projected}
                                placeholder={budget.entertainment.winterSports.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="winterSports"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.winterSports.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <label className="category-name">Other</label>
                            <input
                                name="other"
                                className="projected-input"
                                type='number'
                                value={budget.entertainment.other.projected}
                                placeholder={budget.entertainment.other.projected}
                                onChange={e => this.handleChangeProjected(e, "entertainment")} />
                            <input
                                name="other"
                                className="actual-input"
                                type="number"
                                value={budget.entertainment.other.actual}
                                onChange={e => this.handleChangeActual(e, 'entertainment')} />
                            <h5>$0</h5>
                        </div>
                        <div className="category">
                            <h4>Subtotals</h4>
                            <h4>$0</h4>
                            <h4>$0</h4>
                            <h4>$0</h4>
                        </div>
                    </div>

                    <button onClick={this.handleSubmit}>UPDATE</button>
                </div>
                : <div>loading...</div>
        )
    }
}



export default connect(state => state, { loadBudget, editBudget })(Budget);
