'use client'; // Required for Client Components in App Router

import Script from 'next/script';

const FilloutForm = () => {
  return (
    <>
      {/* Updated div with all new attributes */}
      <div
        data-fillout-id="vdcBroi2RZus"
        data-fillout-embed-type="popup"
        data-fillout-button-text="Sign Up For Beta"
        data-fillout-dynamic-resize
        data-fillout-button-color="#00D0FF" // New: Button color
        data-fillout-button-size="small"    // New: Button size
        data-fillout-inherit-parameters
        data-fillout-popup-size="medium"
      ></div>

      {/* Load the Fillout embed script */}
      <Script
        src="https://server.fillout.com/embed/v1/"
        strategy="afterInteractive" // Load after the page is interactive
      />
    </>
  );
};

export default FilloutForm;