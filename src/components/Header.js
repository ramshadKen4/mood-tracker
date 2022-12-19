import React from 'react'
import firebase from '../config/firebase';
function Header({ user }) {
    const logoutUser = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            console.log("signout successful");
        }).catch(function (error) {
            // An error happened.
            console.log("signout error");
        });
    }
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
                                    <span className='m-5'>{user}<b className="caret"></b></span></a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a>
                                    <a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a>
                                    <a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" onClick={logoutUser} className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                                </div >
                            </div >
                    }
                </div >
            </div >
        </nav>
    )
}

export default Header