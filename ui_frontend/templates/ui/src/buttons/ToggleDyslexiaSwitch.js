
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

// This is the actual switch toggle
const ToggleDyslexiaSwitch = ({ isDyslexia, onChange }) => (
    <>
      <label className="toggle">
        <input
          type="checkbox"
          id="uniqueID"
          className="toggle__input"
          checked={isDyslexia}
          onChange={onChange}
          aria-label="Switch between default site font and Open Dyslexic font"
        />
          <span className="toggle-track">
            <span className="toggle-indicator">
            <span className="checkMark">
              <svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
                <path d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
              </svg>
            </span>
          </span>
        </span>
        <FaArrowLeft />&nbsp;
        Switch Site Font
      </label>
    </>
);

export default ToggleDyslexiaSwitch;
