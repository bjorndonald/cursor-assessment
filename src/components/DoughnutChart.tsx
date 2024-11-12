import React, { useEffect, useRef } from "react";
import DrawDoughnutChart from "./DrawDoughnutChart";
import * as d3 from 'd3'

// Data for doughnut chart
const data = [
    { value: 49500 },
    { value: 21500 },
    { value: 14000 },
    { value: 25000 }
];

// Colors of each segment of doughnut chart
const colors = [
    "#FF8A08",
   "#5BC0F8",
    "#8576FF",
    "#30E3DF",
] 

// List of icons placed in the public folder for easy access
const iconSources = [
    '/icons/air.png',
    '/icons/food.png',
    '/icons/gift.png',
    '/icons/water.png'
];

/**
 * Component for creating doughnut chart using D3.js
 *
 * @component
 * 
 * return (
 *   <DonutChart  />
 * )
 */
const DonutChart = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            DrawDoughnutChart(ref.current, data, colors, iconSources);
        }
        return () => {
            d3.select(ref.current).select("svg").remove();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return (
        <div className="container">
            <div className="graph h-[400px] overflow-y-hidden" ref={ref} />
        </div>
    );
};

export default React.memo(DonutChart);