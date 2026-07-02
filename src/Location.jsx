import React from "react";

function Location() {
  return (
    <>
      <div className="mt-5">
        <iframe
          src="https://www.google.com/maps?q=MD16+Computer+Academy+Bopal&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  );
}

export default Location;
