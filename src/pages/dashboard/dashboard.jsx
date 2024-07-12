/* eslint-disable react/no-deprecated */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import MTOChartSection from './MTOChartSection'; // Ensure the correct path
import AMODChartSection from '../../components/AnalyticMostOrderedDishes/AMOD';

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <div>
      <MTOChartSection />
      <AMODChartSection />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
