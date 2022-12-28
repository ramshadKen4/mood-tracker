import Calendar from 'react-github-contribution-calendar';
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from '../config/firebase';
function Calender() {
    const [dates, setDates] = useState();
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            firebase.firestore().collection("user")
                .doc(user.uid)
                .get()
                .then(doc => {
                    let dateValues = doc.data().date;
                    setDates(dateValues);
                    console.log(dates)
                })
            })
    }, [])
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const navigate = useNavigate();
    var panelColors = [
        '#ecf0f3',
        '#dc3545',
        '#ffc107',
        '#198754',
        '#0d6efd',
        '#212529',
        '#0dcaf0'
    ];
    var panelAttributes = {
        width: 10,
        height: 10

    }
    var weekNames = ['s', 'm', 't', 'w', 't', 'f', 's'];
    let date = formatDate(new Date);
    var until = date
    console.log(dates)
    return (
        <Fragment>
            <div>Calender</div>
            <div className='Calender'>
                {
                    dates?
                    <Calendar values={dates} until={until} weekNames={weekNames} panelAttributes={panelAttributes} maxWidth="200" panelColors={panelColors} />
                    :''
                }
            </div>
        </Fragment>
    )
}

export default Calender
