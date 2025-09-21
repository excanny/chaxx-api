import React from "react";

export default function Features({ currentColor, features }) {
  return (
    <section id="services" className="grid md:grid-cols-3 gap-8 px-8 py-16">
      {features.map((f, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-xl shadow border border-${currentColor.borderLight}`}
        >
          <div className={`mb-4 text-${currentColor.primary}`}>{f.icon}</div>
          <h3 className="font-bold text-lg">{f.title}</h3>
          <p className="text-gray-500">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
