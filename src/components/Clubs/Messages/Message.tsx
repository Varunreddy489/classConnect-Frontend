import { extractTime } from "@/lib/extractTime";
import { Messagetypes } from "@/types/Client-types";

const Message = ({
  message,
  currentUserId,
}: {
  message: Messagetypes;
  currentUserId: string;
}) => {
  const fromMe = message.sender.studentId === currentUserId;

  const img = message.sender.profilePic
    ? `http://localhost:5000/images/${message.sender.profilePic}`
    : "https://upload.wikimeAdia.org/wikipedia/commons/9/91/Element_Desktop_1.10.1_Linux_Yaru_%28cropped%29.png";

  const chatAlignment = fromMe ? "justify-start" : "justify-end";
  const bubbleBg = fromMe ? "bg-blue-500" : "bg-gray-500";
  const textAlign = fromMe ? "text-right" : "text-left";
  const messagePadding = fromMe ? "pl-8 pr-4" : "pr-8 pl-4";
  // const now = new Date();
  // const messageDate = new Date(message.createdAt);
  // const isWithin24Hours =
  //   now.getTime() - messageDate.getTime() < 24 * 60 * 60 * 1000;

  return (
    <div className={`flex   space-x-2 mb-3 ${chatAlignment}`}>
      {/* {isWithin24Hours && (
        <div className="flex justify-center align-middle w-full text-center">
          <span>{extractDate(message.createdAt)}</span>
        </div>
      )} */}

      {!fromMe && (
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0">
          <img
            src={img}
            alt={message.sender.name}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      )}

      <div className={`max-w-xs md:max-w-md ${textAlign}`}>
        <p
          className={`text-sm md:text-base text-white py-2 px-4 rounded-lg shadow ${bubbleBg}
         ${messagePadding}    `}
        >
          {message.body}
        </p>
        <div className="mt-1 text-xs text-gray-400 flex items-center">
          <span>{message.sender.name}</span>
          <span className="mx-2">•</span>
          <span>{extractTime(message.createdAt)}</span>
        </div>
      </div>

      {fromMe && (
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0">
          <img
            src={img}
            alt={message.sender.name}
            className="rounded-full object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
};

export default Message;


