import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DataService } from "./data.service";
import { AddData } from "./data.dto";

const useGetData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => DataService.getData(),
  });
};

const useAddData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: AddData) => {
      return DataService.addData(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data"],
      });
    },
  });
};

const useEditData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: AddData) => {
      return DataService.updateData(body.id!, body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data"],
      });
    },
  });
};

const useDeleteData = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return DataService.deleteData(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["data"],
      });
    },
  });
};

export { useGetData, useAddData, useDeleteData, useEditData };
