import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ contacts, onDeleteContact }) => (
	<>
			{contacts.map(({ id, name, number }) => (
				<li key={id} className={s.contactsItem}>
					<p className={s.contactText}>
						{name} : {number}
					</p>
					<button
						className={s.button}
						type='button'
						onClick={() => onDeleteContact(id)}
					>
						Delete
					</button>
				</li>
			))}
	</>
);

ContactItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;