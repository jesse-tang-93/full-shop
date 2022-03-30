import React from "react";
import { useParams } from "react-router-dom";

const HomePage =() => {
  window.scrollTo(0,0)
  // 获取params
  const params = useParams();
  const keyword = params.keyword
  const pagenumber = params.pagenumber
  return (
    <div>home</div>
  )
}

export default HomePage