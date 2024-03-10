import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Cliente } from "@/types/all";
import { getClientes, addCliente, getRotas } from "@/services/clientesService";
import { useMemo, useState } from "react";

export const useClientes = () => {
  return useQuery<Cliente[], Error>({
    queryKey: ["clientes"],
    queryFn: getClientes,
  });
};

export const useGetRotas = () => {
  return useQuery<string[], Error>({
    queryKey: ["rotas"],
    queryFn: getRotas,
  });
};

export const useAddCliente = (): UseMutationResult<
  Cliente,
  Error,
  Omit<Cliente, "id">
> => {
  const queryClient = useQueryClient();

  return useMutation<Cliente, Error, Omit<Cliente, "id">>({
    mutationFn: addCliente,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export function useFilteredClientes(clientes: Cliente[]) {
  const [filter, setFilter] = useState("");

  const filteredClientes = useMemo(() => {
    return clientes?.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(filter.toLowerCase()) ||
        cliente.email.toLowerCase().includes(filter.toLowerCase()) ||
        cliente.telefone.includes(filter)
    );
  }, [clientes, filter]);

  return { filter, setFilter, filteredClientes };
}
