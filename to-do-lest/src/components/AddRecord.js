import React, { useState } from 'react'
import Button from './Button/Button';
import GetPhoto from './GetPhoto';


const AddRecord = ({ addNewRecord, close }) => {

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');

    const DataFromUserForm = {
        NewEmployee: {
            id: Math.random() * 10,
            name: name,
            job: job,
            age: age,
            phone: phone,
            image: image,
        }
    }

    const handelData = () => {
        //function add new record in Home Component
        addNewRecord(DataFromUserForm.NewEmployee)

        setName('');
        setJob('');
        setAge('');
        setPhone('');
        setImage('');

        //state close in Home Component
        close();
    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name" className="form-label">Full Name</label>
                <input className="form-control" type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <label htmlFor="job" className="form-label">Job Description</label>
                <input className="form-control" type="text" id="job" value={job} onChange={(e) => { setJob(e.target.value) }} />
                <label htmlFor="age" className="form-label">Age</label>
                <input className="form-control" type="number" id="age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input className="form-control" type="text" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                <GetPhoto image={image} setImage={setImage} />
                <div className='d-flex justify-content-evenly'>
                    <Button styleButt={'btn btn-primary mt-3'} children={"Save"} onClickButt={handelData} />
                    <Button styleButt={'btn btn-primary mt-3'} children={"Reset"} type={'reset'} />
                </div>
            </form>
        </div>
    )
}

export default AddRecord
