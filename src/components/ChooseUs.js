import React from 'react';

// images
import choose1 from 'assets/images/choose-1.png';
import choose2 from 'assets/images/choose-2.png';
import choose3 from 'assets/images/choose-3.png';
import dot from 'assets/images/dot.svg';

const ChooseUs = () => {
  return (
    <section className="bg-light mb-100">
      <div
        className="container position-relative"
        style={{ paddingTop: 50, paddingBottom: 75 }}
      >
        {/* start decoration dot images */}
        <img
          className="position-absolute top-0 start-0 mt-4"
          width={140}
          src={dot}
          alt=""
        />
        <img
          className="position-absolute top-0 end-0 mt-4"
          width={140}
          src={dot}
          alt=""
        />
        <img
          className="position-absolute bottom-0 start-0 mb-4"
          width={140}
          src={dot}
          alt=""
        />
        <img
          className="position-absolute bottom-0 end-0 mb-4"
          width={140}
          src={dot}
          alt=""
        />
        {/* end decoration dot images */}

        <div className="text-center">
          <h1 className="fs-4 fw-bold text-green">Why Choose Us</h1>
          <h2 className="fs-1 fw-bold">With 25 Years Of Experience</h2>
          <p className="fs-5 text-muted">
            We are ready to help you find the your dream house
          </p>
        </div>
        <div className="row position-relative mt-5">
          <div
            className="col px-4 pt-4 bg-white"
            style={{ borderRadius: 60, paddingBottom: 100 }}
          >
            <img width={100} src={choose1} alt="" />
            <h1 className="fs-3 fw-bold mt-5 mb-4">Choose your type</h1>
            <p className="fs-5 text-muted">
              Find what property you want with the locations, and easily choose
              the type.
            </p>
          </div>
          <div
            className="col px-4 pt-4 bg-white"
            style={{ borderRadius: 60, paddingBottom: 100, margin: '0 100px' }}
          >
            <img width={100} src={choose2} alt="" />
            <h1 className="fs-3 fw-bold mt-5 mb-4">Contact Number</h1>
            <p className="fs-5 text-muted">
              Find the contact number that are listed in your type property and
              come to see the property you want directly.
            </p>
          </div>
          <div
            className="col px-4 pt-4 bg-white"
            style={{ borderRadius: 60, paddingBottom: 100 }}
          >
            <img width={100} src={choose3} alt="" />
            <h1 className="fs-3 fw-bold mt-5 mb-4">Easy & Secure Payment</h1>
            <p className="fs-5 text-muted">
              Ready to get your property? sign the contract and your property
              ready for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
