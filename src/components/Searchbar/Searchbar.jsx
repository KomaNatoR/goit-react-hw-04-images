import { useState } from "react";
import { toast } from "react-toastify";
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Header } from "./searchbar.styled";


export default function Searchbar({onSubmit}) {
    const [value, setValue] = useState('');

    const hendleCange = (e) => {
        setValue( e.currentTarget.value );
    };
    const hendleSubmit = (e) => {
        e.preventDefault();

        if (value === '') return toast.error('input name, pleace!');
        onSubmit(value);
        // this.setState({ value: '' });
    };


    return (
        <Header>
            <form onSubmit={hendleSubmit}>
                <button type="submit">
                    <span>Search</span>
                    <ImSearch />
                </button>

                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={hendleCange}
                />
            </form>
        </Header>
    );

};
Searchbar.propTypes = {
    onSubmit:PropTypes.func.isRequired,
};