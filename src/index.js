import React from 'react'
import ReactDOM from 'react-dom'
import Episode from './components/Episode'
import Header from './components/Header'
import PodcastRow from './components/PodcastRow'

const App = () => {
  const podcasts = [
    {id: 0, name: 'podcast 1', image: '/images/person_1.jpg', categories: ['sports', 'entertainment']},
    {id: 1, name: 'podcast 2', image: '/images/person_2.jpg', categories: ['news', 'politics']},
    {id: 2, name: 'podcast 3', image: '/images/person_3.jpg', categories: ['business', 'economics']},
  ]
  
  const episodes = [
    {id: 0, title: 'track 1', image: '/images/img_1.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
    {id: 1, title: 'track 2', image: '/images/img_2.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
    {id: 2, title: 'track 3', image: '/images/img_3.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
    {id: 3, title: 'track 4', image: '/images/img_4.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
    {id: 4, title: 'track 5', image: '/images/img_5.jpg', trackUrl: 'http://hwcdn.libsyn.com/p/e/2/d/e2d49676d65218ec/p1541a.mp3?c_id=84308228&cs_id=84308228&expiration=1601254668&hwt=ccab3206052417d0e901722ab00c9c88'},
  ]

  return (
    <div className="site-wrap">
      <Header />
      <div className="site-selection">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="featured-user mb-5 mb-lg-0">
                <h3 className="mb-2">Search Podcasts</h3>
                <div style={{ display: "flex" }}>
                  <input type="text" style={{ height: 32 }} className="form-control mb-4" />
                  <button className="btn btn-info p-1 ml-2" style={{ height: 32 }}>GO!</button>
                </div>
                <ul className="list-unstyled">
                  {podcasts.map(podcast => <PodcastRow key={podcast.id} {...podcast}/>)}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              {episodes.map(episode => <Episode key={episode.id} {...episode}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))