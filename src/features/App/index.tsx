import React from 'react';
import { Switch, Route } from 'react-router';
import './Styles.css';

// Pages
import Home from '../../pages/Home';
import Characters from '../../pages/Characters';
import Quests from '../../pages/Quests';
import Creatures from '../../pages/Creatures';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/quests" component={Quests} />
		<Route path="/creatures" component={Creatures} />
		<Route path="/characters" component={Characters} />
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
      <Routes />
  )

export default App;
