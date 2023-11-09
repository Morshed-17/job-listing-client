import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const BlogSec = () => {
    return (
        <section className=" mx-auto px-5 max-w-screen-xl">
  <div className="container  py-10 mx-auto">
    <SectionTitle text={'My blog'}>
        Recent Blog
    </SectionTitle>
    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
      <img
        className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
        <p className="text-sm text-blue-500 uppercase"></p>
        <Link
          to='/blog'
          className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white"
        >
         What is express js? What is Nest JS
        </Link>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
        Express.js is a popular web application framework for Node.js. It is minimal and flexible, providing a robust set of features for web and mobile applications....
        </p>
        <Link
          to='/blog'
          className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
        >
          Read more
        </Link>
        <div className="flex items-center mt-6">
          <img
            className="object-cover object-center w-10 h-10 rounded-full"
            src="https://webdevmorshed.com/wp-content/uploads/2023/04/PXL_20230312_084333880.PORTRAIT1_-717x1024-1.jpg"
            alt=""
          />
          <div className="mx-4">
            <h1 className="text-sm text-gray-700 dark:text-gray-200">
              Golam Morshed
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Web Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    );
};

export default BlogSec;