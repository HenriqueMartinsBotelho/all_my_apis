import { Cliente } from "@/types/all";
import { MainApi } from "./api";

const BASE_URL = "/clientes";

export const getClientes = async (): Promise<Cliente[]> => {
  try {
    const { data } = await MainApi.get<Cliente[]>(BASE_URL);
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Erro!!");
  }
};

export const addCliente = async (
  cliente: Omit<Cliente, "id">
): Promise<Cliente> => {
  try {
    const { data } = await MainApi.post<Cliente>(BASE_URL, cliente);
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Erro!!");
  }
};

export const getRotas = async (): Promise<string[]> => {
  try {
    const { data } = await MainApi.get<string[]>(`${BASE_URL}/rota`);
    return data;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Erro!!");
  }
};
