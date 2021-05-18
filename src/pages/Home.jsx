import Header from "./../components/Header";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Header
        className="justify-content-md-center"
        backgroundImage="https://pbs.twimg.com/media/DSoiRWEU0AE3w4H.jpg"
      >
        <div className="container-fluid">
          <div className="col-xs-12">
            <br />
            <br />
            <div className="main-text">
              <h2>We are offering job vacancies right now!</h2>
              <h5 className="text-muted">Find your desire one in a minute</h5>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <Link
            to="/jobs"
            className="btn btn-md btn-secondary shadow-lg p-3 mb-5 bg-body  "
          >
            Find a Job
            <br />
            full time, flexible, freelance
          </Link>
        </div>
      </Header>
      <main>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#343a40",
          }}
        >
          <h2 className="mt-4 mb-4">why do we start Torre?</h2>
          <p className="text-justify col-md-6 ">
            The internet significantly reduced the asymmetry of our form to
            obtain and exchange information. Previously, discover valuable
            sources of knowledge on a given topic required weeks of research,
            which often included multiple visits to libraries, slow letters and
            expensive phone calls. Today in day, it only takes a few seconds to
            search and discover what books to buy, what articles to read, what
            videos to watch, what experts follow and what online courses to
            take. Book a flight or buy virtually any product can now be made in
            seconds while you rest on a sofa.
          </p>
          <p className="text-justify col-md-6 ">
            However, when it comes to hiring talent, the processes involved are
            still rooted in the past century. Suppose I asked you, "Who is the
            best developer you can hire for your team?" or "Who is the best
            piano tutor for your children?" or "Who is the best part-time
            executive assistant you can hire?" The answer will probably not take
            seconds, minutes or hours, it will most likely be weeks or even
            months! Not only that: the answer is probably wrong. At best, you
            can say, "Out of the dozens of candidates I was able to evaluate,
            this is the best person." Yet that's just a tremendously small
            fraction of all the people in the world who could have been a better
            fit. This illustrates the vast information asymmetry that we have
            become accustomed to in recruiting. Consequently, most of the
            world's talent is wasted because it is never exposed to the right
            opportunities...
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
