import React, { useState,useEffect } from 'react'
import "./AddEdit.css"
import fireDb from "../../../src/firebase"
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const initialState={
  name:"",
  email:"",
  contact:"",
  status:""
}


const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const {name,email,contact,status}=state;

  const navigate = useNavigate();
  const {id} =useParams();

  useEffect(()=>{
    fireDb.child("contact").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });
    return ()=>{
      setData({});
    };
  },[id]);

  useEffect(()=> {
    if(id) {
      setState({...data[id]});
    } else {
      setState({...initialState});
    }
    return() =>{
      setState({...initialState});
    };
  }, [id, data]);

  const handleInputChange = (e) => {
    const {name,value} =e.target;
    setState({...state,[name]:value});
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(!name || !email || !contact ||!status){
      toast.error("Please provide value in each input field")
    } else {
      if(!id){
        fireDb.child("contact").push(state,(err) =>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Contact Added Successfully");
          }
        });
      } else {
        fireDb.child(`contact/${id}`).set(state,(err) =>{
          if(err){
            toast.error(err);
          }else{
            toast.success("Contact Update Successfully");
          }
        });
      }
     
      setTimeout(()=>navigate("/"), 1000);
    }
  };

  return (
    <div style={{marginTop:"100px"}}>
      <form
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center",
      }}
      onSubmit={handleSubmit}
      >
        <label htmlFor='name'>Name</label>
        <input
        type="text"
        id="name"
        name="name"
        placeHolder='Your Name...'
        value={name || "" }
        onChange={handleInputChange}
        />
        
        <label htmlFor='email'>Email</label>
        <input
        type="email"
        id="email"
        name="email"
        placeHolder='Your Email...'
        value={email || ""}
        onChange={handleInputChange}
        />

        <label htmlFor='contact'>Contact</label>
        <input
        type="number"
        id="contact"
        name="contact"
        placeHolder='Your Contact No. ...'
        value={contact || ""}
        onChange={handleInputChange}
        />

        <label htmlFor='name'>Status</label>
        <input
        type="text"
        id="status"
        name="status"
        placeHolder='Your Status...'
        value={status || "" }
        onChange={handleInputChange}
        />
        
        <input type="submit" value={id ? "Update" : "Save"}/>
      </form>
    </div>
  )
}

export default AddEdit