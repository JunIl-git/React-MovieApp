import React from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/GlobalStyles';

class App extends React.Component {
  render(){
    return (
      // fragment <></> 
      <>    
        <Router />
        <GlobalStyles />
      </>
    )
  }
}

export default App;
