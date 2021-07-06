import React from 'react';
import Button from 'elements/button/index';

import ImageHero from 'assets/images/imageHero.png';

const Hero = () => {
  return (
    <>
      <div
        className="container position-relative border-radius-40 ps-5 pt-5 bg-gray"
        style={{ height: '650px' }}
      >
        <h1 className="mb-4 fs-1 fw-bold" style={{ width: 690 }}>
          Magic Thing Happen In Your Modern Property
        </h1>
        <p className="mb-5 fs-5 fw-light" style={{ width: 512 }}>
          Creating modern properties is our speciality, with a lot of experience
          we will help you create the modern properties you want.
        </p>
        <Button
          className="btn btn-lg me-4"
          isPrimary
          style={{ borderRadius: 0 }}
        >
          Browse thousands of Property
        </Button>
        <Button className="btn btn-lg" style={{ borderRadius: 0 }}>
          Catalog
        </Button>

        <div
          className=" position-absolute bottom-0 start-0 "
          style={{ zIndex: 1 }}
        >
          <div
            style={{ backgroundColor: 'white', borderTopRightRadius: '3rem' }}
          >
            <div className="row row-cols-auto ps-5 py-4">
              <div className="col">
                <h1 className="fs-3 fw-bold">450+</h1>
                <div className="fw-normal" style={{ fontSize: '1.13rem' }}>
                  Property Sold
                </div>
              </div>
              <div className="col">
                <h1 className="fs-3 fw-bold">122</h1>
                <div className="fw-normal" style={{ fontSize: '1.13rem' }}>
                  Satisfied Client
                </div>
              </div>
              <div className="col me-5">
                <h1 className="fs-3 fw-bold">25</h1>
                <div className="fw-normal" style={{ fontSize: '1.13rem' }}>
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="position-absolute bottom-0 end-0 border-radius-40"
          width={820}
          height={530}
          src={ImageHero}
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
