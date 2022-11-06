import { useLoaderData } from "react-router-dom";
import { Clientes } from "../components/Clientes";
import { obtenerClientes } from "../data/Clientes";


//Parecido al USEEFFECT , el useLoaderData . 
//Generamos una funcion que retorne nuestros clientes , y luego podemos recuperar y usarlos con el hook

export function loader() {
  const clientes = obtenerClientes()
  return clientes
}

  
export const Index = () => {

  //Clientes recuperados, listo para utilizar.
  const clientes = useLoaderData()

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white" >
            <tr>
              <th className="p-2" >Clientes</th>
              <th className="p-2" >Contactos</th>
              <th className="p-2" >Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map(cliente => (
              <Clientes
              cliente={cliente}
              key={cliente.id}
              />
            ))}
          </tbody>

        </table>
      ) : (
        <p className="text-center mt-10 ">No hay clientes aun </p>
      )}
    </>
  )
}
