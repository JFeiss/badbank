function CreateAccount() {
  const ctx = React.useContext(UserContext);   

  const [show, setShow] =         React.useState(true);
  const [status, setStatus] =     React.useState('');
  const [name, setName] =         React.useState('');
  const [email, setEmail] =       React.useState('');
  const [password, setPassword] = React.useState('');
  const [checking, setChecking] = React.useState(false);
  const [savings, setSavings] =   React.useState(false);

  function validate(field,label){
      if(!field) {
          setStatus('Error: ' + label)
          setTimeout(() => setStatus(''),3000);
          return false;
      }
      return true;
  }

  function handleCreate(){
      console.log(name,email,password);
      if(!validate(name,      'name')) return;
      if(!validate(email,     'email')) return;
      if(!validate(password,  'password')) return;
      if(checking && savings){
          setStatus('Error: Cannot select both Checking and Savings')
          setTimeout(() => setStatus(''),3000);
          return;
      }

      ctx.users.push({name,email,password,checking,savings,balance:0,history:[]})
      setShow(false);
  }


  function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
      setChecking(false);   
      setSavings(false);  
  }

  return (
      <Card
      cardWidth='60%'
      bgcolor="warning"
      txtcolor="black"
      bodyContainerWidth='750px'
          
     header="Create Account"
      status={status}
      body={show ? (
              <>
      Name<br/>
       <input type="input" className="form-control" id="name"
       placeholder="Submit Name" value={name} onChange={e=>setName(e.currentTarget.value)} /><br/>
      Email Address<br/>
       <input type="input" className="form-control" id="email"
       placeholder="Submit Email" value={email} onChange={e=>setEmail(e.currentTarget.value)} /><br/>
      Password<br/>
       <input type="input" className="form-control" id="password"
              placeholder="Submit Password" value={password} onChange={e=>setPassword(e.currentTarget.value)} /><br/>
      Checking Account <br/>
      <input type="checkbox" className="form-check-input" id="checking" value={checking} onChange={e=>setChecking(e.currentTarget.checked)} /><br/> 
      Savings Account <br/> 
        <input type="checkbox" className="form-check-input" id="savings" value={savings} onChange={e=>setSavings(e.currentTarget.checked)} /><br/> 
      <button type="submit" className="btn btn-dark"onClick={handleCreate}>Create Account</button>
                    </>
          ):(
              <>
       <h5>Account added</h5>   
       <button type="submit" className="btn btn-dark" onClick={clearForm}>Add Another Account</button>              
              </>
          )}        
      
      />        
      
  );
}


