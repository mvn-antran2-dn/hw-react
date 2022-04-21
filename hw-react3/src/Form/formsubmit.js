import React, {Component} from 'react';
import TableSubmit from './table';
import { toast } from "react-toastify";

class SubmitForm extends Component{
  constructor(){
    super();
    this.state = {
      id: '',
      email: '',
      password: '',
      country: 'VietNam',
      gender: '',
      info: '',
      agree: true,
      arrUser: [],
    };
  }

  handleOnChange(evt) {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

  this.setState({
    id: Math.floor(Math.random() * 10000),
    [name] : value
  });
  }

  handleOnSubmit(evt){
    evt.preventDefault();
    if(this.state.password.length < 8 ) 
      toast.warning("Password more than 8 characters");
      else{
        if (
          !this.state.country || !this.state.email || !this.state.password || 
          !this.state.gender || !this.state.agree  
        ) {
          toast.warning("Fields marked with * cannot be left blank!");
          return;
        } else {
          const { id, email, password, country, gender, info, agree, arrUser } = this.state;
          const item = { id, email, password, country, gender, info, agree };
          this.setState({ arrUser: [...arrUser, item] });
          toast.success("Register Success!");
        }
      }
    
  }

  handleDeleteUser = (user) => {
    let currentUser = this.state.arrUser;
    currentUser = currentUser.filter((item) => item.id !== user.id);
    this.setState({ arrUser: [...currentUser] });
  };

  render(){
    return (<>
    <h1 className='title'>Register</h1>
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <div className="form-control">
          <label htmlFor="email">Email <span>*</span> </label>
          <input id="email" type="email" name ="email" onChange={(e) => this.handleOnChange(e)}/>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password <span>*</span> </label>
          <input id="password" type="password" name="password" placeholder='Password more than 8 characters' onChange={(e) => this.handleOnChange(e)}/>
        </div> 
        <div className="form-control">
          <label >Your country <span>*</span> </label>
          <select name="country" onChange={(e) => this.handleOnChange(e)}>
            <option value="VietNam">VietNam</option>
            <option value="Lao">Lao</option>
          </select>
        </div>
        <div className="form-control">
          <label>Gender <span>*</span> </label>
          <input 
          type="radio" 
          value="0" 
          name="gender" 
          defaultChecked={this.state.gender === 0} 
          onChange={(e)  => this.handleOnChange(e)}
          />Male
          <input 
          type="radio" 
          value="1" 
          name="gender" 
          defaultChecked={this.state.gender === 1} 
          onChange={(e) => this.handleOnChange(e)} 
          />Female
        </div>
        <div className="form-control">
          <label>Orther infomation</label>
          <textarea name="info" onChange={(e) => this.handleOnChange(e)}></textarea>
        </div>
        <div className="form-control agree">
          <label >Agree with our terms? </label>
          <input  type="checkbox" name="agree" defaultChecked={this.state.agree} onChange={(e) => this.handleOnChange(e)}/>
        </div>
        <div className="btn-set">
          <button onClick={(e) => this.handleOnSubmit(e)}>Submit</button>
        </div>
      </form>
      <TableSubmit arrUser={this.state.arrUser} 
          handleDeleteUser={this.handleDeleteUser}/>
      </>
    );
  }
}

export default SubmitForm;
