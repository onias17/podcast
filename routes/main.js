const express = require('express')
const axios = require('axios')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/feed', (req, res, next) => {
  const url = req.query.url

  res.json({
    data: 'Christ is King',
    url
  })
})

router.get('/search', async (req, res, next) => {
  const url = 'https://itunes.apple.com/search?term=sports&country=US&media=podcast'
  const { data } = await axios({
    url,
    method: 'get',
    options: {
      headers: {Accept: 'application/json'}
    }
  })

  const { results } = data
  const podcasts = results.map(podcast => {
    return {
      name: podcast.artistName,
      trackName: podcast.trackName,
      icon: podcast.artWorkUrl600,
      genres: podcast.genres,
      feed: podcast.feedUrl
    }
  })

  res.json({results})
})

router.post('/search', async (req, res, next) => {
  const searchTerm = req.body.term
  const url = `https://itunes.apple.com/search?term=${searchTerm}&country=US&media=podcast`
  const { data } = await axios({
    url,
    method: 'get',
    options: {
      headers: {Accept: 'application/json'}
    }
  })

  const { results } = data
  const podcasts = results.map(podcast => {
    return {
      id: podcast.trackId,
      name: podcast.artistName,
      image: podcast.artworkUrl60,
      categories: podcast.genres,
      trackName: podcast.trackName,
      feed: podcast.feedUrl
    }
  })

  res.json({podcasts})
})

module.exports = router;