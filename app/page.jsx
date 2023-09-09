import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="blue_title_gradient text-center">
          {" "}
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">Designed to support your next big idea, Promptly is an open-source AI tool for discovering, creating, and sharing prompts with the rest of the world.</p>

      <Feed />
    </section>
  );
};

export default Home;
