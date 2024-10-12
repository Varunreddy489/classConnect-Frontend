import { axiosInstance } from "@/lib/axios";
import { useState } from "react";
import { LogOut } from "lucide-react";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async () => {
    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await axiosInstance.post("/student/logout", {});
      console.log(response.data); // Handle successful logout response
    } catch (err) {
      setError("Logout failed"); // Set error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={logout}
        className="relative flex flex-row items-center h-11 w-full focus:outline-none hover:bg-gray-900 border-l-4 border-transparent hover:border-indigo-500 "
      >
        {loading ? (
          <span>Loading...</span> // Show loading state
        ) : (
          <>
            <span className="inline-flex justify-center items-center ml-4">
              <LogOut />
            </span>
          </>
        )}
      </button>
      {error && <div className="text-red-500">{error}</div>} {/* Show error message if any */}
    </div>
  );
};

export default Logout;
