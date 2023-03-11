// const handleChange = (e) => {
//     //console.log(e.target.value)
//     if (e.target.name === "f_name") {
//       if (!validCharacters.test(e.target.value)
//       ) {
//         setValidFname(false);
//         setFNameError("Invalid FirstName");
//         setRecord({
//           ...record,
//           [e.target.name]: e.target.value,
//         }); 
//       } else {
//         setValidFname(true);
//         setFNameError("");  
//         setRecord({
//           ...record,
//           [e.target.name]: e.target.value,
//         });     
//       }
//     }
//     if (e.target.name === "l_name") {
//       console.log(e.target.value)
//       if (!validCharacters.test(e.target.value)) {
       
//         setValidLname(false);
//         setLNameError("Invalid lastName");
//         setRecord({
//           ...record,
//           [e.target.name]: e.target.value,
//         }); 
//       } else {
//         setValidLname(true);
//         setLNameError("");
//         setRecord({
//           ...record,
//           [e.target.name]: e.target.value,
//         });   
//       }
//     }
//     if(e.target.name === "email"){
//       const regex = /^[A-Za-z0-9+_.]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//       console.log(e.target.value, e.target.value.match(regex))
//       if(!(regex.test(e.target.value))){
//         console.log("inside")
//         setValidEmail(false);
//         setEmailError("Invalid Email")
//         setRecord({
//           ...record,
//           [e.target.name]: e.target.value,
//         });  
//       }else{
//         setValidEmail(true);
//         setEmailError("");
//         setRecord({
//           ...record,
//           [e.target.name]: e.target.value,
//         });   
//       }
//     }
//     if((e.target.name === "s_name")||(e.target.name === "gender")||(e.target.name === "age")){
//       setRecord({
//         ...record,
//         [e.target.name]: e.target.value,
//       });  

//     }
//   };