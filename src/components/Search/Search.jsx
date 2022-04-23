import React from 'react';
import "./Search.css";

const Search = () => {


  return (
        <div className="searchBox">
            <h1>Find Your Next Story</h1>
            <div className="search-bar">
                <form>
                    <div className="location-input">
                        <label>Location</label>
                        <input type="text" placeholder="Where are you Going" />
                    </div>
                    <div>
                        <label>Check In</label>
                        <input type="text" placeholder="Add Date" />
                    </div>
                    <div>
                        <label>Check Out</label>
                        <input type="text" placeholder="Add Date" />
                    </div>
                    <div>
                        <label>Guest</label>
                        <input type="text" placeholder="Add Guest" />
                    </div>
                    <button type="submit"><img src="/search.png" alt="ytryt" /></button>
                </form>
            </div>
        </div>
  )
}

export default Search