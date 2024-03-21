import { Button } from "@/components/ui/button";
import { BellIcon, Home as HomeIcon, MessageSquareText, UserRound } from "lucide-react";
import HeaderTweets from "./components/HeaderTweets";
import CardWhoToFollow from "./components/CardWhoToFollow";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="grid grid-cols-5 pt-4">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 ">
          <Button variant="ghost" className="justify-normal">
            <HomeIcon className="mr-2 h-4 w-4" /> Home
          </Button>
          <Button variant="ghost" className="justify-normal">
            <BellIcon className="mr-2 h-4 w-4" /> Notification
          </Button>
          <Button variant="ghost" className="justify-normal">
            <MessageSquareText className="mr-2 h-4 w-4" /> Message
          </Button>
          <Button variant="ghost" className="justify-normal">
            <UserRound className="mr-2 h-4 w-4" /> Profile
          </Button>
        </div>
        {/* End Sidebar */}

        <div className="col-span-3">
          <HeaderTweets />
        </div>
        
        <div>
          <CardWhoToFollow />
        </div>
      </section>
    </main>
  );
}
