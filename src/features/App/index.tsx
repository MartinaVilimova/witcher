import React from 'react';
import { Switch, Route } from 'react-router';
import './Styles.css';

// Pages
import Home from '../../pages/Home';
import Characters from '../../pages/Characters';
import Quests from '../../pages/Quests';
import Creatures from '../../pages/Creatures';
import Detail from '../../pages/Detail';
import DetailMonster from '../../pages/DetailMonster';

const Routes: React.FC = () => (
	<Switch>
		<Route path="/detailMonster/:id" component={DetailMonster} />
		<Route path="/detail/:id" component={Detail} />
		{/* :id zápis parametru, který se bude měnit */}
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
