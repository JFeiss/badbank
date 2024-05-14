function Balance() {
  const currentUserCtx = React.useContext(currentUserContext);

  const [deposit, setDeposit] = React.useState();
  const [amount, setAmount] = React.useState("");
  const ctx = React.useContext(UserContext);

  

      function getBalance() {
          console.log(`balance: ${amount}`);
          return ctx.users[currentUserCtx.index].balance;
          
      }
      function getUser() {
          return ctx.users[currentUserCtx.index].name;
      }


      

      return (
          <Card
              header="Balance" 
              cardWidth='45%'
              bgcolor="success"
              txtcolor="black"
              bodyContainerWidth='500px'
      
              body={currentUserCtx.loginStatus ? (
              <>
                  <br/>
                      <div >
                          <h5>Bank Customer:<br/> {getUser()} </h5>
                          <br/>
                          <h5>Balance: ${getBalance()}</h5>
                          
                      </div>
                  <br/>
                         
              </>
          ):(
              <div>
                  <h5>Please login to your account for access </h5>
                  
              </div>
          )
          }
          />
      );
}
