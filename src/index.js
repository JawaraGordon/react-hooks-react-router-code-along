import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NavBar from './components/Navbar';

// const linkStyles = {
//   display: 'inline-block',
//   width: '50px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// };

// function NavBar() {
//   return (
//     <div>
//       <NavLink
//         to="/"
//         exact
//         /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//         /* add styling to Navlink */
//         style={linkStyles}
//         /* add prop for activeStyle */
//         activeStyle={{
//           background: 'darkblue',
//         }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: 'darkblue',
//         }}
//       >
//         SignUp
//       </NavLink>
//       <NavLink
//         to="/signup"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: 'darkblue',
//         }}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: 'darkblue',
//         }}
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/messages"
//         exact
//         style={linkStyles}
//         activeStyle={{
//           background: 'darkblue',
//         }}
//       >
//         Messages
//       </NavLink>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About Us</h1>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function Messages() {
//   return (
//     <div>
//       <h1>Messages</h1>
//     </div>
//   );
// }

// function SignUp() {
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form>
//         <div>
//           <input type="text" name="username-first" placeholder="First Name" />
//         </div>
//         <div>
//           <input type="text" name="username-last" placeholder="Last Name" />
//         </div>
//         <div>
//           <input type="email" name="email-address" placeholder="Email" />
//         </div>
//         <div>
//           <input type="phone" name="phone" placeholder="Phone Number" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Switch>
//       <Route exact path="/about">
//         <About />
//       </Route>
//       <Route exact path="/signup">
//         <SignUp />
//       </Route>
//       <Route exact path="/login">
//         <Login />
//       </Route>
//       <Route exact path="/messages">
//         <Messages />
//       </Route>
//       <Route exact path="/">
//         <Home />
//       </Route>
//     </Switch>
//   );
// }

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
