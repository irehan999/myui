import React from 'react';

export default function MyUITemplate() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe 
        src="/templates/myui.html" 
        className="w-full h-full border-none"
        title="Lumora Template Preview"
      />
    </div>
  );
}
