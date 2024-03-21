import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="bg-sky-200 p-4 rounded-lg ml-4 mb-2">
      <h2 className="font-bold"> Who To Follow </h2>

     {/* Card User */}
      <div className="flex items-center justify-between my-2 border border-grey-400 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Luis Nani</p>
        </div>

        <UserPlus />
      </div>
      {/* Card User */}

      {/* Card User */}
      <div className="flex items-center justify-between my-2 border border-grey-400 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Luis Nani</p>
        </div>

        <UserPlus />
      </div>
      {/* Card User */}

      {/* Card User */}
      <div className="flex items-center justify-between my-2 border border-grey-400 p-2 rounded-md">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <p>Luis Nani</p>
        </div>

        <UserPlus />
      </div>
      {/* Card User */}
    </div>
  );
};

export default CardWhoToFollow;
