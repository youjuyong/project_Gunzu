import React, { useRef } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import HC_exporting from 'highcharts/modules/exporting';

interface barChartType {
    xCategory : any,
    series    : any,
    title     ?: string | null,
    options   : any
}
require("highcharts/modules/variwide")(Highcharts);
require('highcharts/modules/data')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/windbarb')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);

HC_exporting(Highcharts);
const HighChartBarCp = React.forwardRef( ( props : barChartType, ref : any ) => {
    const chartRef = useRef<any>(null);  

    const options = {
        chart: {
            type: 'column',
            height: ref.current && ref.current.offsetHeight + 'px',
            ...theme.chart
        },
        title: {
            text: props.title || '' ,
            align: 'center'
        },
        xAxis: {
            categories: props.xCategory,
            crosshair: true,
            accessibility: {
                description: 'Countries'
            },
            title: {
                ...theme.xAxis.title,
                text: props.options.xAxis.title.text,
            },
            labels: { ...theme.xAxis.label },
        },
        plot : {...theme.plot},
        yAxis: {
            min: 0,
            title: {
                ...theme.yAxis.title,
                text: props.options.yAxis.title.text
            },
            labels: {
                ...theme.yAxis.label
            },
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            }
        },
        series : props.series,        
        legend: { ...theme.legend },
    }

    return (
        <>  
            <div>
                <HighchartsReact
                    highcharts = {Highcharts}
                    options={options}
                    ref={chartRef}
                >
                </HighchartsReact>
            </div>
        </>
    )
})

const HighChartVerticalCp = React.forwardRef( ( props : barChartType, ref : any ) => {
    const chartRef = useRef<any>(null);  

    const options = {
        chart: {
            type: 'spline',
            height: ref.current && ref.current.offsetHeight + 'px',
            ...theme.chart
        },
        title: {
            text: props.title || '' ,
            align: 'center'
        },
        xAxis: {
            categories: props.xCategory,
            crosshair: true,
            accessibility: {
                description: 'Countries'
            },
            title: {
                ...theme.xAxis.title,
                text: props.options.xAxis.title.text,
            },
            labels: { ...theme.xAxis.label },
        },
        plot : {...theme.plot},
        yAxis: {
            min: 0,
            title: {
                ...theme.yAxis.title,
                text: props.options.yAxis.title.text
            },
            labels: {
                ...theme.yAxis.label
            },
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            }
        },
        series : props.series,        
        legend: { ...theme.legend },
    }

    return (
        <>  
            <div>
                <HighchartsReact
                    highcharts = {Highcharts}
                    options={options}
                    ref={chartRef}
                >
                </HighchartsReact>
            </div>
        </>
    )
})

const HighChartPolaCp = React.forwardRef( ( props : barChartType, ref : any ) => {
    const chartRef = useRef<any>(null);  
    const options = {
        credits:{
			enabled: false
		},
        chart: {
            polar: true,
        },
        legend: {
				layout        : 'horizontal',
				align         : 'center',
				verticalAlign : 'bottom',
				borderWidth   : 0
		},
        title: {
            text:  props.title
        },
    
        xAxis: {
            categories: props.xCategory
        },
    
        yAxis: {
            min: 0
        },
    
        tooltip: {
			valueSuffix: ''
		},
    
        series : props.series
    }

    return (
        <>  
            <div>
                <HighchartsReact
                    highcharts = {Highcharts}
                    options={options}
                    ref={chartRef}
                >
                </HighchartsReact>
            </div>
        </>
    )
})


const theme = {
    title: {
        fontFamily: 'Noto Sans Kr, 돋움, Dotum',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    plot: {
        vertical: {
            lineColor: '#25262a',
        },
        horizontal: {
            lineColor: '#25262a',
        },
    },
    chart: {
        fontFamily: 'Noto Sans Kr, 돋움, Dotum',
        backgroundColor: '#fff',
    },
    xAxis: {
        title: {
            fontFamily: 'Noto Sans Kr, 돋움, Dotum',
            fontSize: 14,
            fontWeight: 400,
            style : { color : 'black'},
        },
        label: {
            fontFamily: 'Noto Sans Kr, 돋움, Dotum',
            fontSize: 14,
            style : { color: 'black' },
        },
        color: '#25262a'
    },
    yAxis: {
        title: {
            fontFamily: 'Noto Sans Kr, 돋움, Dotum',
            fontSize: 14,
            fontWeight: 400,
            style : { color : 'black'}
        },
        label: {
            fontFamily: 'Noto Sans Kr, 돋움, Dotum',
            fontSize: 14,
            style : { color: 'black' }
        },
        color: '#25262a'
    },
    series: {
        colors: ['#25262a', '#8a67dd', '#67dbc4', '#fccd37', '#f27545'],
        hover: {
            borderWidth: 2,
            shadowColor: 'rgba(0, 0, 0, 0.7)',
            shadowOffsetX: 4,
            shadowOffsetY: 4,
            shadowBlur: 6,
        },
    },
    legend: {
        label: {
            fontFamily: 'Noto Sans Kr, 돋움, Dotum',
            fontSize: 14,
            style : { color: 'black' }
        },
        itemStyle: {
            color:'#25262a',
            symbolRadius:0,
        },
        x: 30,
        y: -3
    },
};

export const HighChartBar  = React.memo(HighChartBarCp);
export const HighChartVertical  = React.memo(HighChartVerticalCp);
export const HighChartPola  = React.memo(HighChartPolaCp);