import { UserClubsResponse } from "@/types/types";

const Conversation = ({ data }: { data: UserClubsResponse }) => {
  return (
    <div>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2
				 py-1 cursor-pointer `}
        // onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar`}>
          <div className="w-8 md:w-12 rounded-full">
            <img
              src={`${import.meta.env.VITE_BACKEND_IMAGE_URL}/${
                data.profilePic
              }`}
              alt={`${data.name}`}
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 text-sm md:text-md">
              {data.name}
            </p>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </div>
  );
};

export default Conversation;
