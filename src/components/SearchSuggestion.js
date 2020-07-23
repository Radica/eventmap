import React from 'react';

import styles from './SearchSuggestion.css';

export default ({
  searchResults,
  selectResult
}) => (
    <div className={styles.SearchSuggestionContainer}>
      <div className='search-suggestion-viewport'>
        <ul className='search-suggestion-list'>
          {searchResults.map(item => (
            <li key={item.place_id}>
              <button type="button" onClick={()=>selectResult(item)}>{item.formatted_address}</button>
            </li>))
          }
        </ul>
      </div>
    </div>
)
