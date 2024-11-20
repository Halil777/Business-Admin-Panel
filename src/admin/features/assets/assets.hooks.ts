import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AssetsService } from "./assets.service";
import { AddAssets } from "./assets.dto";

const useAssets = () => {
  return useQuery({
    queryKey: ["assets"],
    queryFn: async () => AssetsService.getAssets(),
  });
};

const useAddAssets = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (body: AddAssets) => {
      return AssetsService.addAssets(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assets"],
      });
    },
  });
};

const useDeleteAssets = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return AssetsService.deleteAssets(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["assets"],
      });
    },
  });
};

export { useAssets, useAddAssets, useDeleteAssets };
