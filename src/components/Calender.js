import Calendar from 'react-github-contribution-calendar';
import React, { Fragment } from 'react'
import {useNavigate} from 'react-router-dom'

function Calender() {
    const navigate = useNavigate();
    var values = {
        '2016-06-21': 1,
        '2016-06-22': 2,
        '2016-06-25': 3,
        '2016-06-27': 4,
        '2016-06-29': 5,
        '2016-06-13': 4,
    }
    var panelColors = [
        '#EEEEEE',
        'red',
        'green',
        'blue',
        'yellow',
        'cyan'
    ];
    let date = '2016-08-12'
    var until = date;
    console.log(date)
    return (
        <Fragment>
            <div>Calender</div>
            <div>
                <Calendar values={values} until={until} maxWidth="200" panelColors={panelColors} />
            </div>
        </Fragment>
    )
}

export default Calender
