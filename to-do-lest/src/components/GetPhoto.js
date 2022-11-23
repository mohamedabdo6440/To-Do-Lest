import React from 'react'

const GetPhoto = ({ image, setImage }) => {

    const onChangePicture = e => {
        console.log('picture: ', e.target.files);
        setImage(e.target.files[0]);
    }
    return (
        <div>
            <label htmlFor="image" className="form-label">Select Image</label>
            <input className="form-control" type="file" id="image" onChange={onChangePicture} />
        </div>
    )
}

export default GetPhoto
