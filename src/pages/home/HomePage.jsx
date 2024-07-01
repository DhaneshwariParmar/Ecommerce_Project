
import HeroSection from "../../components/heroSection/HeroSection";
import Layout from "../../components/layout/Layout"
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/HomePageProductCard/HomePageProductCard";
import Track from "../../components/track/Track";
import TestiMonial from "../../components/testimonial/TestiMonial";
import Loader from "../../components/loader/Loader";



const HomePage = () => {
  
  return (
    <Layout>
      <HeroSection/>
      <Category />
      <HomePageProductCard />
      <Track />
      <TestiMonial />
      <Loader />
      
    </Layout>
  )
}

export default HomePage;