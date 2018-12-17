import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Page from './components/page'
import Footer from './components/footer'
import Loader from 'react-loader-spinner'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: {},
      loading: false
    }
  }

  componentDidMount() {
    try {
      this.setState({ loading: true })
      setTimeout(() => {
        this.pageData()
        this.setState({ loading: false })
      }, 1000)
    } catch (err) {
      console.log('xxx')
    }
  }

  pageData() {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => this.setState({ page: json })
      )
  }
  render() {
    return (
      this.state.loading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height="100"
          width="100"
        />
      )
        :
        (
          <div className="App">
            <Header />
            {
              this.state.page.data && this.state.page.data.map((item, index) => (<Page key={'page-id' + index} name={item.name} avatar={item.avatar} />))
            }
            <Footer />
          </div>)
    )
  }
}

export default App;
