import { Info, MessageCircle } from "lucide-react";

import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { UserClubsResponse } from "@/types/Client-types";
import { useState } from "react";

const MessageContainer = ({ clubData }: { clubData: UserClubsResponse }) => {
  const [showMembers, setShowMembers] = useState(false);
  if (!clubData) {
    return (
      <div className="flex items-center justify-center w-full ">
        <NoChatSelected />
      </div>
    );
  }

  const toggleMembersList = () => {
    setShowMembers((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="bg-slate-500 flex justify-between px-4 py-2 ">
        <div className="">
          <span className="label-text">To:</span>{" "}
          <span className="text-gray-900 font-bold">{clubData.name}</span>{" "}
        </div>

        <button
          onClick={toggleMembersList}
          className="cursor-pointer group relative flex gap-1   bg-opacity-80 text-white text-sm rounded-2xl hover:bg-opacity-70 transition font-medium shadow-md"
        >
          <Info />
        </button>
      </div>

      {showMembers && (
        <div className="bg-gray-700 absolute right-0 top-0 mt-10 z-10  text-white p-4">
          <h3 className="text-lg text-ce font-bold mb-2">Club Members</h3>
          <ul className="space-y-2">
            {clubData?.members?.map((member) => (
              <li
                key={member.id}
                className="flex items-center gap-2 border-b border-gray-600 pb-2"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  {member.profilePic ? (
                    <img
                      src={`http://localhost:5000/images/${member.profilePic}`}
                      alt={`${member.name}`}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Element_Desktop_1.10.1_Linux_Yaru_%28cropped%29.png"
                      alt="Default"
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex space-x-2 justify-center items-center ">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-300">
                    ( {member.studentId} )
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex-1  flex flex-col justify-between">
        <Messages clubData={clubData} />
        <MessageInput clubData={clubData} />
      </div>
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Varunreddy ❄</p>
        <p>Select a chat to start messaging</p>
        <MessageCircle className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
