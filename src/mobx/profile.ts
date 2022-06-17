import { makeAutoObservable } from 'mobx'
import { profileApi } from '../api/api'
import { ResultCodes } from '../api/types'
import { Nullable } from '../store/types/common'
import { Photos, ProfileFormData, ProfileInfo } from '../store/types/profile'
import auth from './auth'
class Profile {
  profileInfo = {} as ProfileInfo

  posts = [
    {
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      text: 'lor sit amet',
    },
    {
      text: 'ipsum dolor',
    },
  ]
  status = 'loading'

  constructor() {
    makeAutoObservable(this)
  }

  addPost(post: string) {
    this.posts.push({ text: post })
  }

  setProfile(data: ProfileInfo) {
    this.profileInfo = data
  }

  setLoading = () => {
    this.status = 'loading'
  }

  setStatus = (status: string) => {
    this.profileInfo.status = status
    this.status = 'fulfilled'
  }

  setAvatar = (imgSrc: Photos) => {
    this.profileInfo.photos = imgSrc
  }

  clearProfile = () => {
    this.profileInfo = {} as ProfileInfo
    this.status = 'initial'
    this.posts = []
  }

  loadProfile = async (id: number) => {
    try {
      this.setLoading()
      const { status, data } = await profileApi.getProfileById(id)
      if (status === 200) {
        this.setProfile(data)
        await this.getStatus(id)
      }
      if (status.toString().startsWith('5')) {
        this.status = 'serverError'
      }
    } catch (error) {
      console.error(error)
    }
  }

  getStatus = async (id: number) => {
    try {
      const { data, status } = await profileApi.getProfileStatusById(id)
      if (status === 200) {
        this.setStatus(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  updateStatus = async (status: string) => {
    try {
      const { resultCode } = await profileApi.updateUserStatus(status)
      if (resultCode === ResultCodes.Success) {
        this.setStatus(status)
      } else if (resultCode === ResultCodes.Error) {
        status = status.slice(0, 50)
        this.setStatus(status)
      }
    } catch (error) {
      console.error(error)
    }
  }

  loadUserAvatar = async (img: any) => {
    const { data, resultCode } = await profileApi.setAvatar(img)
    try {
      if (resultCode === ResultCodes.Success) {
        this.setAvatar(data.photos)
      }
    } catch (error) {
      console.log(error)
    }
  }

  updateProfileInfo = async (formData: ProfileFormData) => {
    const userId = auth.userId as number
    const { resultCode } = await profileApi.updateProfileInfo(formData)
    try {
      if (resultCode === ResultCodes.Success) {
        this.loadProfile(userId)
      } else {
        console.error(resultCode)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

export default new Profile()
