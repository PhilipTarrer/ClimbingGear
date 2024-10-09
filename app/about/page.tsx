import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | PeakSummit - Your Guide to Climbing Gear</title>
        <meta name="description" content="Learn more about PeakSummit, our mission, and why we started. We help climbers find the perfect gear for their adventures with personalized recommendations." />
      </Head>
      <div className="bg-gray-100 min-h-screen pt-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            About Us
          </h1>

          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At <span className="font-bold">PeakSummit</span>, we are passionate about helping climbers of all levels find the perfect gear for their climbing adventures. Whether you're bouldering, sport climbing, or just starting out, we aim to guide you to the best climbing shoes and equipment to match your style, preferences, and skill level.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Why We Started
            </h2>
            <p className="text-gray-600 mb-6">
              The idea for <span className="font-bold">PeakSummit</span> was born from the frustration many climbers experience when choosing the right climbing shoes. With so many options on the market, it's often difficult to know which shoe is the best fit for your specific needs. Our goal is to simplify the process and offer personalized recommendations to ensure that every climber, from beginner to expert, can find their perfect match.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              What We Offer
            </h2>
            <p className="text-gray-600 mb-6">
              Our platform provides focussed descriptions and reviews for a wide variety of climbing shoes and gear. We aim to help climbers make informed decisions by offering insights on shoe fit, comfort, aggressiveness, and more. Whether you're a dedicated boulderer or an experienced trad climber, we've got you covered.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Have questions or feedback? We’d love to hear from you! Feel free to reach out to us through at <a className="text-blue-600 hover:text-blue-800 font-semibold">contact.peaksummit@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
