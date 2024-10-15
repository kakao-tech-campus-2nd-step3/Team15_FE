import CommonHeader from "@/components/common/Header";
import FeedItemSection from "@/components/feature/feed/section/FeedItems";
import Navbar from "@/components/feature/feed/section/Navbar"
const FeedPage = () =>{

  return(
    <>
      <CommonHeader />
      <Navbar/>
      <FeedItemSection />
    </>
  )
}

export default FeedPage;