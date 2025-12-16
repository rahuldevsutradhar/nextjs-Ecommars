import React from "react";

const IconText = ({ icon, title, subtitle }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-[18px] text-[#111827] leading-snug">
          {title}
        </p>
        <p className="text-[14px] text-[#4B5563] leading-snug">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default IconText;
