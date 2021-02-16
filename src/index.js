import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'

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
                  <li>
                    <a href="#" className="d-flex align-items-center  p-2">
                      <img src="images/person_1.jpg" alt="Image" className="img-fluid mr-2" />
                      <div className="podcaster">
                        <span className="d-block">Claire Stanford</span>
                        <span className="small">32,420 podcasts</span>
                      </div>
                    </a>
                  </li>
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