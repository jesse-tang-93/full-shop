import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

import CalltoAction from "../components/HomeComponents/CalltoActionSection"
import ContactCardGroup from "../components/HomeComponents/ContactCardGroup"
import ShopSection from "../components/HomeComponents/ShopSection"

const HomePage =() => {
  window.scrollTo(0,0)
  // 获取params
  const params = useParams();
  const keyword = params.keyword
  const pagenumber = params.pagenumber
  return (
    <div>
      <Header/>
      <ShopSection keyword={keyword} pagenumber={pagenumber}/>
      <CalltoAction/>
      <ContactCardGroup/>
      <Footer/>
    </div>
  )
}

export default HomePage