import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  return res.json('list all users')
})

router.get('/new', (req, res) => {
  return res.json('new user form')
})

router.post('/', (req, res) => {
  return res.json('create new user')
})

router.get('/:id', (req, res) => {
  return res.json('show certain user')
})

router.get('/:id/edit', (req, res) => {
  return res.json('edit form to single user')
})

router.put('/:id', (req, res) => {
  return res.json('update certain user')
})

router.delete('/:id', (req, res) => {
  return res.json('delete certain user')
})

export { router }
