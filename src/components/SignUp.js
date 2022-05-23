import React from 'react';

function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <input type="text" name="username-first" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="username-last" placeholder="Last Name" />
        </div>
        <div>
          <input type="email" name="email-address" placeholder="Email" />
        </div>
        <div>
          <input type="phone" name="phone" placeholder="Phone Number" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SignUp;
