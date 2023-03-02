import React, { useEffect, useState } from 'react'
import Form from './Form';
import Table from './Table';

function Main() {
    let previousData = JSON.parse(localStorage.getItem('HerosData'));
    // console.log('running main...')
    if(previousData === null)
        previousData = [];

    let count = previousData.length;
    const [isAddUser, setIsAddUser] = useState(false);
    const [herosData, setHerosData] = useState(previousData); 
    const [isDeleteUser, setIsDeleteUser] = useState(false);
    const [itemsToDelete, setItemsToDelete] = useState([]);

    const togglePopup = () => {
        setIsAddUser(!isAddUser);
        console.log(isAddUser);
    }
    function deleteRow(rowd){
        const copyData = herosData;
        copyData.splice(rowd,1);
        setHerosData(copyData);
        setIsDeleteUser(true);
        console.log(copyData)
    }
    useEffect(()=>{
        console.log('herosData ' + herosData);
        localStorage.setItem('HerosData',JSON.stringify(herosData))
    },[herosData, isDeleteUser])

    function deleteSelectedRows(){
        // let delArr = [1,2];
        const copyData = herosData;
        herosData.map((obj,index) => { 
            if(obj.isDelete)
            {
                console.log('deleting index = ' + index);
                copyData.splice(index,1);
                // deleteRow(index);
            } 
        })
        setHerosData(copyData);
        console.log('copyData ' + copyData);
        // deleteRow(1);
        // delArr.map(row => {
        //     console.log(JSON.parse(localStorage.getItem('HerosData'))[row]);
        //     localStorage.removeItem('HerosData')
        //     // console.log(row);
        //     console.log(JSON.parse(localStorage.getItem('HerosData')[row]));
        // })
    }

  return (
    <div>
      <div className='container'>
            <div className='action-row d-flex justify-content-end mt-4'>
                <button type="button rounded" onClick={deleteSelectedRows} className="btn btn-outline-danger m-1">Delete</button>
                <button type="button rounded" onClick={togglePopup} className="btn btn-outline-primary m-1">Add Record</button>
                {isAddUser && <Form handleClose={togglePopup} herosData={herosData} setHerosData={setHerosData} count={count}/>}
                <div className="border rounded-pill d-flex">
                    <i className="bi bi-search py-2 mx-2"></i>
                    <input id='inputSearchData' className="form-control m-1 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                </div>
            </div><br /><br />
        </div>
        <Table herosData={herosData} setHerosData={setHerosData} setItemsToDelete={setItemsToDelete}/>
    </div>
  )
}

export default Main
