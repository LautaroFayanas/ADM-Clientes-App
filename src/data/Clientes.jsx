
const url = 'http://localhost:3000/clientes'

export async function obtenerClientes() { 
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return resultado
}

export async function obtenerCliente(id) { 
    const respuesta = await fetch(`${url}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarCliente(datos){
    try {
        const resupuesta = await fetch(url , {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resupuesta.json();
        
    } catch (error) {
        console.log(error);
    }
}

export async function actualizarCliente(id, datos){
    try {
        const resupuesta = await fetch(`${url}/${id}` , {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resupuesta.json();
        
    } catch (error) {
        console.log(error);
    }
}   


export async function eliminarCliente(id , datos){
    try {
        const resupuesta = await fetch(`${url}/${id}` , {
            method: 'DELETE',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await resupuesta.json();
        
    } catch (error) {
        console.log(error);
    }
}