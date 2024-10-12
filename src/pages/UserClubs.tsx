import Spinner from "@/components/Spinner";
import { axiosInstance } from "@/lib/axios";

import { useQuery } from "@tanstack/react-query";

const UserClubs = () => {
  const fetchUserClubs = async () => {
    try {
      const response = await axiosInstance.get("/user/club");
      console.log(response.data);
      return response.data.clubs;
    } catch (error) {
      console.error("error in UserClubs: ", error);
    }
  };

  const { data, isLoading, error } = useQuery({
    queryFn: fetchUserClubs,
    queryKey: ["userClubs"],
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        Error: {error.message}
      </div>
    );
  }

  return <div>Clubs</div>;
};

export default UserClubs;
