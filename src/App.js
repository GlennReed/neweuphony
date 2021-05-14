import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import CommunityPage from './content/CommunityPage';
import LogsPage from './content/LogsPage';


//import CommunityPage from './content/CommunityPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/community" component={CommunityPage} />
            <Route path="/logs" component={LogsPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
