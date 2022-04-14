import React,{ useState} from 'react'

 function KeyDemoComponent() {
    const [users] =useState([{Userame:"John"},{Userame:"John12"},{Userame:"John_nit"},{Userame:"David"}])
    const [userMessage,setUserMrssage] =useState("")
    const [isValid,SetIsValid] = useState(false)
    const [showWarning,setShowWarning] = useState(false)
    const [pwdMessage,setPwdMrssage] =useState("")
    const [regExp] = useState(/(?=.*[A-Z])\w{4,10}/)
    const [offer,setOffer] = useState("")
    
    function VerifyUserName(event) {
        for(var user of users){
            if(user.Userame == event.target.value){
                setUserMrssage("User Name is takend try another")
                SetIsValid(false)
                break;
            }else{
                SetIsValid(true)
                setUserMrssage("User Name available")
            }
        } 
    }
    function VerifyPassword(event) {
        if(event.which >=65&& event.which <=90||event.keyCode >=65&& event.keyCode <=90){
            setShowWarning(true)
        
        }else{
            setShowWarning(false)
        }


    }
    function NameBlur(event) {
        setUserMrssage("")
    }
    function CheckPaswordStrenth(event){
        if(event.target.value.match(regExp)){
            setPwdMrssage("Strong Pasword")
        }else if(event.target.value.length == 0){
            setPwdMrssage("Paswoord required")
        }
        else{
            if(event.target.value.length<4){
            setPwdMrssage("Poor Pasword")}
            else{
                setPwdMrssage("week paswoord")
            }
        }
    }
     function GetImageId(event) {
        switch(event.target.id){
            case"baki":
            setOffer("50% of on all smart baki's")
            break;
            case"item-1":
            setOffer("10% of on all  soaps ")
            break;
            case"item-2":
            setOffer("30% of on all shirts")
            break;
        }
     }   
    return (
        <div className="container-fluid"> 
            <h2>Products</h2>
            <img id ="baki" alt ="pic" onTouchStart={GetImageId} src={"images/baki.jpg"} width ="100" height ="100"></img>
            <img id="item-1" alt ="pic" onTouchStart={GetImageId} src={"images/item-1.jpg"} width ="100" height ="100"></img>
            <img id ="item-2" alt ="pic" onTouchStart={GetImageId} src={"images/item-2.jpg"} width ="100" height ="100"></img>
            <h1>{offer}</h1>
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp ={VerifyUserName}  onBlur={NameBlur} /></dd>
                <dd className={(isValid ==true)?"text-success":"text-danger"}> {userMessage}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={CheckPaswordStrenth} onKeyPress={VerifyPassword} ></input></dd>
                <dd className ={(showWarning == true)?"d-block":"d-none"}>
                     <span className="bi bi-exclamation-triangle-fill"></span>
                     Caps on
                </dd>
                <dd>{pwdMessage}</dd>
            </dl>
        </div>
    )
}



export default KeyDemoComponent
