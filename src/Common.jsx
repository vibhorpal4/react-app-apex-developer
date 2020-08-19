import React from 'react'
import { NavLink } from 'react-router-dom';


const Common = (props) =>   {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row"> 

                                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1>
                                    {props.name}
                                    <strong className="brand-name"> Apex Developer</strong>
                                    </h1>
                                    <h2 className="my-3">
                                    We are passionate to our Work
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} class="btn-get-started scrollto">
                                        {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img src={props.imgsrc} class="img-fluid animated" alt="Apex Developer" />
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Common;