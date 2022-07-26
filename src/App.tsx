import React, { useMemo, useState } from 'react';
import InvalidIcon from './components/Icons/Invalid.icon';
import ValidIcon from './components/Icons/Valid.icon';
import './styles.css';

function App() {
  const [value, setValue] = useState('');
  var isValidZip = useMemo(
    () => value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/),
    [value]
  );

  return (
    <div className='App'>
      <div className='zipcode'>
        <input
          type='number'
          id='zipcode'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label htmlFor='zipcode'>Type in a valid american zip code...</label>
        <span className='indicator'>
          {isValidZip ? <ValidIcon /> : <InvalidIcon />}
        </span>
      </div>
    </div>
  );
}

export default App;
