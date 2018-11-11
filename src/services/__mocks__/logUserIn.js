export default async (user) => {
  if(user.password) {
    return await new Promise(resolve => {
      resolve('success')
    })
  } else {
    return await new Promise(resolve => {
      resolve('error')
    })
  }
}