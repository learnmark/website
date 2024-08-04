'use client'

import { useState } from 'react'

import Intro from "@/components/Intro";
import Feature from "@/components/Feature";
import CTA from '@/components/CTA';
import WorkWith from '@/components/WorkWith';
import News from '@/components/News';
import Stats from '@/components/Stats';
import Feedback from '@/components/Feedback';
import LatestUpdate from '@/components/LatestUpdate';
import Teams from '@/components/Teams';
import Customer from '@/components/Customer';
import Banner from '@/components/Banner';
import Products from '@/components/Products';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Intro></Intro>
      <Feature></Feature>
      <CTA></CTA>
      <WorkWith></WorkWith>
      <Stats></Stats>
      <News></News>
      <Feedback></Feedback>
      <LatestUpdate></LatestUpdate>
      <Teams></Teams>
      <Customer></Customer>
      <Products></Products>
    </>
  )
}
