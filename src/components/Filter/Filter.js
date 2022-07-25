import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';


const Filter = ({ value, onChange }) => {
    return (
        <div className={s.filterWrap}>
            <label className={s.label}>Find contact by name</label>
            <input
                className={s.input}
                value={value}
                type='text'
                onChange={onChange}
            />
        </div>
    );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;