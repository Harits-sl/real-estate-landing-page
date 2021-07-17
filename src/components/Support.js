import Button from 'elements/button';
import React from 'react';

// import image
import support from 'assets/images/support.svg';

const Support = () => {
  return (
    <section>
      <div className="container mb-100">
        <div className="row">
          <div className="col-6">
            <h1 className="fs-1 fw-bold mb-4">Friendly Support That Cares</h1>
            <p className="fs-5 text-muted" style={{ marginBottom: 60 }}>
              Customer Service on-line 7x24 Hours. So don’t be worry, you’re
              special and we ready to hear it.
            </p>
            {/* element button */}
            <Button className="btn btn-lg me-4 rounded-0" isPrimary>
              Help Center & FAQ
            </Button>
            <Button className="btn btn-lg rounded-0" isSecondary>
              Make a Call
            </Button>
          </div>
          <div className="col-6">
            <img width={'100%'} src={support} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
