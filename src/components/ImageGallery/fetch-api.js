import axios from "axios";

export function fetchApi(pictName, page) {
    const KEY = '31888671-f215a97b976f323f834fb73b1';

    axios.get(`https://pixabay.com/api/?q=${pictName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then();
}