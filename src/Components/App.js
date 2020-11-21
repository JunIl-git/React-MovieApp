import React from 'react';
import Router from 'Components/Router';
import Header from 'Components/Header/Header';

class App extends React.Component {
  render(){
    return (
      // fragment <></> 
      <>    
        <Header/>
        <Router/>
      </>
    )
  }
}

export default App;
