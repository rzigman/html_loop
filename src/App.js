import React from 'react';
import { DefaultButton, Icon } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';

import './App.css';

function App() {
  initializeIcons(undefined, { disableWarnings: true });
  return (
    <div className="App">
      <header className="App-header">
        <Icon iconName="Emoji2" className="smiley" style={{fontSize: 250}}/>
        <DefaultButton text="Click Here to Run the Loop!" onClick={() => loop()} />
      </header>
    </div>
  );
}

function loop() {
  alert('Clicked');
  var i = 1;
  var inte = setInterval(() => {
    doSomething(i);

    if (i === 50000) clearInterval(inte);
    i++;
  }, 500);
}

function doSomething(i) {
  var currentDate = new Date();
  console.log(i + " " + currentDate.getMilliseconds());
}

export default App;
