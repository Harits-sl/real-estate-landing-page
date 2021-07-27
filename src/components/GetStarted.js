import React from 'react';
import getStartedImage from 'assets/images/get-started.svg';
import Button from 'elements/button';

const GetStarted = () => {
  return (
    <section className="bg-light">
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="row">
          <div className="col-12 align-self-center position-relative">
            <div className="w-50 mx-auto">
              <h1 className="fs-1 fw-bold mb-4 text-center">
                Get Started With Us
              </h1>
              <p className="fs-5 fw-light text-muted text-center pt-2">
                Creating modern properties is our speciality, with a lot of
                experience we will help you create the modern properties you
                want.
              </p>
            </div>
            {/* element button */}
            <Button
              className="btn btn-lg mt-5 mx-auto rounded-0"
              isPrimary
              style={{ display: 'block', marginBottom: 125 }}
            >
              Help Center & FAQ
            </Button>
            <div
              className="position-absolute bottom-0 end-0 mb-3"
              style={{ width: '25%' }}
            >
              <img width={'100%'} src={getStartedImage} alt="" />
            </div>
          </div>
          {/* <div class="col align-self-end">
            <img src={getStartedImage} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
