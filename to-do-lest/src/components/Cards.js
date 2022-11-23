import React from 'react'

const Cards = ({ id, name, age, desJob, image, phone, HandleDelCard }) => {


    const DeleteCard = (idCrd) => {

        HandleDelCard(idCrd);

    }




    return (
        <div className="mt-3" >

            <div className="card" style={{ width: "18rem" }} >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="card-title">{age}</h3>
                    <h5 className="card-title">{desJob}</h5>
                    <p className="card-text">{phone}</p>
                    <button className='btn btn-danger' onClick={() => DeleteCard(id)} > Delete x</button>
                </div>
            </div>

        </div >
    )
}

export default Cards
