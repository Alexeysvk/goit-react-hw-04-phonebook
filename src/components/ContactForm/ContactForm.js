import React, { Component } from 'react';
import propTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    hendleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({[name] : value});
    }

    hendleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name:'', number:'' });
    };


    render() {
        return (
            <form onSubmit={this.hendleSubmit} className={s.formWrap}>
                <div className={s.inputWrap}>
                    <label className={s.label}>Name</label>
                    <input
                        className={s.input}
                        value={this.state.name}
                        onChange={this.hendleChange}
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
                        value={this.state.number}
                        onChange={this.hendleChange}
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
}

ContactForm.propType = {
    onSubmit: propTypes.func.isRequired,
};

export default ContactForm;