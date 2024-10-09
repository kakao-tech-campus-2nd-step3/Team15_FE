import Navbar from "@/components/feature/feed/Navbar"
import FeedItems from "@/components/feature/feed/FeedItems"
import MainHeader from "@/components/feature/home/Header";

const FeedPage = () =>{
  return(
    <>
      <MainHeader />
      <Navbar/>
      <FeedItems/>
    </>
  )
}

export default FeedPage;