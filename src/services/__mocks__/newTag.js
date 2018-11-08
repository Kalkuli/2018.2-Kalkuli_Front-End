   export default async (tag) => {
        if(tag.category){
            return await new Promise(resolve => {
              resolve('success')
            })
        }
        else {
            return await new Promise(resolve => {
                resolve('error')
              }) 
        }
  }