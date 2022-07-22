import React from 'react';
import PropTypes from 'prop-types';
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
            />
        </div>
    );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;