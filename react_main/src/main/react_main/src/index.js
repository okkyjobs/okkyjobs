import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <GoogleOAuthProvider clientId="746948307914-midde1q7s8btvfmr3lf80to82aut3vdi.apps.googleusercontent.com"
        // onScriptLoadError={() => console.log("실패")}
        // onScriptLoadSuccess={() => console.log("성공")}
        >
	<App />
</GoogleOAuthProvider>
      </BrowserRouter>

);
reportWebVitals();
