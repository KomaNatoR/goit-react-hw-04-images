import PropTypes from 'prop-types';

export default function ImageGalleryItem({ imgObj, takeImgId }) {
    const { id, webformatURL, tags } = imgObj;

    return (
        // imgData.map(({ id, webformatURL, tags }) => (
            <li onClick={()=>takeImgId(id)} >
                <img src={webformatURL} alt={tags} />
            </li>
        // ))
    );
};
ImageGalleryItem.propTypes = {
    imgObj: PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags:PropTypes.string.isRequired,
    }),
    takeImgId: PropTypes.func.isRequired,
};
ImageGalleryItem.defaultProps = {
    imgObj:{},
};