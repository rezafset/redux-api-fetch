import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchApi from '../../store/actions/FetchApi';

const AllPhotos = () => {
    const { apiImage } = useSelector(state => state);

    console.log(apiImage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchApi());
    }, [])

    return (
        <div className="row">
            {
                apiImage.map(image => (
                    <div className="col-md-3" key={image.id}>
                        <div className="card">
                            <img className="card-img-top" src={image.thumbnailUrl} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{image.title}</h5>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllPhotos;