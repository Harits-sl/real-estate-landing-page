import React from 'react';
import Button from 'elements/button/index';

import ImageHero from 'assets/images/imageHero.png';

const Hero = () => {
  return (
    <>
      <div className="container-md position-relative border-radius-40 pt-5 ps-0 bg-light">
        <h1 className="w-50 mb-4 ms-5 fs-1 fw-bold">
          Magic Thing Happen In Your Modern Property
        </h1>
        <p className="w-50 pe-5 mb-5 ms-5 fs-5 fw-light">
          Creating modern properties is our speciality, with a lot of experience
          we will help you create the modern properties you want.
        </p>
        <Button className="btn btn-lg me-4 ms-5 rounded-0" isPrimary>
          Browse thousands of Property
        </Button>
        <Button className="btn btn-lg rounded-0" isSecondary>
          Catalog
        </Button>

        <div
          style={{
            width: '45%',
            zIndex: 2,
            position: 'relative',
            marginTop: 120,
            backgroundColor: 'white',
            borderTopRightRadius: '3rem',
          }}
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
            <div className="col">
              <h1 className="fs-3 fw-bold">25</h1>
              <div className="fw-normal" style={{ fontSize: '1.13rem' }}>
                Years Experience
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
