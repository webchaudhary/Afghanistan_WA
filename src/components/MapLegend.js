import React from 'react';

const MapLegend = ({ ColorLegendsDataItem }) => {
    const { Title, Unit, Colors, Value } = ColorLegendsDataItem;
    const gradientColors = Colors.join(', ');
    // const MaxValue = Value[0];
    // const MinValue = Value[Value.length - 1];

    // const firstColor = Colors[0];
    // const lastColor = Colors[Colors.length - 1];


    return (
        <div className="legend_container">
            <div className="legend_heading">
                <p>
                    {/* {Title}{" "} */}
                    {Unit}
                </p>
            </div>

            <div className="legend-color-container">
                <div className='legend-color' style={{ backgroundImage: `linear-gradient(to top, ${gradientColors})` }}></div>
                <div className="legend-item">
                    {
                        [...Value].reverse().map((item, index, arr) => (
                            <p key={index}>{index === arr.length - 1 ? `> ${item}` : item}</p>
                        ))
                    }


                </div>

            </div>

        </div>
    );
};

export default MapLegend;
