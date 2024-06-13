import React, { useState } from 'react';

const AverageCalculator = () => {
  const [windowPrevState, setWindowPrevState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/numbers/${inputValue}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWindowPrevState(data.windowPrevState);
      setWindowCurrState(data.windowCurrState);
      setNumbers(data.numbers);
      setAvg(data.avg);
      setInputValue('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter number ID (p, f, e, r)"
          className="input-field"
        />
        <button type="submit" className="btn">Submit</button>
      </form>
      <div>
        <h2></h2>
     
      </div>
      <div>
        <h2></h2>
        
      </div>
      <div>
        <h2></h2>
       
      </div>
      <div>
        <h2>Average:</h2>
        <p>{avg !== null ? avg.toFixed(2) : 'Calculating...'}</p>
      </div>
    </div>
  );
};

export default AverageCalculator;
