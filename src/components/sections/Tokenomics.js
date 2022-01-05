import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class Tokenomics extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    var chartColors = [
      "#F16A22",
      "#6699CC",
      "#3546a6",
      "#9ba6de",
    ]

    const buyTax = {
      maintainAspectRatio: false,
      responsive: false,
      labels: ["Liquidity Pool - 2%", "Marketing - 6%"],
      datasets: [
        {
          data: [16, 48],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    };
    const sellTax = {
      maintainAspectRatio: false,
      responsive: false,
      labels: ["Liquidity Pool - 2%", "Marketing - 10%"],
      datasets: [
        {
          data: [2.4, 9.6],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    };
    const options = {
      plugins: {
        legend: {
          usePointStyle: true,
          pointStyle: 'circle',
          display: true,
          labels: {
            usePointStyle: true,
            color: '#fff'
          },
        },
        datalabels: {
          display: false,
          color: "white",
          formatter: function (context, chart_obj) {
            console.log(chart_obj)
            return context + "%"
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return tooltipItem.label;
            }
          }
        },
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    };

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Tokenomics',
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />

            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>Buy Tax</h3>
                  <div>
                    <Doughnut data={buyTax} options={options} />
                  </div>
                </div>
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3>Sell Tax</h3>
                  <div>
                    <Doughnut data={sellTax} options={options} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Tokenomics.propTypes = propTypes;
Tokenomics.defaultProps = defaultProps;

export default Tokenomics;