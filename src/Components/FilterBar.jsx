import React from 'react';

const FilterBar = ({ authors, years, selectedAuthor, selectedYear, onAuthorChange, onYearChange, onReset }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-center">
      {/* Author filter */}
      <div>
        <label className="text-white mr-2">Author:</label>
        <select
          className="px-3 py-1 rounded-lg bg-white text-black"
          value={selectedAuthor}
          onChange={(e) => onAuthorChange(e.target.value)}
        >
          <option value="">All</option>
          {authors.map((author, idx) => (
            <option key={idx} value={author}>{author}</option>
          ))}
        </select>
      </div>

      {/* Year filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-white mr-2">Year:</span>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearChange(year)}
            className={`px-3 py-1 rounded-full border text-sm ${selectedYear === year ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
          >
            {year}
          </button>
        ))}
      </div>

      <button
        onClick={onReset}
        className="ml-auto px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterBar;
