import React from 'react';
import Button from 'elements/button';

// image assets
import HeaderType1 from 'assets/images/header-type-1.png';
import HeaderType2 from 'assets/images/header-type-2.png';
import HeaderType3 from 'assets/images/header-type-3.png';
import lineImage from 'assets/images/Line.png';
import Type1 from 'assets/images/type-1.png';
import Type2 from 'assets/images/type-2.png';
import Type3 from 'assets/images/type-3.png';
import Type4 from 'assets/images/type-4.png';
import Type5 from 'assets/images/type-5.png';

const Type = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-6 position-relative">
            <img
              className="position-absolute top-50 start-0 translate-middle-y"
              style={{
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
              }}
              height={480}
              src={HeaderType1}
              alt=""
            />
            <img
              width={220}
              className="position-absolute top-0"
              style={{ left: '40%' }}
              src={HeaderType2}
              alt=""
            />
            <img
              width={150}
              className="position-absolute top-100 translate-middle"
              style={{ left: '13%' }}
              src={HeaderType3}
              alt=""
            />
          </div>
          <div className="col-6 pe-5">
            <img width={150} src={lineImage} alt="" />
            <h1 className="mt-4 fs-1 fw-bold">
              Choose Your Type Easier With Us
            </h1>
            <p className="mt-4 mb-5 fs-5">
              Finding the property model you love has never been easier. With a
              strategic location and easy to reach, it can be personalized
              easily with our agents.
            </p>
            <img className="d-inline me-4" width={75} src={Type1} alt="" />
            <img className="d-inline me-4" width={75} src={Type2} alt="" />
            <img className="d-inline me-4" width={75} src={Type3} alt="" />
            <img className="d-inline me-4" width={75} src={Type4} alt="" />
            <img className="d-inline me-4" width={75} src={Type5} alt="" />
            <Button className="btn btn-lg mt-5 rounded-0" isPrimary>
              Browse thousands of Property
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Type;
