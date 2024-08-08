'use client'

import { useState } from 'react'

import Intro from "@/components/Intro";
import Feature from "@/components/Feature";
import CTA from '@/components/CTA';
import WorkWith from '@/components/WorkWith';
import Stats from '@/components/Stats';
import Feedback from '@/components/Feedback';
import LatestUpdate from '@/components/LatestUpdate';
import Team from '@/components/Team';
import Customer from '@/components/Customer';
import Subscribe from '@/components/Subscribe';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Intro></Intro>
      {/* <Feature></Feature>
      <CTA></CTA> */}
      <WorkWith></WorkWith>
      <Stats></Stats>
      <Feedback></Feedback>
      {/* <LatestUpdate></LatestUpdate> */}
      {/* <Team></Team>
      <Customer></Customer> */}
      <Subscribe></Subscribe>
    </>
  )
}
