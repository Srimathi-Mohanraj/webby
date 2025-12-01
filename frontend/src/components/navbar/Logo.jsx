import React from 'react';


export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* small stacked mark */}
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-600">
       <img src="/images/webby-log.png" alt="" />
      </div>

      {/* brand name */}
     
    </div>
  );
}
