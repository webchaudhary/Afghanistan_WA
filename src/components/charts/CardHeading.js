import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";

const CardHeading = ({ heading, info }) => {
    return (
        <div className='card_heading_container'>
            <div className='card_heading'>
                <h4>{heading}</h4>
            </div>

            <div className='info_container'>
                <div className='heading_info_button'>
                    <BsInfoCircleFill />
                </div>
                <div className='info_card_container'>
                    <p>{info}</p>

                    <p>
                        Reference evapotranspiration (RET) represents the rate at which water evaporates from a standardized reference crop under specified climatic conditions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardHeading;
