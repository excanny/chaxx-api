import React from "react";

export default function Stats({ currentColor, stats }) {
  return (
    <section className="flex justify-center gap-12 py-12 bg-gray-100">
      {stats.map((s, idx) => (
        <div key={idx} className="text-center">
          <h4 className={`text-3xl font-bold text-${currentColor.primary}`}>
            {s.number}
          </h4>
          <p className="text-gray-600">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
