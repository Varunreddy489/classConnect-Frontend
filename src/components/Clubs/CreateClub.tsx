import { MessageCirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import { axiosInstance } from "@/lib/axios";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Input } from "../ui/input";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateClubTypes } from "@/types/types";

const CreateClub = () => {
  const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "description is required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateClubTypes>({
    resolver: zodResolver(schema),
  });

  const fetchMembers = async () => {
    try {
      const response = await axiosInstance.get("/user/all");
      console.error(response.data);
    } catch (error) {
      console.error("error in fetchMembers:", error);
    }
  };

  const { mutate: createClub } = useMutation({
    mutationFn: async (data: CreateClubTypes) => {
      const response = await axiosInstance.post("/club/create", {
        data,
      });
      console.log(response.data);
      return response.data;
    },

    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.error("error in CreateClub:", error);
    },
  });

  const onSubmit = (data: CreateClubTypes) => {
    console.log(data);
    createClub(data);
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 flex items-center">
            <MessageCirclePlus className="mr-2" /> Create Your Club
          </Button>
        </PopoverTrigger>

        <PopoverContent className="p-4 bg-slate-950 shadow-lg  rounded-md z-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex justify-center">
              <Button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Create Club
              </Button>
            </div>
            <div className="flex flex-col  space-y-2">
              <label htmlFor="clubName" className="text-white">
                Club Name
              </label>
              <Input
                {...register("name", { required: true })}
                placeholder="Enter club name"
              />
              {errors.name && (
                <div className="text-red-600">{errors.name.message}</div>
              )}
            </div>
            <div className="flex flex-col  space-y-2">
              <label htmlFor="clubDescription" className="text-white">
                Club Description
              </label>
              <Input
                id="clubDescription"
                placeholder="Enter club description"
                {...register("description", { required: true })}
                type="text"
              />
              {errors.description && (
                <div className="text-red-600">{errors.description.message}</div>
              )}
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CreateClub;
