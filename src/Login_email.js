import React, { useState } from 'react';


const ControlledInputs = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      const person = { id: new Date().getTime().toString(), password, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setPassword('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='login-form' onSubmit={handleSubmit}>
            
          <div>
            <input
              type='email'
              placeholder="Email"
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control ma"
            />

            <dib className="col-lg-3"></dib>

          </div>
            <input
              type='password'
              placeholder='Password'
              id='firstName'
              name='firstName'
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <dib className="col-lg-3"></dib>

          <button className='btn-lg btn-success btn-block ' type='submit'>Login</button>

          <dib className="col-lg-3"></dib>
          
          <div className='text-center'>
             <a href="/forgot-password">forgot your password?</a>
            <span className="p-2"> </span>
          </div>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
