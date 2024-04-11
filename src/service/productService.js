import axios from 'axios'
export async function getList(){
    const response = await axios.get('http://localhost:3000/products')
    return response.data
}

export async function addProduct(product){
    await axios.post('http://localhost:3000/products', product)
}

export async function updateProduct(product){
    await axios.put(`http://localhost:3000/products/${product.id}`,product)
}

export async function deleteProduct(id){
    await axios.delete(`http://localhost:3000/products/${id}`)
}