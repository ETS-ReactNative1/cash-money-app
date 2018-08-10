import axios from "axios";

let budgetAxios = axios.create();

budgetAxios
    .interceptors
    .request
    .use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    })

const budgetUrl = "/api/budget";

const budgetReducer = (budget = { data: {}, loading: true }, action) => {
    switch (action.type) {
        case "LOAD_BUDGET":
            return {
                ...budget,
                data: action.budget,
                loading: false
            }
        case "SUBMIT_BUDGET":
            return {
                ...budget,
                data: action.data,
                loading: false
            }
        default:
            return budget;
    }
}

export function loadBudget() {
    return dispatch => {
        budgetAxios.get(budgetUrl)
            .then((response) => {
                dispatch({
                    type: "LOAD_BUDGET",
                    budget: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}


export function submitBudget(budgetObj) {
    return dispatch => {
        budgetAxios.post(budgetUrl, budgetObj)
            .then(response => {
                dispatch({
                    type: "SUBMIT_BUDGET",
                    category: response.data
                })
            })
            .catch(err => console.log(err));
    }
}

export default budgetReducer;