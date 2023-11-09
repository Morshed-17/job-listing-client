import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <>
        {/*Container*/}
        <div className="container w-full md:max-w-3xl mx-auto pt-20">
          <div className="w-full px-4 md:px-6 text-lg  leading-normal">
            {/*Title*/}
            <div className="font-sans">
              <p className="text-base md:text-sm text-blue-500 font-bold">
                &lt;{" "}
                <Link to='/'>
                <button
                  href="#"
                  className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
                >
                  BACK TO Home
                </button>
                </Link>
              </p>
              <h1 className="font-bold font-sans break-normal text-slate-300 pt-6 pb-2 text-3xl md:text-4xl">
                Welcome to my simple Blog
              </h1>
              <p className="text-sm md:text-base font-normal text-gray-300">
                Published: 9 Nov 2023
              </p>
            </div>
            {/*Post Content*/}
            {/*Lead Para*/}
            <p className="py-6">
              I'm a{" "}
              <a
                className="text-blue-500 no-underline hover:underline"
                href="https://www.tailwindcss.com"
              >
                MERN
              </a>{" "}
              stack web developer, and I'm excited to share my thoughts and
              experiences in the world of web development. Join me on this
              journey as we explore the latest trends, tips, and tutorials in
              the MERN stack. Let's learn and grow together as we build amazing
              web applications. Thanks for stopping by!
            </p>
            {/* first */}
            <h3 className="py-6 text-2xl">
              <span className="text-2xl">1.</span> What is an access token and
              refresh token? How do they work and where should we store them on
              the client-side?
            </h3>
            <div className="p-4  rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Access Token:</p>
              <p className="text-gray-400">
                A short-lived, temporary token for authentication, granting
                limited access to server resources. Typically included in API
                requests.
              </p>
              <p className="text-lg font-semibold">Refresh Token:</p>
              <p className="text-gray-400">
                A long-lived token used to request new access tokens when the
                original one expires. It's securely stored on the client-side.
              </p>
              <p className="text-gray-400">
                Access tokens are sent with each request to access protected
                resources, while refresh tokens help maintain a user's session
                without frequent logins.
              </p>
            </div>

            {/* second */}
            <h3 className="py-6 text-2xl">
              <span className="text-2xl">2.</span> What is express js? What is
              Nest JS
            </h3>

            <div className="p-4  rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Express.js:</p>
              <p className="text-gray-400">
              Express.js is a popular web application framework for Node.js. It is minimal and flexible, providing a robust set of features for web and mobile applications. Express simplifies the process of building web applications and APIs by providing a straightforward and unopinionated structure. It includes routing, middleware support, and various libraries to help with tasks like handling HTTP requests, managing sessions, and more. Developers can extend its functionality using various middleware and libraries, making it a versatile choice for building web applications and RESTful APIs.
              </p>
              <p className="text-lg font-semibold">NestJS:</p>
              <p className="text-gray-400">
              NestJS, on the other hand, is a full-featured, extensible, and progressive Node.js framework for building scalable and maintainable server-side applications. NestJS is built on top of Express.js but adds a higher-level structure and additional features, like dependency injection, decorators, and TypeScript support. It encourages the use of best practices from both object-oriented programming and functional programming. NestJS also comes with powerful CLI tools to streamline project setup and development. It is commonly used for building complex backends, including RESTful APIs, GraphQL APIs, and real-time applications, and it is especially well-suited for large-scale projects that require structured and maintainable code.
              </p>
              <p className="text-gray-400">
                Access tokens are sent with each request to access protected
                resources, while refresh tokens help maintain a user's session
                without frequent logins.
              </p>
            </div>
            {/* third */}
            <h3 className="py-6 text-2xl mt-6">
              <span className="text-2xl">2.</span> Code explaination in this Project:
            </h3>

            <div className="p-4  rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Frontend.</p>
              <p className="text-gray-400">
              I have used ReactJs and tailwindcss for my frontend.
              </p>
              <p className="text-lg font-semibold">Backend:</p>
              <p className="text-gray-400">
              In the backend of this project. I implemented serveral crud opertaions and also used jwt for security.
              For the database i have used mongoDb.
              The most challenging task for me was the applied job page. 
              Where the user can see thair updated job and it a is private endpoint.

              </p>
              <p className="text-gray-400">
                
              </p>
            </div>

            <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
              Example of blockquote - Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
              amet ligula.
            </blockquote>
            <p className="py-6">Example code block:</p>
            <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
              {"\t"}
              {"\t"}
              {"\t"}
              {"\t"}
              <code className="break-words whitespace-pre-wrap">
                {"\n"}&lt;header class="site-header outer"&gt;{"\n"}&lt;div
                class="inner"&gt;{"\n"}
                {"{"}
                {"{"}&gt; "site-nav"{"}"}
                {"}"}
                {"\n"}&lt;/div&gt;{"\n"}&lt;/header&gt;{"\n"}
                {"\t"}
                {"\t"}
                {"\t"}
                {"\t"}
              </code>
              {"\n"}
              {"\t"}
              {"\t"}
              {"\t"}
            </pre>
            {/*/ Post Content*/}
          </div>
          {/*Tags */}
          <div className="text-base md:text-sm text-gray-500 px-4 py-6">
            Tags:{" "}
            <a
              href="#"
              className="text-base md:text-sm text-blue-500 no-underline hover:underline"
            >
              Link
            </a>{" "}
            .{" "}
            <a
              href="#"
              className="text-base md:text-sm text-blue-500 no-underline hover:underline"
            >
              Link
            </a>
          </div>
          {/*Divider*/}
          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
          {/*Subscribe*/}
          <div className="container px-4">
            <div className="font-sans  rounded-lg shadow-xl p-4 text-center">
              <h2 className="font-bold break-normal text-xl md:text-3xl">
                Subscribe to my Newsletter
              </h2>
              <h3 className="font-bold break-normal text-gray-300 text-sm md:text-base">
                Get the latest posts delivered right to your inbox
              </h3>
              <div className="w-full text-center pt-4">
                <form action="#">
                  <div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-300 mr-2 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex-1 mt-4 block md:inline-block appearance-none bg-blue-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-blue-400"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Subscribe*/}
          {/*Author*/}
          <div className="flex w-full items-center font-sans px-4 py-12">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://webdevmorshed.com/wp-content/uploads/2023/04/PXL_20230312_084333880.PORTRAIT1_-717x1024-1.jpg"
              alt="Avatar of Author"
            />
            <div className="flex-1 px-2">
              <p className="text-base font-bold text-base md:text-xl leading-none mb-2">
                Golam Morshed
              </p>
              <p className="text-gray-300 text-xs md:text-base">
                A simple Blog post{" "}
                <a
                  className="text-blue-500 no-underline hover:underline"
                  href="https://webdevmorshed.com/"
                >
                  Port-folio 
                </a>
              </p>
            </div>
            <div className="justify-end">
              <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-blue-500 font-bold py-2 px-4 rounded-full">
                Read More
              </button>
            </div>
          </div>
          {/*/Author*/}
          {/*Divider*/}
          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
          {/*Next & Prev Links*/}
          <div className="font-sans flex justify-between content-center px-4 pb-12">
            <div className="text-left">
              <span className="text-xs md:text-sm font-normal text-gray-300">
                &lt; Previous Post
              </span>
              <br />
              <p>
                <a
                  href="#"
                  className="break-normal text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
                >
                  Blog title
                </a>
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs md:text-sm font-normal text-gray-300">
                Next Post &gt;
              </span>
              <br />
              <p>
                <a
                  href="#"
                  className="break-normal text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
                >
                  Blog title
                </a>
              </p>
            </div>
          </div>
          {/*/Next & Prev Links*/}
        </div>
        {/*/container*/}
      </>
    </div>
  );
};

export default Blog;
