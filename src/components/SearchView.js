import React from 'react';
// import Icon from 'react-fontawesome';

import SearchSuggestion from './SearchSuggestion';

import styles from './SearchView.css';

//                                    {<Icon name='check' color='white' className='event-check' />}

export default ({
    activeFilters,
    eventTypes,
    handleFilterChange,
    handleKeyPress,
    handleSearch,
    searchQuery,
    searchResults,
    selectResult,
}) => (
    <div className={styles.SearchContainer}>
        <div className={styles.SearchViewport}>
            <form className={styles.SearchForm} onSubmit={() => { return false; }}>
                <input type='text'
                    className={styles.SearchText}
                    placeholder='Enter Zip Code'
                    onChange={handleSearch}
                    onKeyPress={handleKeyPress}
                    value={searchQuery}
                    maxLength={5}
                />
                <button
                    type="button"
                    className={styles.SearchButton}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </form>

            <form className={styles.FilterForm} style={{display: eventTypes.length > 0 ? 'block' : 'none'}}>
                <ul>
                    {
                        eventTypes.map(eventType => (
                            <li key={eventType}>
                                <input type="checkbox" name='f[]' value={eventType}
                                    id={eventType} onChange={handleFilterChange}
                                    checked={eventType && activeFilters.includes(eventType) ? 'checked' : false} />
                                <label htmlFor={eventType}>
                                    x
                                    <span>{eventType}</span>
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </form>
            {searchResults && <SearchSuggestion selectResult={selectResult} searchResults={searchResults}/>}
        </div>
    </div>
)
