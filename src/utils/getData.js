import data from '../data/data.json'

export const getCat = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    })
}


export const getId = (id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((item) => item.id === id)
        
        if (item) {
            resolve(item)
        } else {
            reject({
                Error: 'No se encontró el producto'
            })
        }
    })
}