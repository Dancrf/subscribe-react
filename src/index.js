import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'

const SubscribeContainer = (
  <div className='subscribe-container'>
    <h1>Subscribe</h1>
    <p>Sign up with your email adress to receive news and updates</p>


    <form>
      <div className='form-inputs'>
        <input type="text" name="first-name" placeholder="First name" id="first-name"></input>
        <input type="text" name="last-name" placeholder="Last name" id="last-name"></input>
        <input type="email" name="email" placeholder="Email" id="email"></input>
      </div>

      <div className='form-button'>
        <button className='subscribe-button' type="submit">Subscribe</button>
      </div>
    </form>

  </div>
)

// const app = (
//   <div>
//     {SubscribeContainer}
//   </div>
// )

const rootElement = document.getElementById('root')
const root = createRoot(rootElement);
root.render(SubscribeContainer)
