import React, { useEffect, useState } from 'react'

function Form(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [superheroName, setSuperheroName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [isNameValid,setIsNameValid] = useState(false)
    
    let userData;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        if((e.target.value>'a' && e.target.value<'z') || (e.target.value>'A' && e.target.value<'Z')){
            setIsNameValid(true)
        }
        else{
            setIsNameValid(false)
        }
        console.log(e.target.value)
        // console.log(isNameValid)
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
        console.log(e.target.value)
    }
    function handlesuperheroNameChange(e) {
        setSuperheroName(e.target.value);
        console.log(e.target.value)
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    function handleGenderChange(){
        var ele = document.getElementsByName('gender');
        for(var selectedGender of ele){
            if(selectedGender.checked){
                setGender(selectedGender.value);
                console.log(gender);
            }
        }
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
        console.log(e.target.value)
    }
    const collectUserData = (e) => {
        // e.preventDefault(); //later remove it to add data to local storage automatically
        userData = {
            "sno" : props.count + 1,
            "first_name" : firstName,
            "last_name" : lastName,
            "superhero_name" : superheroName,
            "email" : email,
            "gender" : gender,
            "age" : age,
            "isDelete": false
        }
        console.log(userData);
        props.setHerosData([...props.herosData,userData]);
    }
    useEffect(()=>{
        localStorage.setItem("HerosData",JSON.stringify(props.herosData))
        // console.log('now');
    },[props.herosData])
    return (
        <div className="popup-box">
            <div className="box">
                <span onClick={props.handleClose} className="close-icon">x</span>
                <div className='container w-75'>
                    <h2>Add Data</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" className="form-control" id="first_name" value={firstName} placeholder="Enter first name" onChange={(e) => handleFirstNameChange(e)} />
                            {(isNameValid)?'':<span>name not valid</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" className="form-control" id="last_name" value={lastName} placeholder="Enter last name" onChange={(e) => handleLastNameChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="superhero_name">SuperHero Name</label>
                            <input type="text" className="form-control" id="superhero_name" value={superheroName} placeholder="Enter superhero name" onChange={(e) => handlesuperheroNameChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => handleEmailChange(e)} />
                        </div>
                        <div className="form-group">
                            <p>Gender:
                                <input type="radio" className="ml-2" id="male" name="gender" value="M" onChange={handleGenderChange}/>
                                <label htmlFor="male" className="mr-1"> M </label>
                                <input type="radio" className="ml-1" id="female" name="gender" value="F" onChange={handleGenderChange}/>
                                <label htmlFor="female" className="mr-2"> F </label><br />
                            </p>
                        </div>
                        <div className="form-group">
                            <label htmlFor="superhero_name">Age</label>
                            <input type="text" className="form-control" id="superhero_name" placeholder="Enter age" value={age} onChange={handleAgeChange} />
                        </div>
                        <button type="submit" onClick={collectUserData} className="btn btn-primary">Add</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Form
