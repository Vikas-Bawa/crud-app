import React, { useContext, useState } from 'react'
import { heroContext } from './Main';

function Form(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [superheroName, setSuperheroName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isAgeValid, setIsAgeValid] = useState(true);

    const { heros, setHeros } = useContext(heroContext);
    console.log('form heros : ', heros);
    let userData;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        // console.log([e.target.id]);
        const regEx = /^[a-zA-Z]+$/i;
        if (e.target.value === '' || regEx.test(e.target.value)) {
            setIsFirstNameValid(true);
        }
        else {
            setIsFirstNameValid(false);
        }
    }
    function handleLastNameChange(e) {
        setLastName(e.target.value);
        // console.log(e.target.value);
        const regEx = /^[a-zA-Z]+$/i;
        if (e.target.value === '' || regEx.test(e.target.value)) {
            setIsLastNameValid(true);
        }
        else {
            setIsLastNameValid(false);
        }
    }
    function handlesuperheroNameChange(e) {
        setSuperheroName(e.target.value);
        // console.log(e.target.value);
    }
    function handleEmailChange(e) {
        setEmail(e.target.value);
        console.log(e.target.value)
        const regEx = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
        if (e.target.value === '' || regEx.test(e.target.value)) {
            setIsEmailValid(true);
        }
        else {
            setIsEmailValid(false);
        }
    }
    function handleGenderChange() {
        var ele = document.getElementsByName('gender');
        for (var selectedGender of ele) {
            if (selectedGender.checked) {
                setGender(selectedGender.value);
                console.log(gender);
            }
        }
    }
    function handleAgeChange(e) {
        setAge(e.target.value);
        console.log(e.target.value)
        const regEx = /^[0-9]+$/;
        if (e.target.value === '' || regEx.test(e.target.value)) {
            setIsAgeValid(true);
        }
        else {
            setIsAgeValid(false);
        }
    }
    const collectUserData = (e) => {
        userData = {
            "sno": heros.length + 1,
            "first_name": firstName,
            "last_name": lastName,
            "superhero_name": superheroName,
            "email": email,
            "gender": gender,
            "age": age,
            "isChecked": false
        }
        console.log('userData : ', userData);
        setHeros([...heros, userData])
    }

    return (
        <div className='container w-75'>
            <h2>Add Data</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" className="form-control" id="first_name" value={firstName} placeholder="Enter first name" onChange={(e) => handleFirstNameChange(e)} />
                    {(isFirstNameValid) ? '' : <span className='text-danger'>Please write alphabets only.</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" className="form-control" id="last_name" value={lastName} placeholder="Enter last name" onChange={(e) => handleLastNameChange(e)} />
                    {(isLastNameValid) ? '' : <span className='text-danger'>Please write alphabets only.</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="superhero_name">SuperHero Name</label>
                    <input type="text" className="form-control" id="superhero_name" value={superheroName} placeholder="Enter superhero name" onChange={(e) => handlesuperheroNameChange(e)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => handleEmailChange(e)} />
                    {(isEmailValid) ? '' : <span className='text-danger'>Please include @ and extension in the Email address.</span>}
                </div>
                <div className="form-group">
                    <p>Gender:
                        <input type="radio" className="ml-2" id="male" name="gender" value="M" onChange={handleGenderChange} />
                        <label htmlFor="male" className="mr-1"> M </label>
                        <input type="radio" className="ml-1" id="female" name="gender" value="F" onChange={handleGenderChange} />
                        <label htmlFor="female" className="mr-2"> F </label><br />
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="superhero_name">Age</label>
                    <input type="number" className="form-control" id="superhero_name" placeholder="Enter age" value={age} onChange={handleAgeChange} />
                    {(isAgeValid) ? '' : <span className='text-danger'>Please write correct age.</span>}
                </div><br />
                <button type="submit" onClick={collectUserData} className="btn btn-primary">Add</button>
            </form>

        </div>
    )
}

export default Form
