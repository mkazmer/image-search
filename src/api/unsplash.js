import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 66679fde59b7dcd582407360ce87a7e53e706e2a5c1068fb7ca4f7facb8c5816'
  }
})
