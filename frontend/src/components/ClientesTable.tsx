import { Cliente } from "@/types/all";

interface ClientesTableProps {
  clientes: Cliente[];
}

const ClientesTable: React.FC<ClientesTableProps> = ({ clientes }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Email
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Telefone
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Coordenadas
            </th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {cliente.nome}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {cliente.email}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {cliente.telefone}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                ({cliente.coordenada_x}, {cliente.coordenada_y})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientesTable;
