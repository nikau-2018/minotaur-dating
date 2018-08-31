import request from 'superagent'

const rootUrl = 'http://192.168.1.156:3000/api'

export function getAllUsers () {
  return request.get(rootUrl + '/getAllUsers')
    .then(res => {
      console.log(res.body.users)
      return res.body.users
    })
}

export function getUser (id) {
  const reqStr = `getUser${id}`
  return request.get(rootUrl + reqStr)
    .then(res => {
      console.log('res.body.user', res.body.user)
      return res.body.user
    })
}

export function addUser (userData) {
  const testData = {
    name: 'TestName2',
    email: 'TestEmail',
    password: 'TestPassword',
    age: 'TestAge',
    bio: 'TestBio'
  }
  request
    .post(rootUrl + '/addUser')
    .set('Content-Type', 'application/json')
    .send(userData)
    // .send(testData)
    .end()
}
