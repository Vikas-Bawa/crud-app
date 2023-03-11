import React, { useContext, useState } from 'react'
import Form from './Form';
import { tableContext } from './Main';
import Modal from './Modal';

function Header() {
  const [isAddUser, setIsAddUser] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const { tableData, setTableData, setSearchDataNotFound } = useContext(tableContext);

  const [copyTableData] = useState(tableData);

  const togglePopup = () => {
    setIsAddUser(!isAddUser);
  }

  function displaySearchedData(event) {
    setSearchValue(event.target.value);
    const copyData = copyTableData.filter(val => val.first_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      val.last_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      val.superhero_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      val.age.toLowerCase().includes(event.target.value.toLowerCase()) ||
      val.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
      val.gender.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log('copyData : ', copyData);
    console.log('copyTableData : ', copyTableData);

    if (event.target.value.length !== 0) {
      if (copyData.length === 0) {
        console.warn('no result found');
        setSearchDataNotFound(true);
        setTableData(copyData);
      }
      else {
        setSearchDataNotFound(false);
        setTableData(copyData);
      }
    }
    else {
      setSearchDataNotFound(false);
      setTableData(copyTableData);
    }
  }

  function deleteSelectedRows() {
    const remainingData = tableData.filter((row) => {
      return !row.isChecked;
    })
    localStorage.setItem('HerosData', JSON.stringify(remainingData));
    setTableData(remainingData);
  }


  return (
    <div>
      <div className='container'>
        <div className='action-row d-flex justify-content-end mt-4'>
          <button type="button rounded" className="btn btn-outline-danger m-1" onClick={() => deleteSelectedRows()}>Delete</button>
          <button type="button rounded" className="btn btn-outline-primary m-1" onClick={togglePopup}>Add Record</button>
          {isAddUser && <Modal handleClose={togglePopup} content={<Form />} />}
          <div className="border rounded-pill d-flex">
            <i className="bi bi-search py-2 mx-2"></i>
            <input id='inputSearchData' className="form-control m-1 mr-sm-2" type="search" placeholder="Search" value={searchValue} onChange={(e) => displaySearchedData(e)} aria-label="Search" />
          </div>
        </div><br /><br />
      </div>
    </div>
  )
}

export default Header
