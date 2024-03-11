import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { serverRoutes } from "src/routes";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      try {
        const response = await axios.post(serverRoutes.auth, null, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: any) => {
      try {
        const response = await axios.post(serverRoutes.signup, data);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
  });
};
export const useChangeInfoUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: any) => {
      try {
        const response = await axios.post(serverRoutes.upload, data, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["auth"]);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth"],
    mutationFn: async (data: any) => {
      try {
        const response = await axios.post(serverRoutes.login, data, {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    onSuccess: (data) => {
      // console.log("Login successful:", data);
      queryClient.invalidateQueries(["auth"]);
      queryClient.invalidateQueries(["basket"]);
      queryClient.invalidateQueries(["delivery"]);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["auth"],
    mutationFn: async () => {
      await axios.post(serverRoutes.logout, null, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.setQueryData(["basket"], null);
      queryClient.setQueryData(["delivery"], null);
      queryClient.setQueryData(["auth"], null);
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onSettled: () => {},
  });
};
