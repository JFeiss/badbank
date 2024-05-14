
function Home() {
  return (
      <Card 
          bgcolor = "primary"
          txtcolor = "white"
          header = "Bad Bank Home Page"
          title = "Bad Bank Welcomes You"
          text = "Select a menu item from above to get started"
          body = {(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}        
      
      />

  );
}