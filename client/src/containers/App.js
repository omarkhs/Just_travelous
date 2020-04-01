import React, { Component } from 'react';
import AddCityForm from '../components/AddCityFrom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Layout } from '../components';
import theme from '../theme/theme';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.message }))
      .catch((err) => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <div className='App'>
            <h1 className='App-title'>Just travelous</h1>
            <AddCityForm />
            <p className='App-intro'>{this.state.data}</p>
          </div>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
