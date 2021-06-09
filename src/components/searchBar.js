import React from 'react';

const searchBar = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <h2>Barre de recherche</h2>
                <input type="text" placeholder="Search Bar" className="form-control input-lag" />
                {/* <button>Send</button> */}
            </div>
        </div>
    )
}

export default searchBar;