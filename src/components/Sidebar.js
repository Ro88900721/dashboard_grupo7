import React from 'react';
//cambiar por logo ZG
import image from '../img/sombrero-loco-100px.png'

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3030/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <p>Dashboard</p><p>Sombrerero Loco</p></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Panel</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Libros</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Usuarios</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>G??neros</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;