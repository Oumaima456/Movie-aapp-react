import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
class Modals extends Component{
state={newfilm:"",newrate:"0",newimage:"", show:false}
filmName=(e)=>{this.setState({newfilm:e.target.value})};
filmRate=(e)=>{this.setState({newrate:e.target.value})};
filmImage=(e)=>{this.setState({newimage:e.target.value})};
handleshow=()=>{this.setState({show:!this.state.show})};




render()
{
    return(<div>
        <Button variant="secondary" className="Modal-cont" onClick={this.handleshow}>
        <img className="Modal-img" src="https://cdn3.iconfinder.com/data/icons/glyph/227/Button-Add-1-512.png"/>
         
        </Button>
        <Modal className="Modal-content" show={this.state.show} onHide={this.handleshow} animation={false}>
          <Modal.Header style={{background: "#D8DEDE"}} closeButton>
            <Modal.Title style={{marginLeft: "25%"}}>Insert New Movie</Modal.Title>
          </Modal.Header>

          <Modal.Body className="Modal-input" >
            
            <form 
             onSubmit={e => {
              e.preventDefault();
            
              this.setState({ show: false,
                newfilm:"",
                newrate:"0",newimage:"", show:false} );


            }}
          >
              <label className="MN fname">Enter a movie name:</label>
              <input className="title-input input"  placeholder="Movie's Name" name='title' type='text' onChange={this.filmName}/>
              <label className="MI fname">Enter an image for your movie</label>-
              <input className="img-input input" placeholder="Your image's movie" name='image' type='text' onChange={this.filmImage}/>
              <label className="MR fname">Give a rate to your movie:</label>
              <input className="rating-input input" placeholder="Rate" name='rating' type='text'  onChange={this.filmRate}/>
              <button className="bou" variant="primary" onClick={()=>this.props.addMovie(this.state.newimage,this.state.newfilm,this.state.newrate)}>Save Changes
                  </button>
              
              </form >
          </Modal.Body>
          <Modal.Footer>
            <Button className="bou" variant="secondary" onClick={this.handleshow}>
              Close
            </Button>
          
          </Modal.Footer>
        </Modal>

    </div>);
}}

export default Modals