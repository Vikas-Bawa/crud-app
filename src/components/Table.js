import React, { useEffect, useState } from 'react'

function Table({ herosData }, { setHerosData }) {
    const [isChecked, setIsChecked] = useState(false);
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");
    const [tableData, setTableData] = useState(herosData);

    function myfunc(data, index) {
        console.log(index);
        data.isDelete = !data.isDelete;
        setHerosData(data);
        // console.log(data);
        // setIsChecked(!isChecked);
        // isChecked?console.log('checked ' + index):console.log('unchecked ' + index);
        // console.log(index);
        // console.log('checked');
    }

    const columns = [
        {},
        { label: "#", accessor: "sno" },
        { label: "First Name", accessor: "first_name" },
        { label: "Last Name", accessor: "last_name" },
        { label: "Superhero Name", accessor: "superhero_name" },
        { label: "Email", accessor: "email" },
        { label: "Gender", accessor: "gender" },
        { label: "Age", accessor: "age" }
    ];

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...herosData].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);
        }
    };
    
    

    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return (
        <div className='container'>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {/* <th scope="col"> </th>
                        <th scope="col">#</th>
                        <th scope="col">FirstName </th>
                        <th scope="col">LastName </th>
                        <th scope="col">Superhero Name </th>
                        <th scope="col">Email </th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age </th> */}

                        {columns.map(({ label, accessor }) => {
                            return <th key={accessor} onClick={() => handleSortingChange(accessor)}>{label}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, index) => {
                        return (
                            <tr>
                                <td><input type="checkbox" className='form-check-input' onChange={() => myfunc(data, index)} aria-label="Checkbox for following text input" /></td>
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
                    {/* <tr>
                        <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                        <th scope="row">1</th>
                        <td>Tony</td>
                        <td>Stark</td>
                        <td>Iron Man</td>
                        <td>tony@avengers.com</td>
                        <td>M</td>
                        <td>53</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                        <th scope="row">2</th>
                        <td>Natasha</td>
                        <td>Romanoff</td>
                        <td>Black Widow</td>
                        <td>natasha@avengers.com</td>
                        <td>F</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" aria-label="Checkbox for following text input" /></td>
                        <th scope="row">3</th>
                        <td>Steve</td>
                        <td>Rogers</td>
                        <td>Captain America</td>
                        <td>steve@avengers.com</td>
                        <td>M</td>
                        <td>99</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Table
