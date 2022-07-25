import { useState} from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

function ContactForm ({onSubmit}){
 const [name, setName]= useState('')
 const [number, setNumber]= useState('')


 const nameChange= e => setName(e.currentTarget.value)
 
 const numberChange= e => setNumber(e.currentTarget.value)

 const reset = ()=>{
     setName('')
     setNumber('')
 }

 const handleSubmit = e => {
    e.preventDefault();
    const data = { name, number };
    onSubmit(data);
    reset();
};
 return (
    <form onSubmit={handleSubmit} className={s.formWrap}>
        <div className={s.inputWrap}>
            <label className={s.label}>Name</label>
            <input
                className={s.input}
                value={name}
                onChange={nameChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />  
        </div>
        <div className={s.inputWrap}>
            <label className={s.label}>Number</label>
            <input
                className={s.input}
                value={number}
                onChange={numberChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </div>   
        <button className={s.button} type='submit'>
            Add contact
        </button>
    </form>
);
}


ContactForm.propType = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;