function Login() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checking, setChecking] = React.useState(false);
  const [savings, setSavings] = React.useState(false);
     

  //const UserContext = React.createContext({users:[]});


//  const ctx = React.useContext(UserContext);
  const currentUserCtx = React.useContext(currentUserContext);
  const ctx = React.useContext(UserContext);   
  console.log(JSON.stringify(ctx));
  //console.log(JSON.stringify(ctx.users));


  function getUser() {
      const users = ctx.users;
      for (const [index, user] of Object.entries(users)) {
          if (email === user.email & password === user.password & checking === user.checking & savings === user.savings) {
              clearForm();
              return [index, user];
          }
      }
      alert('Password, UserID or Account type not correct');   
      clearForm();
      return {};
  }

  function updateCurrentUser(name, email, password, balance, checking, savings, index, loginStatus) {
      currentUserCtx.name = name;
      currentUserCtx.email = email;
      currentUserCtx.password = password;
      currentUserCtx.balance = balance;
      currentUserCtx.checking = checking;
      currentUserCtx.savings = savings;
      currentUserCtx.index = index;
      currentUserCtx.loginStatus = loginStatus 

  }
  
  function login() {
      console.log('Login email is ' + email + ' password is ' + password + ' checking is ' + checking + ' savings is ' + savings) ;
      const user = getUser();
      if (user.length > 0) {
          if (Object.keys(user[1]).length > 0) {
              updateCurrentUser(user[1].name, user[1].email, user[1].password, user[1].balance, user[1].checking, user[1].savings, user[0], true);
              setShow(false);
          } else {
              updateCurrentUser('', '', '', 0, 0, false);
          }
          console.log('user ' + JSON.stringify(currentUserCtx));  
      }else {
          alert('No Valid User');
      }
  }


  function clearForm() {
      setEmail('');
      setPassword('');
      setShow(true);
      setChecking(false);
      setSavings(false);
  }

  return (
      <Card
      cardWidth='80%'
      bgcolor="warning"
      txtcolor="black"
      fontSizeHeader="5.95"
      headerBgColor="info"
      header="Login"
      headerDisplay='flex'
      headerJustifyContent='center'
      bodyAlign="center"
      bodyContentAlign='center'
      body={show ? (
          <>
              <br/><input style={{maxWidth: '275px', margin: 'auto'}} type="input" className="form-control" id="email"
              placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} />

              <br/><input style={{maxWidth: '275px', margin: 'auto'}} type="password" className="form-control" id="password"
              placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} />

              Checking Account <br/>
              <input type="checkbox" className="form-check-input" id="checking" value={checking} onChange={e=>setChecking(e.currentTarget.checked)} /><br/> 
              Savings Account <br/> 
              <input type="checkbox" className="form-check-input" id="savings" value={savings} onChange={e=>setSavings(e.currentTarget.checked)} /><br/> 

              <br/><button style={{justifyContent: 'center'}}type="submit" className="btn btn-light" onClick={login}>Login</button>
          </>
      ):(
          <>
              <h5 style={{textAlign: 'center'}}>{currentUserCtx.name}, is logged in  </h5>
              <strong>{(new Date()).toString()}</strong>
          </>
      )}   
      />        
  )
}

