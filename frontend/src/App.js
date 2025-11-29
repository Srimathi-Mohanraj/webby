import React from "react";
import { Topbar, CategoryMenu } from "./components/navbar";
import "./index.css"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />
      <CategoryMenu />

      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Page content</h1>
        <p>Put the rest of your site here.</p>
      </main>
    </div>
  );
}

export default App;
