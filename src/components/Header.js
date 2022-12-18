import React from 'react'
import { useState } from 'react'
function Header() {
    const [user,setUser] = useState()
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
            <a href="#" className="navbar-brand"><i className="fa fa-cube"></i>Mood<b>Tracker</b></a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-end">
                <div className="navbar-nav">
                    {/*you can add any of nav items hear*/}
                    <a href="#" className="nav-item nav-link active"></a>
                </div>
                <div className="navbar-nav ml-auto">
                    {
                        !user ? <a href='/login' className="btn btn-primary">sign in</a> :
                        <div className="nav-item dropdown ">
                            <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action align-center">
                                Paula Wilson <b className="caret"></b></a>
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a>
                                <a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a>
                                <a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                            </div >
                        </div >
                    }
                </div >
            </div >
        </nav>
    )
}

export default Header