"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  return useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const { data } = await axiosInstance.post("/auth/register", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("register success");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

// ini cara manualnya
// const useRegister = () => {
//     const [isLoading, setIsloading] = useState<boolean>(false);

//     const handleRegister = async (payload) => {
//         try {
//             setIsloading(true);
//             const { data } = await axios.post("http:/localhost:8000", payload);
//             toast.success("Register success")
//         }  finally {
//             setIsloading(false)
//         }
//     };

//   return {handleRegister, isLoading};
// }

export default useRegister;
