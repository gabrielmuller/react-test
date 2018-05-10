import React, { Component } from 'react';

import Navbar from './components/navbar';
import Container from './components/container'
import VideoListView from './views/video-list'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
            <VideoListView />
        </Container>
        <div style={{width: '300px', height: '200px'}}>
        </div>
      </div>
    );
  }
}

export default App;
