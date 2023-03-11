import React, { useContext, useState} from 'react'
import { tableContext } from './Main';

function Table() {
    const {tableData,setTableData,searchDataNotFound} = useContext(tableContext);

    const columns = [
        {},
        { label: "#", col_name: "sno" },
        { label: "First Name", col_name: "first_name" },
        { label: "Last Name", col_name: "last_name" },
        { label: "Superhero Name", col_name: "superhero_name" },
        { label: "Email", col_name: "email" },
        { label: "Gender", col_name: "gender" },
        { label: "Age", col_name: "age" }
    ];

    // console.log('tableData : ' , tableData);
    const handleSortingChange = (sortField, sortOrder) => {
        const sorted = [...tableData];
        sorted.sort((a,b)=> {
            return (a[sortField].toString().localeCompare(b[sortField].toString(),"en",{
                numeric: true,
            }))*(sortOrder === 'asc'? 1 : -1)
        })
        // console.log('sorted : ', sorted);
        setTableData(sorted);
    }

    const showIcons =(col_name)=> {
        let isShowIcon = (col_name !== undefined);
        if(isShowIcon)
        return (
            <>
                <i className="bi bi-arrow-down-circle"  onClick={()=>handleSortingChange(col_name,'asc')}></i>
                <i className="bi bi-arrow-up-circle" onClick={()=>handleSortingChange(col_name,'desc')}></i>
            </>
        )
    }
    function markRow(index){
        const copyData = tableData.map((element)=>({...element}))
        copyData[index].isChecked = !copyData[index].isChecked;
        setTableData(copyData);
    }

    return (
        <div className='container'>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {columns.map(({ label, col_name }) => {
                            return <th key={col_name}>{label} {showIcons(col_name)}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td><input 
                                checked={data.isChecked}
                                type="checkbox" className='form-check-input' aria-label="Checkbox for following text input" onChange={()=>markRow(index)}/></td>
                                <td>{data.sno}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.superhero_name}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                                <td>{data.age}</td>
                            </tr>
                        )
                    })}
                    {searchDataNotFound && <tr className="table-warning">
                        <td colSpan={8}>Data Not found</td>
                    </tr>}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Table
