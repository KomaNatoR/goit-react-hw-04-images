import { Watch } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Loader({ screenText }) {
    // console.log(screenText);

    if (screenText === 'succes') return;
    if (screenText === 'idle') return <h2>Pleace input image's key word!</h2>;
    if (screenText === 'error') return <h2>There is no data about your request!</h2>;
    if (screenText === 'pending') {
        return <Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    };
};
Loader.propTypes = {
    screenText:PropTypes.string.isRequired,
};