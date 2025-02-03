import Image from "next/image";
import Bannerk from "../../../../public/images/homebanner/fruit (1).png";
import Bannerm from "../../../../public/images/homebanner/fruit (2).png";
import Bannerf from "../../../../public/images/homebanner/fruit (3).png"; // Replace with your actual image path
import "../Firstbanner/banner.css";

export default function Banner() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 - No rounding, bold border */}
        <div className="example-5 relative p-16 sm:p-14 lg:p-28 bold-border">
          <Image
            src={Bannerk} // Replace with your image path
            alt="Column 1 Image"
            layout="fill"
        // Ensures the image covers the entire space of the div
            className="rounded-lg"
          />
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              className="line"
              strokeWidth="4"  // Bold border
              style={{ strokeLinecap: "round" }}  // Move strokeLinecap to style
              fill="transparent"
            />
          </svg>
        </div>

        {/* Column 2 - No rounding, normal border */}
        <div className="example-5 relative p-16 sm:p-14 lg:p-28">
          <Image
            src={Bannerm} // Replace with your image path
            alt="Column 2 Image"
            layout="fill"
            // Ensures the image covers the entire space of the div
            className="rounded-lg"
          />
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              className="line"
              strokeWidth="2"  // Normal border
              style={{ strokeLinecap: "round" }}  // Move strokeLinecap to style
              fill="transparent"
            />
          </svg>
        </div>

         {/* Column 2 - No rounding, normal border */}
         <div className="example-5 relative p-16 sm:p-14 lg:p-28">
          <Image
            src={Bannerf} // Replace with your image path
            alt="Column 2 Image"
            layout="fill"
            // Ensures the image covers the entire space of the div
            className="rounded-lg"
          />
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              className="line"
              strokeWidth="2"  // Normal border
              style={{ strokeLinecap: "round" }}  // Move strokeLinecap to style
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
