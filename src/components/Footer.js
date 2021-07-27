/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logoImage from 'assets/images/logo-text-white.svg';

const Footer = () => {
  const footerContent = (title, contents) => {
    return (
      <div className="text-white">
        <h1 className="fs-3 fw-bold">{title}</h1>
        {contents.map((content) => (
          <a href="#" className="none-style-link fs-5 fw-light py-3 d-block">
            {content}
          </a>
        ))}
      </div>
    );
  };

  return (
    <footer class="bg-dark-pink">
      <div className="container" style={{ paddingTop: 100 }}>
        <div className="row">
          <div className="col-3">
            <img width={140} src={logoImage} alt="" />
            <div className="mt-4 fw-light text-white">
              <p className="fs-5">Osiris Real Estate International</p>
              <p className="fs-5 mt-4">&copy; 2021-2021</p>
            </div>
          </div>
          <div className="col-3">
            {footerContent('Terms & policies', [
              'Terms of Service',
              'Medium Rules',
              'Privacy Policy',
              'Partner Program Terms',
            ])}
          </div>
          <div className="col-3">
            {footerContent('Company', [
              'About',
              'Our Timeline',
              'Contact ',
              'Careers',
            ])}
          </div>
          <div className="col-3">
            {footerContent('Office', [
              'PT Osiris Real Estate Internasional',
              'Jl. KH. Wahid Hasyim Kel No.10D Jakarta, Indonesia',
              'team@OsirisRealEstate.com',
            ])}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
