import React, { useState } from "react";
import { motion } from "framer-motion";
import DesignImages from "../DesignsImages";

/** NEW VERSION — CLEAN • PAGINATED • NO MODAL */
export default function GraphicDesigns() {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);

  const imagesPerPage = 8;
  const gallery = DesignImages[activeTab].images;
  const totalPages = Math.ceil(gallery.length / imagesPerPage);

  const paginatedImages = gallery.slice(
    (page - 1) * imagesPerPage,
    page * imagesPerPage
  );

  return (
    <div className="min-h-screen bg-neutral-950 p-6 sm:p-10 mt-20">
      <motion.h1
        className="text-4xl sm:text-6xl font-black text-white text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Graphic Designs
      </motion.h1>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {DesignImages.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTab(index);
              setPage(1);
            }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === index
                ? "bg-white text-black shadow-xl"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* GRID — NO CLICK, NO MODAL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedImages.map((img, index) => (
          <motion.div
            key={index}
            className="w-full overflow-hidden rounded-2xl shadow-md bg-neutral-900 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src={img}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 ${
            page === 1 ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          Prev
        </button>

        <span className="text-white text-lg font-semibold">
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 ${
            page === totalPages ? "opacity-40 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
