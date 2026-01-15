'use client'
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaCloudUploadAlt, FaDollarSign, FaCode, FaCheckCircle } from "react-icons/fa";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "SaaS",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#0b0d17] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">List New Product</h1>
            <p className="text-white/50">Ready to reach 10k+ buyers? Fill in the details below.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-purple-400 font-bold">
            App Z<BiWorld />ne Partner
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Main Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Product Title</label>
                <input 
                  type="text" 
                  name="title"
                  placeholder="e.g. CryptoPulse Dashboard Template"
                  className="w-full bg-[#0b0d17] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Category</label>
                  <select 
                    name="category"
                    className="w-full bg-[#0b0d17] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 appearance-none"
                    onChange={handleChange}
                  >
                    <option>SaaS</option>
                    <option>Mobile App</option>
                    <option>E-commerce</option>
                    <option>AI Tool</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Price (USD)</label>
                  <div className="relative">
                    <FaDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                    <input 
                      type="number" 
                      name="price"
                      placeholder="49"
                      className="w-full bg-[#0b0d17] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Description</label>
                <textarea 
                  rows="5"
                  name="description"
                  placeholder="What makes this app special? List key features and tech stack..."
                  className="w-full bg-[#0b0d17] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* File Upload Area */}
            <div className="bg-white/5 border-2 border-dashed border-white/10 p-10 rounded-3xl text-center group hover:border-purple-500/50 transition-all">
              <FaCloudUploadAlt size={40} className="mx-auto text-white/20 group-hover:text-purple-500 mb-4 transition-colors" />
              <p className="text-white font-medium">Upload Source Code (ZIP)</p>
              <p className="text-white/30 text-sm mt-1">Max file size: 500MB</p>
              <input type="file" className="hidden" id="fileInput" />
              <button 
                type="button"
                onClick={() => document.getElementById('fileInput').click()}
                className="mt-4 px-6 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition"
              >
                Select File
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar / Rules */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 p-6 rounded-3xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-purple-400" /> Submission Rules
              </h3>
              <ul className="text-sm text-white/60 space-y-3">
                <li>• Ensure code is well-documented.</li>
                <li>• Remove all API keys and secrets.</li>
                <li>• Screenshots must be 1200x800px.</li>
                <li>• Include a readme.md file.</li>
              </ul>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-purple-900/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Submit Product <FaCode />
            </button>
            
            <p className="text-center text-xs text-white/30 px-4">
              By submitting, you agree to our Vendor Terms and verify that you own the rights to this code.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddItemPage;