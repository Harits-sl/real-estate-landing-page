import React from 'react';

// import images
import article1 from 'assets/images/article-1.png';
import article2 from 'assets/images/article-2.png';
import article3 from 'assets/images/article-3.png';
import article4 from 'assets/images/article-4.png';
import article5 from 'assets/images/article-5.png';

const Articles = () => {
  return (
    <section>
      <div className="container mb-100">
        <h1 className="fs-1 fw-bold" style={{ marginBottom: 70 }}>
          Featured Articles & Tips
        </h1>
        <div className="row">
          <div className="col">
            <img width={520} src={article1} alt="" />
            <h1 className="fs-3 fw-bold mt-5 mb-4">
              Hallway Interior with Cabinet and Potted Plant near the door
            </h1>
            <p className="fs-5 text-muted">
              The inside of your home is likely already decked out with
              houseplants that give your space personality, but guess what: Your
              front door deserves some plant love, too. Whether you've got a
              shady porch perfect for trailing English ivy,{' '}
              <span style={{ textDecoration: 'underline' }}>read more</span>
            </p>
          </div>
          <div className="col">
            {/* articles group 1 */}
            <div className="row g-0">
              <div className="col-10">
                <h1 className="fs-3 fw-bold">
                  3 interior design tips that make a rented space feel like home
                </h1>
                <p className="fs-5 text-muted">Design2TasteBlog</p>
              </div>
              <img className="col-2" src={article2} alt="" />
            </div>
            {/* articles group 2 */}
            <div className="row g-0 mt-5">
              <div className="col-10">
                <h1 className="fs-3 fw-bold">
                  How to Protect Furniture While Renovating
                </h1>
                <p className="fs-5 text-muted">Ivan Dimitrijevic</p>
              </div>
              <img className="col-2" src={article3} alt="" />
            </div>
            {/* articles group 3 */}
            <div className="row g-0 mt-5">
              <div className="col-10">
                <h1 className="fs-3 fw-bold">
                  Don’t Lose Your Marbles: How to Care for Your Marble Furniture
                </h1>
                <p className="fs-5 text-muted">France & Son</p>
              </div>
              <img className="col-2" src={article4} alt="" />
            </div>
            {/* articles group 4 */}
            <div className="row g-0 mt-5">
              <div className="col-10">
                <h1 className="fs-3 fw-bold">
                  DEAR PEOPLE WHO LIVE IN FANCY TINY HOUSES
                </h1>
                <p className="fs-5 text-muted">Lauren Modery</p>
              </div>
              <img className="col-2" src={article5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
