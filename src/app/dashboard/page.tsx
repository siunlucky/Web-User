import React from "react";
import Content from "../../components/content/page";

export default function Home() {
  return (
    <main>
        <div className="pekerja">
        <Content
            name="John Doe"
            skill="Fullstack Developer"
            address="Jakarta, Indonesia"
            foto="https://via.placeholder.com/150"
        />
        <Content
            name="Jane Doe"
            skill="Frontend Developer"
            address="Bandung, Indonesia"
            foto="https://via.placeholder.com/150"
        />
        </div>

    </main>
  );
}
