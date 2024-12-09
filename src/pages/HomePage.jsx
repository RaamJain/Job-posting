import React from 'react'

// Components import for the home page.
import Hero from "../components/Hero/Hero"
import HomeCards from "../components/HomeCards/HomeCards"
import Job_listings from "../components/Job_listings/Job_listings"
import Viewall from "../components/Viewall/Viewall"
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Job_listings isHome = {true}/>
      <Viewall />
    </>
  )
}

export default HomePage