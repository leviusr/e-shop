import Banner from "@/components/banner";
import ChatButton from "@/components/chat/chat-button";
import Find from "@/components/find";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Relleno from "@/components/relleno";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <ChatButton />
      <div className="bg-cuarty w-full h-[20vh]">
        <Find />
      </div>
      <div className="h-[60vh] w-full">
        <Banner />
      </div>
      <div className="w-full h-[50vh] flex items-center justify-center">
        <Relleno />
      </div>
      <div>
        <Gallery />
      </div>
      <div className="w-full h-[40vh]">
        <Footer />
      </div>
    </div>
  );
}
