import React from "react";

import WebsiteName from "./WebsiteName";
interface InfoItem {
  icon: JSX.Element;
  text: string;
}

const info = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_68_122)">
          <path
            d="M16.1 3C15.9659 3.65993 15.9659 4.34007 16.1 5H4.511L12.061 11.662L17.11 7.142C17.536 7.669 18.068 8.108 18.673 8.427L12.072 14.338L4 7.216V19H20V8.9C20.6599 9.03406 21.3401 9.03406 22 8.9V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H16.1ZM21 7C20.606 7 20.2159 6.9224 19.8519 6.77164C19.488 6.62087 19.1573 6.3999 18.8787 6.12132C18.6001 5.84274 18.3791 5.51203 18.2284 5.14805C18.0776 4.78407 18 4.39397 18 4C18 3.60603 18.0776 3.21593 18.2284 2.85195C18.3791 2.48797 18.6001 2.15726 18.8787 1.87868C19.1573 1.6001 19.488 1.37913 19.8519 1.22836C20.2159 1.0776 20.606 1 21 1C21.7956 1 22.5587 1.31607 23.1213 1.87868C23.6839 2.44129 24 3.20435 24 4C24 4.79565 23.6839 5.55871 23.1213 6.12132C22.5587 6.68393 21.7956 7 21 7Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_68_122">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "willie.jennings@example.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_68_128)">
          <path
            d="M9.366 10.682C10.3043 12.3305 11.6695 13.6957 13.318 14.634L14.202 13.396C14.3442 13.1969 14.5543 13.0569 14.7928 13.0023C15.0313 12.9478 15.2814 12.9825 15.496 13.1C16.9103 13.8729 18.4722 14.3378 20.079 14.464C20.3298 14.4839 20.5638 14.5975 20.7345 14.7823C20.9052 14.9671 21 15.2094 21 15.461V19.923C21.0001 20.1706 20.9083 20.4094 20.7424 20.5932C20.5765 20.777 20.3483 20.8927 20.102 20.918C19.572 20.973 19.038 21 18.5 21C9.94 21 3 14.06 3 5.5C3 4.962 3.027 4.428 3.082 3.898C3.10725 3.6517 3.22298 3.42352 3.40679 3.25763C3.5906 3.09175 3.82941 2.99995 4.077 3H8.539C8.79056 2.99997 9.0329 3.09475 9.21768 3.26545C9.40247 3.43615 9.51613 3.67022 9.536 3.921C9.66222 5.52779 10.1271 7.08968 10.9 8.504C11.0175 8.71856 11.0522 8.96874 10.9977 9.2072C10.9431 9.44565 10.8031 9.65584 10.604 9.798L9.366 10.682ZM6.844 10.025L8.744 8.668C8.20478 7.50409 7.83535 6.26884 7.647 5H5.01C5.004 5.166 5.001 5.333 5.001 5.5C5 12.956 11.044 19 18.5 19C18.667 19 18.834 18.997 19 18.99V16.353C17.7312 16.1646 16.4959 15.7952 15.332 15.256L13.975 17.156C13.4287 16.9437 12.898 16.6931 12.387 16.406L12.329 16.373C10.3676 15.2567 8.74328 13.6324 7.627 11.671L7.594 11.613C7.30691 11.102 7.05628 10.5713 6.844 10.025Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_68_128">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "(603) 555-0123",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_68_133)">
          <path
            d="M12 20.8999L16.95 15.9499C17.9289 14.9709 18.5955 13.7236 18.8655 12.3658C19.1356 11.0079 18.9969 9.60052 18.4671 8.32148C17.9373 7.04244 17.04 5.94923 15.8889 5.18009C14.7378 4.41095 13.3844 4.00043 12 4.00043C10.6156 4.00043 9.26221 4.41095 8.11108 5.18009C6.95995 5.94923 6.06275 7.04244 5.53291 8.32148C5.00308 9.60052 4.86441 11.0079 5.13445 12.3658C5.40449 13.7236 6.0711 14.9709 7.05 15.9499L12 20.8999ZM12 23.7279L5.636 17.3639C4.37734 16.1052 3.52018 14.5016 3.17292 12.7558C2.82567 11.0099 3.0039 9.20035 3.68509 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639L12 23.7279ZM12 12.9999C12.5304 12.9999 13.0391 12.7892 13.4142 12.4141C13.7893 12.0391 14 11.5304 14 10.9999C14 10.4695 13.7893 9.96078 13.4142 9.58571C13.0391 9.21064 12.5304 8.99992 12 8.99992C11.4696 8.99992 10.9609 9.21064 10.5858 9.58571C10.2107 9.96078 10 10.4695 10 10.9999C10 11.5304 10.2107 12.0391 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999ZM12 14.9999C10.9391 14.9999 9.92172 14.5785 9.17157 13.8283C8.42143 13.0782 8 12.0608 8 10.9999C8 9.93906 8.42143 8.92164 9.17157 8.17149C9.92172 7.42135 10.9391 6.99992 12 6.99992C13.0609 6.99992 14.0783 7.42135 14.8284 8.17149C15.5786 8.92164 16 9.93906 16 10.9999C16 12.0608 15.5786 13.0782 14.8284 13.8283C14.0783 14.5785 13.0609 14.9999 12 14.9999Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_68_133">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "8502 Preston Rd. Inglewood, Maine 98380",
  },
];

const Footer: React.FC = () => {
  return (

    <div className="w-full py-10 bg-darkCustom flex  max-[726px]:flex-col gap-12 mt-10">
      <div className="h-[80px] flex justify-center items-center min-[726px]:border-r-2 shrink">
        <WebsiteName />
      </div>
      <div className="min-[981px]:flex lg:items-center lg:justify-between lg:gap-20 mr-4 gap-8">
        {info.map((item: InfoItem, idx: number) => (
          <div key={idx} className="flex gap-2 min-[981px]:justify-center items-center lg:flex-wrap lg:text-md">
            <div className="">{item.icon}</div>
            <div className="text-white">{item.text}</div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Footer;
