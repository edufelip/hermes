import mongoose from 'mongoose'
import request from 'supertest'
import { app } from '../../app'
import User from '@schemas/User'
import { UserModel } from '@models/User'
import factory from '../factories'
import faker from 'faker'

describe('updateUser', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) {
      throw new Error('MongoDB server not initialized')
    }
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
  })
  afterAll(async () => {
    await mongoose.connection.close()
  })
  afterEach(async () => {
    await User.deleteMany({})
  })

  it('should access route and udpate an user', async () => {
    const newUser: UserModel = await factory.create('User')
    const name = faker.name.findName()
    const password = faker.internet.password()
    await request(app).put(`/users/${newUser._id}`).send({ name: name, password: password }).expect(200)
  })

  it('should access route and fail to update an user (empty name)', async () => {
    const newUser: UserModel = await factory.create('User')
    const name = ''
    const password = faker.internet.password()
    await request(app).put(`/users/${newUser._id}`).send({ name: name, password: password }).expect(400)
  })
  it('should access route and fail to update an user (empty password)', async () => {
    const newUser: UserModel = await factory.create('User')
    const name = faker.name.findName()
    const password = ''
    await request(app).put(`/users/${newUser._id}`).send({ name: name, password: password }).expect(400)
  })
})
