import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchBeers, fetchBeers, searchPlatformapps, fetchPlatformApps } from "../actions/beerActions";

const Search = ({ searchBeers, fetchBeers, searchPlatformapps, fetchPlatformApps }) => {
  const [keyword, setKeyword] = useState("");
  const timeout = useRef(null);

  const onSearch = e => {
    // get input string from event obj
    const value = e.target.value;
    setKeyword(value);

    if (timeout.current) clearTimeout(timeout.current); // if timeout is not null, clear
    timeout.current = setTimeout(() => handleSearch(value), 500); // wait for user to stop typing then trigger search
  };

  const handleSearch = keyword => {
    const trimmed = keyword.trim();
    // if input is not empty, trigger search across both catalogs
    if (trimmed.length !== 0) {
      searchBeers(trimmed);
      if (searchPlatformapps) {
        searchPlatformapps(trimmed);
      }
    } else {
      // if an empty string is searched, reload beer and platformapps list
      fetchBeers();
      if (fetchPlatformApps) {
        fetchPlatformApps();
      }
    }
  };

  return (
    <div className="row justify-content-center">
      <form className="col-md-6 col-sm-12" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for beer name"
            value={keyword}
            onChange={onSearch}
          />
        </div>
      </form>
    </div>
  );
};

// redux stuff
Search.propTypes = {
  searchBeers: PropTypes.func.isRequired,
  fetchBeers: PropTypes.func.isRequired,
  searchPlatformapps: PropTypes.func,
  fetchPlatformApps: PropTypes.func
};

export default connect(
  null,
  { searchBeers, fetchBeers, searchPlatformapps, fetchPlatformApps }
)(Search);
