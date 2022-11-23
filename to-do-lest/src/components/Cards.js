import React from 'react'

const Cards = ({ id, name, age, desJob, image, phone, HandleDelCard }) => {


    const DeleteCard = (idCrd) => {

        HandleDelCard(idCrd);

    }




    return (
        <div className="mt-3" >

            <div className="card d-flex align-items-center" style={{ width: "18rem" }} >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='d-flex justify-content-evenly align-items-center'><h5 style={{ color: "#198754" }}>Name:</h5><h2 className="card-title">{name}</h2></div>
                    <div className='d-flex justify-content-evenly align-items-center'><h5 style={{ color: "#198754" }}>Age :</h5><h3 className="card-title">{age}</h3></div>
                    <div className='d-flex justify-content-evenly align-items-center'><h6 style={{ color: "#198754" }}>Job :</h6><h5 className="card-title">{desJob}</h5></div>
                    <div className='d-flex justify-content-evenly align-items-center'><h5 style={{ color: "#198754" }}>Phone :</h5><h5 className="card-text">{phone}</h5></div>
                    <hr style={{ color: "#0dcaf0" }} />
                    <button className='btn btn-danger mt-1' onClick={() => DeleteCard(id)} >Delete</button>
                </div>
            </div>

        </div >
    )
}

export default Cards
