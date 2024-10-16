import { useState } from "react";

import { Separator } from "@/components/ui/separator";
import Conversations from "@/components/Clubs/Conversations";
import MessageContainer from "@/components/Clubs/Messages/MessageContainer";

const UserClubs = () => {
  const [selectedClub, setSelectedClub] = useState(null);
  return (
    <div className="flex  ">
      <div className="m-3">
        <Conversations setSelectedClub={setSelectedClub} />
      </div>
      <Separator orientation="vertical" className="h-screen  " />
      <MessageContainer clubData={selectedClub} />
    </div>
  );
};

export default UserClubs;
