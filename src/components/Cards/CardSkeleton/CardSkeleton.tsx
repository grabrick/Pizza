import React from "react"
import ContentLoader from "react-content-loader"

const CardSkeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={512}
    viewBox="0 0 400 512"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="146" cy="145" r="120" /> 
    <rect x="6" y="281" rx="10" ry="10" width="286" height="23" /> 
    <rect x="10" y="317" rx="10" ry="10" width="276" height="116" /> 
    <rect x="9" y="444" rx="10" ry="10" width="149" height="41" /> 
    <rect x="210" y="450" rx="10" ry="10" width="75" height="26" />
  </ContentLoader>
)

export default CardSkeleton