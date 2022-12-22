import Calendar from 'react-github-contribution-calendar';
import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

function Calender() {
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
    var values = {
        '2022-06-21': 1,
        '2022-06-22': 2,
        '2022-06-25': 3,
        '2022-06-27': 4,
        '2022-06-29': 5,
        '2022-06-13': 4,
        '2022-07-21': 1,
        '2022-07-22': 2,
        '2022-07-25': 3,
        '2022-07-27': 4,
        '2022-07-29': 5,
        '2022-06-13': 6,
    }
    var panelColors = [
        '#ecf0f3',
        '#dc3545',
        '#ffc107',
        '#198754',
        '#0d6efd',
        '#212529',
        '#0dcaf0'
    ];
    var weekNames = ['s', 'm', 't', 'w', 't', 'f', 's'];
    let date = formatDate(new Date);
    var until = date
    values[date] = 4;
    return (
        <Fragment>
            <div>Calender</div>
            <div className='Calender'>
                <Calendar values={values} until={until} weekNames={weekNames} maxWidth="200" panelColors={panelColors}/>
            </div>
        </Fragment>
    )
}

export default Calender
