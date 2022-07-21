import React from 'react';
import propTypes from 'prop-types';
import s from './Filter.module.css';


const Filter = ({ filter, onChange }) => {
    return (
        <div className={s.filterWrap}>
            <label className={s.label}>Find contact by name</label>
            <input
                className={s.input}
                value={filter}
                type='text'
                onChange={onChange}
            ></input>
        </div>
    );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;