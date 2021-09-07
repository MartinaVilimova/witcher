import React from 'react';
import { Switch, Route } from 'react-router';
import './Styles.css';

// Pages
import Home from '../../Pages/Home';

const Routes: React.FC = () => (
	<Switch>
		{/* <Route path="/quests" component={Quests} />
		<Route path="/creatures" component={Creatures} />
		<Route path="/characters" component={Characters} /> */}
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
      <Routes />
  )

export default App;
