import { PHOTOGRAPHS } from '../../app/shared/PHOTOGRAPHS';


export const selectAllPhotographs = () => {
    return PHOTOGRAPHS;
};

export const selectPhotoById = (id) => {
    return PHOTOGRAPHS.find((photo) => photo.id === parseInt(id))
};

export const selectFeaturedPhotos = () => {
    return PHOTOGRAPHS.find((photo) => photo.featured)
};

export const selectFeatDisplay = () => {
    return PHOTOGRAPHS.find((photo) => photo.special)
};