import React from 'react'
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Dashboard.css'
import face from '../assets/face.png'
import "bootstrap-icons/font/bootstrap-icons.css"
import SimpleSubmenu from './simpleSubmenu'
import SubmenuWithSearch from './submenuWithSearch'

const SidebarSearch = props => {
    return (
        <div class="wrapper">
            <div id="sidebar">
                <div id="top-sidebar">
                    <div class="sidebar-header">
                        <img src={face} height="85px" width="85px"></img>
                        <h4>Abdullah</h4>
                        <h4>VII-4</h4>
                    </div>
                    <ul>
                        <li>
                            <a class="nav-link active" href="/">
                                <i class="bi bi-house"></i>
                                <> Home </>
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href=''>
                                Subjects
                            </a>
                            <SubmenuWithSearch />
                        </li>
                        <li>
                            <a class="nav-link" href='/Assessments'>
                                Assessments
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href='/live_sessions'>
                                Live-Sessions
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href='/training_zone'>
                                Training Zone
                            </a>
                        </li>
                        <li>
                            <a class="nav-link" href='/profile_settings'>
                                Profile Settings
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="sidebar-footer">
                    <h4>
                        <a href="#">Log Out</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}


export default SidebarSearch