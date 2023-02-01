import PropTypes from 'prop-types';

import ImageGalleryItem from "./ImageGalleryItem";
import { Ul } from "./imageGallery.styled";


export default function ImageGallery({imgData,takeImgId}) {
    return (
        <Ul>
            {/* <ImageGalleryItem/> */}
            {imgData.map(imgObj => <ImageGalleryItem key={imgObj.id} imgObj={imgObj} takeImgId={takeImgId} />)}
        </Ul>
    );
};
ImageGallery.propTypes = {
    imgData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired,
    }),),
    takeImgId: PropTypes.func.isRequired,
};
ImageGallery.defaultProps = {
    imgData:[],
};