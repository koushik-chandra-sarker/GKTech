import React from "react";
import {NavLink} from "react-router-dom";

const Common = (props) => {
    return (
        <section id={"header"} className={"d-flex align-items-center"}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 col-12 mx-auto">
                        <div className="row">
                            <div
                                className="col-md-6 pt-5 pt-lg-0 order-2 order-md-1 d-flex flex-column justify-content-center">
                                <h1>
                                    {props.name} <strong className={"brand-name"}>GKTech</strong>
                                </h1>
                                <h5>
                                    We are the team of talented programmers to making any website
                                    and services
                                </h5>
                                <div className={"mt-3"}>
                                    <NavLink
                                        exact
                                        className={" btn btn-outline-primary btn-get-started"}
                                        to={props.visit}
                                    >
                                        {props.btn}
                                    </NavLink>
                                </div>
                            </div>

                            <div
                                className="col-md-6 pt-0  order-1 order-md-2 d-flex flex-column justify-content-center">
                                <img
                                    className={"img-fluid img-animated"}
                                    src={props.imgsrc}
                                    alt={props.alt}
                                    width={"500px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Common;
