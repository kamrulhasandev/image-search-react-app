import React from "react";
import Image from "../Image/Image";

const Images = ({ data }) => {
  console.log(data);
  return (
    <div className="px-5">
      <div className="md:grid grid-cols-4 gap-2">
        {data.map((image) => (
          <Image key={image.id} image={image}></Image>
        ))}
      </div>
    </div>
  );
};

export default Images;
