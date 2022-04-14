
function NetflixRegisterCompnent(){
    
   
        return (
          <div>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className = "input-group input-group-lg">
                  <input type="email" placeholder="your email adress" className="form-control"></input>
                  <button className="btn btn-danger">
                      <span className = "bi bi-chevron-right"> Get started</span>
                  </button>
              </div>
          </div>  
        )
    
}

export default NetflixRegisterCompnent
