import React, { useState } from 'react';
import data from '../data';
import Button from './Button/Button';
import Cards from './Cards';
import FilterData from './filteration/FilterData';
import Modal from './modal/Modal'

const Home = () => {
    const [show, setShow] = useState(true);
    const [showModel, setShowModel] = useState(false);
    const [Getdata, setGetdata] = useState(data.Employees);
    const [filter, setFilter] = useState("")
    const [wordSearch, setWordSearch] = useState("");
    //addNewRecord
    const addNewRecord = (Newdata) => {
        setGetdata(prevState => ([...prevState, Newdata]))
    }
    // console.log(AddRecord.NewEmployee);
    // //Handle Delete Botton 
    // const HandleDelRecord = (idCrd) => {
    //     const delRecord = addRecord.filter((ele) => {
    //         return ele.id !== idCrd;
    //     })
    //     setGetdata(delRecord);
    // }

    //Handle Delete Botton 
    const HandleDelCard = (idCrd) => {
        const AfterFilter = Getdata.filter((ele) => {
            return ele.id !== idCrd;
        })
        setGetdata(AfterFilter);

        // setGetdata((prevState) => {
        //     return prevState.filter((ele) => ele.id !== idCrd)
        // })
    }

    //Handle Delete Botton from search
    const HandleDelSearch = (idCrd) => {
        const AfterFilter = filter.filter((ele) => {
            return ele.id !== idCrd;
        })
        setFilter(AfterFilter);
    }

    //handle Search word
    const HandleSearch = (word) => {
        setWordSearch(word)
        const AfterSearch = Getdata.filter((ele) => {

            return ele.name.toLocaleLowerCase().includes(word)
        })
        if (AfterSearch.length !== 0) {
            setFilter(AfterSearch);
        }
        // setGetdata(prevState => {
        //     return prevState.filter((ele) => { return ele.name.toLocaleLowerCase() === word.toLocaleLowerCase() })
        // })
    }

    return (
        <div className='mt-5'>

            <h1 className='mb-5 ToDolist'>ToDolist</h1>

            <div className='d-flex justify-content-evenly'>
                <Button show={show} onClickButt={() => { show ? setShow(false) : setShow(true) }} styleButt={`mb-5  btn ${show === false ? 'btn-warning' : ('btn-dark')}`} children={show ? "Hide Data" : "Show Data"} />
                <Button onClickButt={() => { showModel ? setShowModel(false) : setShowModel(true) }} styleButt={`btn btn-primary mb-5`} children={'Add New Record'} />
            </div>

            <div className={show ? "show" : "hide"} >

                <div>
                    <FilterData HandleSearch={HandleSearch} wordSearch={wordSearch} />
                </div>

                <div className="d-flex flex-wrap justify-content-around">
                    <Modal showModel={showModel} addNewRecord={addNewRecord} close={() => { setShowModel(false) }} />

                    {
                        filter.length !== 0 && wordSearch !== "" ? (filter.map((ele) => <Cards {...ele} HandleDelCard={HandleDelSearch} key={ele.id} />)) : (Getdata.map((ele) => <Cards {...ele} HandleDelCard={HandleDelCard} key={ele.id} />))
                    }
                    {/* {(AddRecord.map((ele) => <Cards {...ele} HandleDelCard={HandleDelCard} key={ele.id} />))} */}
                </div>
            </div>
        </div>
    )
}

export default Home
