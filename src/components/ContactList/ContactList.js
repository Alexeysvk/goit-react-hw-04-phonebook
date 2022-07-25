import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
	<>
		<ul className={s.contactsList}>
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

		</ul>
	</>
);

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;