import React, {useState } from "react";
import "../event-create/event.css"
import img from "../../assets/images/image2.png"
import {Col} from 'antd';
import { Link } from "react-router-dom";
 import DatePicker from 'react-date-picker';
 import {  MdDateRange,MdDriveFileRenameOutline,MdOutlineImage } from "react-icons/md";
import TimePicker from 'react-time-picker';
import { RiHotelLine} from "react-icons/ri";

function Event() {
  const [value, onChange] = useState(new Date());
  const [value1, onChange1] = useState(new Date());
  const [valuetime, onChangetime] = useState('10:00');
  const [valuetime1, onChangetime1] = useState('10:00');
  const [valuename, setValuename] = useState('');
  const [valueadress, setValueadress] = useState('');
 
  function handleChange(event) {
    console.log(event.target.value);
    setValueadress(event.target.value)
  }
  function handleChangeName(event) {
    console.log('name',event.target.value);
    setValuename(event.target.value)
  }

  
  function getData() {
    localStorage.setItem('value', value);
    localStorage.setItem('valuetime', valuetime);
    localStorage.setItem('value1', value1);
    localStorage.setItem('valuename', valuename);
    localStorage.setItem('valueadress', valueadress);
    localStorage.setItem('valuetime1', valuetime1);

  }

const [image, setImage] = useState(null);
const onImageChange= (event) => {
  if (event?.target.files && event?.target.files[0]) {
    let img = event.target.files[0];
    setImage(URL.createObjectURL(img)) 
    localStorage.setItem('myImage', URL.createObjectURL(img));
    
  } 
  }
return ( 
 <Col className="event">
 <img src={img} className="img"
 alt="image-birthday"
 />
  <div className="eventtitle" >
   <h2 className="title">Birdthay Blash</h2> 
   <p className="subtitle">Hosted by test </p>
  </div>

 <div className="container" >
 <div className="iconedata" >
 <MdDateRange ></MdDateRange> 
 </div>
 <div style={{
    display: "block",
    flexdirection: "column",
    marginTop:"10px"
   
  }}>
    <div style={{
    display: "flex"}}>
     <DatePicker
       onChange={onChange} 
       placeholder="Start"
      value={value} /> 
      <TimePicker    
      onChange={onChangetime} value={valuetime} />
       {valuetime < "11:59" ?
       <span className="Time">AM</span>                                                                   
             : 
       <span className="Time">PM</span>
                  }
            
  </div>
  <div style={{
    display: "flex",
    marginTop:"-17px"
   }}>
     <span style={{marginTop:"9px",paddingRight:'5px'}}> to </span>
      <DatePicker
      onChange={onChange1} 
       placeholder="Start"
      value={value1} /> 
      <TimePicker 
      onChange={onChangetime1} value={valuetime} />
      {valuetime < "11:59" ?
       <span className="Time">AM</span>                                                                   
             : 
       <span className="Time">PM</span>
                  }
        <span style={{marginTop:"9px",paddingRight:'5px',color:"#4F4F4F",opacity:"0.6"}}>UTC+10.</span>
    </div>

 </div>
 </div> 
<div className="container">
   <div className="iconename" >
 <MdDriveFileRenameOutline ></MdDriveFileRenameOutline> 
 </div>
 <div style={{
    display: "bloc",
    flexdirection: "colum",
  
 }}>
   <p>Stree name</p>
 <input
    type="text"
     name="firstName"
     className="inputname1"
     onChange={handleChangeName}
    />
  </div>


 </div>
 <div className="container">
   <div className="iconename" >
 <RiHotelLine ></RiHotelLine> 
 </div>
 <div style={{
    display: "bloc",
    flexdirection: "colum",
  
 }}>
   <p>Stree Adress</p>
 <input
    type="text"
     name="firstName"
     className="inputname1"
     onChange={handleChange}
    />
  </div>
 </div>
 <div className="container">
   <div className="iconename" >
 <MdOutlineImage></MdOutlineImage> 
 </div>
 <div style={{
    display: "bloc",
    flexdirection: "colum",
  
 }}>
   <p>Select Image</p>
  
   <input type="file" name="myImage" onChange={onImageChange} />
  </div>
 </div>
 <img  className="select" 
 src={image} 
 alt="select_image"
 />

                      
     <div 
      onClick={getData}
     className="btnupdate">  
    <button 
   
    >
  <Link to="/update" >
               update
            </Link>
   
   </button>
   </div>   
 
 


 
 
 </Col>
  // <div className="event">
  // <div class="background">
  //   {/* <h1>page event create</h1> */}
  // </div>
  // <div class="contentevent">
  //   {/* <h4>Birthday Bash</h4>
  //   <p>Hosted by Test</p> */}
 
  //   <p></p>
  //   <span className="inputdata" > 
  //   <Row >  
  //    <MdDateRange className="iconedata" ></MdDateRange>        
  //     <DatePicker 
  //     onChange={onChange} 
  //     value={value} /> 
     
  //     </Row>
  //     </span>
  //     <Row > 
  //     <MdDateRange className="iconedata" ></MdDateRange> 
  //     <span className="inputdata2" > 
  //     <input
  //     type="text"
  //     name="firstName"
  //     onChange={handleChange}
  //   />
  //   </span>
  //   </Row>
  //   <button>
  //   <Link to="/update" onClick={getData}>
  //             update
  //           </Link>
   
  //   </button>
  
  
  //   </div>
  
 
         
  // </div>
      
      
  );
}
export default Event;
