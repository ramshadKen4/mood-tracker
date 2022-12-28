import React from 'react'
import firebase from '../config/firebase';
function ButtonGroup({ user }) {
    const today = new Date().toDateString();
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
    var userData = {}
    const changeButton = (e) => {
        let value = Object.create(null);
        let userRef = firebase.firestore().collection('user').doc(user.uid);
        userRef.get().then(user => {
            let data = user.data().date
            userData = { date: data }
            value[formatDate(today).toString()] = e.target.value
            userData.date = {...userData.date,...value}
            // console.table(userData);
            userRef.update(userData)
        });

    }
    return (
        <>
            <div>Today : {today}</div>
            <div onClick={changeButton} className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button value="1" type="button" className="btn btn-danger">Focus</button>
                <button value="2" type="button" className="btn btn-warning">Shy</button>
                <button value="3" type="button" className="btn btn-success">Happy</button>
                <button value="4" type="button" className="btn btn-primary">Guilty</button>
                <button value="5" type="button" className="btn btn-dark">Worst</button>
                <button value="6" type="button" className="btn btn-info">Bright</button>
            </div>
        </>
    )
}

export default ButtonGroup