import React from 'react';
import img_s1 from '../image/service/s1.jpg'
import SData from "../Data/SData";
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-sm-10 col-xs-12 mx-auto">
                        <div className="row gy-3 ">

                            {
                                SData.map((value, index) => {
                                    return <Card
                                        imgSrc = {value.imgSrc}
                                        title = {value.title}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Service;
