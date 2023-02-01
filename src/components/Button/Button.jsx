import PropTypes from 'prop-types';

import { ButtonLoad } from "./button.styled";

export default function Button({loadMore}) {
    return (
        <ButtonLoad type="button" onClick={loadMore}>Load more</ButtonLoad>
    );
};
Button.propTypes = {
    loadMore:PropTypes.func.isRequired,
};