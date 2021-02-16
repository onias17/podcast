import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import PodcastRow from './components/PodcastRow'

const App = () => {
  return (
    <div className="site-wrap">
      <Header />
      <div className="site-selection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="featured-user mb-5 mb-lg-0">
                <ul className="list-unstyled">
                  <PodcastRow />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))