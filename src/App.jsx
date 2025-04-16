
import React from "react";

function App() {
  return (
    <div>
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto rounded-full shadow-md" />
          <span className="text-xl font-bold text-gray-800">Sydney Colorful Balloon</span>
        </div>
        <nav className="space-x-4">
          <a href="#services" className="text-blue-600 hover:underline">Our Services</a>
          <a href="#showcase" className="text-blue-600 hover:underline">Showcase</a>
          <a href="#why" className="text-blue-600 hover:underline">Why Choose Us</a>
          <a href="#contact" className="text-blue-600 hover:underline">Get in Touch</a>
        </nav>
      </header>

      {/* Banner 区域 */}
      <section className="pt-24">
        <img src="/slogan-banner.png" alt="Banner" className="w-full h-auto object-cover" />
      </section>

      {/* 正文内容 */}
      <main className="p-6 space-y-10">
        {/* About Us */}
        <section className="space-y-4" id="about">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-base max-w-3xl">
            Welcome to Sydney Colorful Balloon – your trusted partner in creating magical moments!
            We are a passionate team of balloon stylists based in Sydney, offering custom balloon
            decorations for birthdays, proposals, corporate events, pet parties, and more. With a focus
            on creativity, quality, and customer experience, we transform ordinary spaces into unforgettable celebrations.
          </p>
        </section>

        {/* Our Services */}
        <section className="space-y-4" id="services">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <ul className="list-disc list-inside text-base max-w-3xl">
            <li>Custom Balloon Styling</li>
            <li>Theme Party Packages</li>
            <li>Corporate Event Decoration</li>
            <li>Pet Celebration Setups</li>
            <li>Balloon Craft Workshops for Kids</li>
          </ul>
        </section>

        {/* Showcase */}
        <section className="space-y-4" id="showcase">
          <h2 className="text-3xl font-semibold">Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 h-40 rounded shadow flex items-center justify-center">Image 1</div>
            <div className="bg-gray-100 h-40 rounded shadow flex items-center justify-center">Image 2</div>
            <div className="bg-gray-100 h-40 rounded shadow flex items-center justify-center">Image 3</div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-4" id="why">
          <h2 className="text-3xl font-semibold">Why Choose Us</h2>
          <ul className="list-disc list-inside text-base max-w-3xl">
            <li>Creative & High-Quality Designs</li>
            <li>Custom Packages to Fit All Budgets</li>
            <li>Friendly, Reliable Service</li>
            <li>Fast Setup with Attention to Detail</li>
            <li>Local Sydney-Based Team</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-4" id="contact">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-base">Ready to make your next event unforgettable? Contact us via Instagram or email below!</p>
          <div className="space-y-2">
            <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" href="https://www.instagram.com/colorful_balloon_aus" target="_blank">Instagram</a>
            <br />
            <a className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition" href="mailto:dcballoonaus@gmail.com">Email Us</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
