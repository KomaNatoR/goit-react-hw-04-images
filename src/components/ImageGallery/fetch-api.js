export function fetchApi(name) {
    const KEY = '31888671-f215a97b976f323f834fb73b1';

    return fetch(`https://pixabay.com/api/?q=${name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(resp => {
        if (resp.ok) {
            // console.log('GOOD!');
            // console.log(resp.json());
            return resp.json();
        }
        return Promise.reject(new Error(`There is no image with ${name} name`));
    });
}