import React, { useState } from 'react';
import TableSubmit from '../table/table';
import { toast } from "react-toastify";
import useFields from '../CustomHook/useFields';

const SubmitForm = () => {
  const [arUsers,setArrUsers] = useState([])
  const email = useFields('email');
  const password = useFields('password');
  const country = useFields('');
  const gender = useFields('radio');
  const info = useFields('');
  const agree = useFields('checkbox');

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    if(password.value.length < 8 ) 
      toast.warning("Password more than 8 characters");
    else{
      if (
        !country.value || !email.value || !password.value || 
        !gender.value || !agree.value  
      ) {
        toast.warning("Fields marked with * cannot be left blank!");
        return;
      } else {
       const users = {
            email: email.value,
            password: password.value,
            country: country.value,
            gender: gender.value,
            info: info.value,
            agree: agree.value,
          }
        setArrUsers([...arUsers,{...users,id}]);  
        console.log(arUsers);
        toast.success("Submit Success!");
      }
    }
  }

  const handleOnDelete = (user) => {
    const newData = arUsers.filter((item) => user.id !== item.id);
    setArrUsers(newData);
  };
 
return (
  <>
      <form onSubmit={(e) => handleOnSubmit(e)}>
    <h1 className='title'>Register</h1>
        <div className="form-control">
          <label htmlFor="email">Email <span>*</span> </label>
          <input {...email} id='email' name='email' />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password <span>*</span> </label>
          <input {...password} id="password" name="password" placeholder='Password more than 8 characters' />
        </div> 
        <div className="form-control">
          <label >Your country <span>*</span> </label>
          <select name="country" {...country}>
            <option >Choose your country</option>
            <option value="VietNam">VietNam</option>
            <option value="Lao">Lao</option>
          </select>
        </div>
        <div className="form-control">
          <label>Gender <span>*</span> </label>
          <input 
          {...gender}
          value="0" 
          name="gender" 
          defaultChecked={gender.value === 0} 
          
          />Male
          <input 
          {...gender}
          value="1" 
          name="gender" 
          defaultChecked={gender.value === 1} 
          
          />Female
        </div>
        <div className="form-control">
          <label>Orther infomation</label>
          <textarea name="info" {...info}></textarea>
        </div>
        <div className="form-control agree">
          <label >Agree with our terms? </label>
          <input  {...agree} name="agree" defaultChecked={agree.value} />
        </div>
         <div className="btn-set">
          <input type='submit' value='submit'/>
        </div>
      </form>
      <TableSubmit arrUser={arUsers}                 
                  handleOnDeleteBtn = {(item) => handleOnDelete(item)}  />
    </>
  );
}

export default SubmitForm;

