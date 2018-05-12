import moment from 'moment'

export const formatName = (name) => {
  name = name.split(' ')
  name.shift()
  return name.join(' ')
}

export const formatDate = (dateString) => {
  return moment(dateString).format('MMM DD, HH:mm')
}

export const getOriginalFileName = (url) => {
  let arr = url.split('/').pop().split('-')
  arr.shift()
  return arr.join('-')
}
