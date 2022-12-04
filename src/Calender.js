import Calendar from 'react-github-contribution-calendar';
import React from 'react'

function Calender() {
    var values = {
        '2016-06-21': 1,
        '2016-06-22': 2,
        '2016-06-25': 3,
        '2016-06-27': 4,
        '2016-06-29': 5,
        '2016-06-30': 4,
        '2016-07-30': 4,
    }
    var panelColors = [
        '#EEEEEE',
        'red',
        'green',
        'blue',
        'yellow',
        'cyan'
    ];
    var until = '2016-07-30';
    return (
        <>
        <div>Calender</div>
        <div>
             <Calendar values={values} until={until} panelColors={panelColors} />
        </div>
        </>
    )
}

export default Calender
