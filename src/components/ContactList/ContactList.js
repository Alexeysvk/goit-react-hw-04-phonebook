import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ children }) => (
	<>
		<ul className={s.contactsList}>
			{children}
		</ul>
	</>
);

ContactList.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContactList;