import React, { useState, useEffect } from 'react';

import { debounce } from '../../utils';
import { getRides } from '../../actions/ApiClient';

let searchRidesDebouncedFunction;

const SearchMain = function() {
  const [searchParams, setSearchParams] = useState({
    source: '',
    destination: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchRidesDebouncedFunction = debounce((source, destination) => {
      if (source && destination) {
        // call API
        getRides({ source, destination })
          .then(response => {
            // todo populate list items
          })
          .catch(error => {
            setErrorMessage(error.message);
          });
      }
    }, 500); // call search rides API after 0.5 sec
  }, []);

  const onInputChange = key => {
    return e => {
      const value = e.target.value;
      const searchParamsCopy = Object.assign({}, searchParams);
      searchParamsCopy[key] = value;
      setSearchParams(searchParamsCopy);
      searchRidesDebouncedFunction(
        searchParamsCopy.source,
        searchParamsCopy.destination
      );
    };
  };

  return (
    <>
      <div className="ui basic segment">
        <div className="ui stackable grid">
          <div className="column">
            <h1 className="ui headers">Pick a Ride</h1>
            <div className="ui secondary segment">
              <div className="ui two column stackable grid">
                <div className="row">
                  <div className="column">
                    <div className="ui primary segment">
                      <p>Start From</p>
                      <div className="ui fluid input">
                        <input
                          type="text"
                          placeholder="Koramangala"
                          value={searchParams.source}
                          onChange={onInputChange('source')}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui primary segment">
                      <p>Destination</p>
                      <div className="ui fluid input">
                        <input
                          type="text"
                          placeholder="Whitefield"
                          value={searchParams.destination}
                          onChange={onInputChange('destination')}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" row">
                  <div className="column">
                    {errorMessage && <p className="error">{errorMessage}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="ui basic segment">
              <div className="ui stackable equal width grid"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchMain;
