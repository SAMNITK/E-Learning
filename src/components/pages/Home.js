import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Profile from '../Profile.js';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

export default function Home() {
  return (
    <>
      <Profile />
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}
