function AllData() {

  const currentUserCtx = React.useContext(currentUserContext);

  const [isValid, setisValid] = React.useState(false);

  const [amount, setAmount] = React.useState("");
  const ctx = React.useContext(UserContext);

 


  function getData(){
      var data = JSON.stringify(ctx.users[currentUserCtx.index]);

//Transaction History
  var list = document.createElement("ol");
  for (let i of data) {
      let item = document.createElement("li");
      item.innerHTML = i;
      list.appendChild(item);
  }
  
  document.getElementById("demoA").appendChild(list);
  }
  
  
  return (
      <Card 
          
          header="Transaction History"
        
          bgcolor="info"
          txtcolor="black"
          

          body={currentUserCtx.loginStatus ? (
        <div>
            <br/>
            <div>
                <h5>Bank Customer: {ctx.users[currentUserCtx.index].name}</h5>
                <h5>Email: {ctx.users[currentUserCtx.index].email}</h5>
                <h5>Balance: ${ctx.users[currentUserCtx.index].balance}</h5>
                <h6>Checking: {String(ctx.users[currentUserCtx.index].checking)} </h6>
                <h6>Savings: {String(ctx.users[currentUserCtx.index].savings)}</h6> 
                <h3>Recent Transactions</h3>
                <h6>________________________________________________________________</h6>
                <h6>{ctx.users[currentUserCtx.index].history}</h6>
            </div>
            <br/>
        </div>
      ):(
          <div>
              <h5>Please login to your acount for access</h5>
              
          </div>
      )
      }
      />
  );


}