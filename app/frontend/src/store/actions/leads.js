import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from './constants'

//GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        }).catch(error => { console.error(error) });
}


//DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            // console.log(res.data);
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        }).catch(error => { console.error(error) });
}

//ADD LEAD
export const addLead = (lead) => dispatch => {
    axios.post(`/api/leads/`, lead)
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload: res.data,
            })
        }).catch(error => {
            const errors = {
                msg: error.response.data,
                status: error.response.status
            }
            dispatch({
                type: GET_ERRORS,
                payload: errors,
            })
        });
}