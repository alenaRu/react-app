import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/app/App";
import './index.scss';


const rootEl = document.getElementById("root");
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/app/App", () => {
    const NextApp = require<any>("./components/app/App").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>
      ,
      rootEl
    );
  });
}

// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { AppContainer } from "react-hot-loader";
// import App from "./components/app/App";
// import './index.scss';




// var React = require<any>('react');
// var ReactDOM = require<any>('react-dom');


// function renderApp() {  
  
//   ReactDOM.render(
//     (<AppContainer>
//        <App />
//     </AppContainer>),
//     document.getElementById('root')
//   );
//   console.log();
  

// }

// renderApp(); // Renders App on init

// if (module.hot) {  
//   console.log(typeof App); debugger;
  
//   // Renders App every time a change in code happens.
//   module.hot.accept('./components/app/App.tsx', renderApp);
// }
