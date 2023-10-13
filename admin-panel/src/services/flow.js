import axios from "axios";
import { flowUrl } from "./apiUrl";

export const getFlows = async () => {
  const response = await axios.get(flowUrl);
  return response.data;
};

export const addFlows = async (flows) => {
  const response = await axios.post(flowUrl, flows);
  return response.data;
};

export const updateFlows = async (flows) => {
  const response = await axios.put(`${flowUrl}/${flows.id}`, flows);
  return response.data;
};

export const deleteFlows = async (id) => {
  const response = await axios.delete(`${flowUrl}/${id}`);
  return response.data;
};
