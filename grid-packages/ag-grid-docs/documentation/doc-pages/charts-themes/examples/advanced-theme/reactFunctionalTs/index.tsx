'use strict';

import React, { useState, useCallback, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import { AgChart, AgChartOptions, AgChartTheme } from 'ag-charts-community';

const Chart1 = () => {

  const [options, setOptions] = useState<AgChartOptions>({
    theme: myTheme,
    autoSize: true,
    title: {
      text: "Cartesian Chart Theming",
    },
    data: data,
    series: [
      {
        type: "column",
        xKey: "label",
        yKey: "v1",
        stacked: true,
        yName: "Reliability",
      },
      {
        type: "column",
        xKey: "label",
        yKey: "v2",
        stacked: true,
        yName: "Ease of use",
      },
      {
        type: "column",
        xKey: "label",
        yKey: "v3",
        stacked: true,
        yName: "Performance",
      },
      {
        type: "line",
        xKey: "label",
        yKey: "v4",
        yName: "Price",
      },
    ],
  });

  return <div className="wrapper">
    <AgChartsReact options={options} />
  </div>;
}

const Chart2 = () => {

  const [options, setOptions] = useState<AgChartOptions>({
    theme: myTheme,
    autoSize: true,
    title: {
      enabled: true,
      text: "Polar Chart Theming",
    },
    data: data,
    series: [
      {
        type: "pie",
        angleKey: "v4",
        calloutLabelKey: "label",
      },
    ],
  });

  return <div className="wrapper">
    <AgChartsReact options={options} />
  </div>;
}

var myTheme: AgChartTheme = {
  baseTheme: "ag-default-dark",
  palette: {
    fills: ["#5C2983", "#0076C5", "#21B372", "#FDDE02", "#F76700", "#D30018"],
    strokes: ["gray"],
  },
  overrides: {
    common: {
      title: {
        fontSize: 24,
      },
    },
    cartesian: {
      padding: {
        left: 70,
        right: 70,
      },
      series: {
        line: {
          marker: {
            shape: "circle",
          },
        },
        column: {
          label: {
            color: "white",
          },
        },
      },
      axes: {
        category: {
          line: {
            color: "gray",
          },
          tick: {
            color: "gray",
          },
        },
        number: {
          line: {
            color: "gray",
          },
          tick: {
            color: "gray",
          },
        },
      },
    },
    polar: {
      padding: {
        top: 40,
        bottom: 40,
      },
      legend: {
        position: "left",
      },
      series: {
        pie: {
          calloutLabel: {
            enabled: true,
          },
          calloutLine: {
            colors: ["gray"],
          },
        },
      },
    },
  },
}

var data = [
  {
    label: "Android",
    v1: 5.67,
    v2: 8.63,
    v3: 8.14,
    v4: 6.45,
    v5: 1.37,
  },
  {
    label: "iOS",
    v1: 7.01,
    v2: 8.04,
    v3: 2.93,
    v4: 6.78,
    v5: 5.45,
  },
  {
    label: "BlackBerry",
    v1: 7.54,
    v2: 1.98,
    v3: 9.88,
    v4: 1.38,
    v5: 4.44,
  },
  {
    label: "Symbian",
    v1: 9.27,
    v2: 4.21,
    v3: 2.53,
    v4: 6.31,
    v5: 4.44,
  },
  {
    label: "Windows",
    v1: 2.8,
    v2: 1.908,
    v3: 7.48,
    v4: 5.29,
    v5: 8.8,
  },
]

const root = createRoot(document.getElementById('root')!);
root.render(<div id="charts">
  <div id="chart1">
    <Chart1 />
  </div>
  <div id="chart2">
    <Chart2 />
  </div>
</div>);