import React from "react";

const SignInPopUp = () => {
  return (
    <>
      {/* Signin Popup */}
      <div className='sen-user-modal'>
        {" "}
        {/* this is the entire modal form, including the background */}
        <div className='sen-user-modal-container'>
          {" "}
          {/* this is the container wrapper */}
          <ul className='sen-switcher'>
            <li>
              <a href='#0'>Sign in</a>
            </li>
            <li>
              <a href='#0'>Sign up</a>
            </li>
          </ul>
          <div id='sen-login'>
            {" "}
            {/* log in form */}
            <form className='sen-form'>
              <p className='fieldset'>
                <label
                  className='image-replace sen-email'
                  htmlFor='signin-email'
                >
                  E-mail
                </label>
                <input
                  className='full-width has-padding has-border'
                  id='signin-email'
                  type='email'
                  placeholder='E-mail'
                />
                <span className='sen-error-message'>Error message here!</span>
              </p>
              <p className='fieldset'>
                <label
                  className='image-replace sen-password'
                  htmlFor='signin-password'
                >
                  Password
                </label>
                <input
                  className='full-width has-padding has-border'
                  id='signin-password'
                  type='text'
                  placeholder='Password'
                />
                <a href='#0' className='hide-password'>
                  Hide
                </a>
                <span className='sen-error-message'>Error message here!</span>
              </p>
              <p className='fieldset'>
                <input type='checkbox' id='remember-me' defaultChecked='' />
                <label htmlFor='remember-me'>Remember me</label>
              </p>
              <p className='fieldset'>
                <input
                  className='full-width'
                  type='submit'
                  defaultValue='Login'
                />
              </p>
            </form>
            <p className='sen-form-bottom-message'>
              <a href='#0'>Forgot your password?</a>
            </p>
            {/* <a href="#0" class="sen-close-form">Close</a> */}
          </div>{" "}
          {/* sen-login */}
          <div id='sen-signup'>
            {" "}
            {/* sign up form */}
            <form className='sen-form'>
              <p className='fieldset'>
                <label
                  className='image-replace sen-username'
                  htmlFor='signup-username'
                >
                  Username
                </label>
                <input
                  className='full-width has-padding has-border'
                  id='signup-username'
                  type='text'
                  placeholder='Username'
                />
                <span className='sen-error-message'>Error message here!</span>
              </p>
              <p className='fieldset'>
                <label
                  className='image-replace sen-email'
                  htmlFor='signup-email'
                >
                  E-mail
                </label>
                <input
                  className='full-width has-padding has-border'
                  id='signup-email'
                  type='email'
                  placeholder='E-mail'
                />
                <span className='sen-error-message'>Error message here!</span>
              </p>
              <p className='fieldset'>
                <label
                  className='image-replace sen-password'
                  htmlFor='signup-password'
                >
                  Password
                </label>
                <input
                  className='full-width has-padding has-border'
                  id='signup-password'
                  type='text'
                  placeholder='Password'
                />
                <a href='#0' className='hide-password'>
                  Hide
                </a>
                <span className='sen-error-message'>Error message here!</span>
              </p>
              <p className='fieldset'>
                <input type='checkbox' id='accept-terms' />
                <label htmlFor='accept-terms'>
                  I agree to the <a href='#0'>Terms</a>
                </label>
              </p>
              <p className='fieldset'>
                <input
                  className='full-width has-padding'
                  type='submit'
                  defaultValue='Create account'
                />
              </p>
            </form>
            {/* <a href="#0" class="sen-close-form">Close</a> */}
          </div>{" "}
          {/* sen-signup */}
          <div id='sen-reset-password'>
            {" "}
            {/* reset password form */}
            <p className='sen-form-message'>
              Lost your password? Please enter your email address. You will
              receive a link to create a new password.
            </p>
            <form className='sen-form'>
              <p className='fieldset'>
                <label
                  className='image-replace sen-email'
                  htmlFor='reset-email'
                >
                  E-mail
                </label>
                <input
                  className='full-width has-padding has-border'
                  id='reset-email'
                  type='email'
                  placeholder='E-mail'
                />
                <span className='sen-error-message'>Error message here!</span>
              </p>
              <p className='fieldset'>
                <input
                  className='full-width has-padding'
                  type='submit'
                  defaultValue='Reset password'
                />
              </p>
            </form>
            <p className='sen-form-bottom-message'>
              <a href='#0'>Back to log-in</a>
            </p>
          </div>{" "}
          {/* sen-reset-password */}
          <a href='#0' className='sen-close-form'>
            Close
          </a>
        </div>
      </div>{" "}
      {/* sen-user-modal */}
    </>
  );
};

export default SignInPopUp;
