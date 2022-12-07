import React, { Component, Fragment,useState,useEffect } from "react";
import "../event-create/event.css"
import imagebirdhay from "../../assets/images/image2.png"
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from 'moment'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiHotelLine} from "react-icons/ri";
import {  MdDateRange,MdDriveFileRenameOutline,MdOutlineImage } from "react-icons/md";

function Update() {

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [valuetime, setValuetime] = useState("");
  const [valuetime1, setValuetime1] = useState("");
  const [valuename, setValuename] = useState("");
  const [valueadress, setValueadress] = useState("");
  const [img, setImg] = useState(null);
 
  

  useEffect(() => {
    const item = localStorage.getItem('value')
    const item1 = localStorage.getItem('value1')
    const time1 = localStorage.getItem('valuetime')
    const time2 = localStorage.getItem('valuetime1')
    const name = localStorage.getItem('valuename')
    const adress = localStorage.getItem('valueadress')
    const image = localStorage.getItem('myImage')
    setDate1(item)
    setValuetime(time1)
    setValuename(name)
    setValueadress(adress)
    setImg(image)
    setDate2(item1)
    setValuetime1(time2)
  }, [])

return (
  
<div  className="update">  
<Row>
<Col md={6}>
{/*column 1*/}
<div className="title" >
   <h2 className="title1">Birdthay Blash</h2> 
   <p className="subtitle">Hosted by test </p>
  </div>
  <div className="date1">
  <div className="iconedata" >
 <MdDateRange ></MdDateRange> 
 </div>
  <div className="date2">
  <div className="date21">
 <p>{moment(date1).format('ll')}</p>
 <p className="time1">{valuetime}</p>
  <span > 
  {valuetime < "11:59" ?
       <span className="Time1">AM1</span>                                                                   
             : 
       <span className="Time1">PM1</span>
                  } 
       
    </span> 
  </div>
  <div className="date21">
  <span style={{paddingRight:'5px'}}>to </span>
  <p>{moment(date2).format('ll')}</p>
 <p className="time1">{valuetime1}</p>
  <span> 
  {valuetime1 < "11:59" ?
       <span className="Time1">AM2</span>                                                                   
             : 
       <span className="Time1">PM2</span>
                  } 
  <span style={{marginTop:"9px",paddingRight:'5px',color:"#4F4F4F",opacity:"0.6"}}>UTC+10.</span>  
     </span> 
  </div>

    </div>
    <div className="iconleft">
    <MdKeyboardArrowRight  style={{
float: "right",
flex: "1",
justifycontent: "center",
alignitems: "center",

 }}></MdKeyboardArrowRight> 
    </div>
 
  </div>
  <div className="date1">
  <div className="iconename" >
 <MdDriveFileRenameOutline ></MdDriveFileRenameOutline> 
 </div>

  <div className="update_information">
  <p style={{opacity: "0.6"}}>Street name</p>
  <span> {valuename}</span> 
  
    </div>
    <div className="iconleft">
    <MdKeyboardArrowRight  style={{
float: "right",
flex: "1",
justifycontent: "center",
alignitems: "center",

 }}></MdKeyboardArrowRight> 
    </div>
 
  </div>
  <div className="date1">
  <div className="iconename" >
 <RiHotelLine ></RiHotelLine> 
 </div>

  <div className="update_information">
  <p style={{opacity: "0.6"}}>Street adress</p>
  <span>{valueadress} </span> 
  </div>
  

    <div className="iconleft">
    <MdKeyboardArrowRight  style={{
float: "right",
flex: "1",
justifycontent: "center",
alignitems: "center",

 }}></MdKeyboardArrowRight> 
    </div>
  
 
  </div>
  <div className="date1">
  <div className="iconename" >
 <MdOutlineImage ></MdOutlineImage> 
 </div>
 <div className="update_image">
 <img
  src={img}
  alt="image-birthday"
  ></img>
  
    </div>
   
 </div>

  
 
 
      </Col>
      {/*column 2*/}
        <Col  md={6}>
      <img src={imagebirdhay} className="img1"
       alt="img"/>
      </Col>
      
      </Row>
      </div>
   
      
      
  );
}
export default Update;
