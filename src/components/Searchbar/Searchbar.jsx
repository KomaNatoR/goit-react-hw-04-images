import { Component } from "react";
import { toast } from "react-toastify";
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

import { Header } from "./searchbar.styled";


export default class Searchbar extends Component {
    state = {
        value:'',
    }

    hendleCange = (e) => {
        this.setState({ value: e.currentTarget.value });
    };
    hendleSubmit = (e) => {
        e.preventDefault();
        const { value } = this.state;

        if (value.trim() === '') return toast.error('input name, pleace!');
        this.props.onSubmit(value);
        // this.setState({ value: '' });
    };

    render() {
        const { value } = this.state;
        const { hendleCange,hendleSubmit } = this;

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
                        value={value}
                        onChange={hendleCange}
                    />
                </form>
            </Header>
        );
    }
};
Searchbar.propTypes = {
    onSubmit:PropTypes.func.isRequired,
};