import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-off-white font-serif antialiased relative overflow-hidden">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWx/g7hAAAAJnRSTlMAAPcIEyQiM0Rjfn+goqywzNfg7O7w8fL09fb3+Pn6+/z+3c+J/AAAArklEQVR42qXWZQIEMQDA0T6lJd4f7z9Qd6sU7tN0e9yC2XQpP9Yf4u81v+I/9W84a29u7O8q/s7+398+yK8Q/vXyDv9A/fX1/O/w9/2+5R+V+9C+N/P/y+/v92+Tf5f3/7+C/o//79v/28+/3B+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+x+8v3+7f/2/9X+x+8v3+8v3+/f/P7y+/v7+6/v7+y/v7+/9z/v7+y/v7+/9/w+Dv+D+wAAAABXq8cAAABESURBVjBbY+h/B1yA/kKqYcACQzVjXgKGAx2qCgHVDGkMkgwODC1kYvA04GxgdGg4GBgA8H+h/B1f/r9CgBMAADm0b798H0wAAAAAElFTkSuQmCC")'}} />

      {/* Header */}
      <header className="relative z-10 p-6 md:p-10 flex justify-between items-center bg-black bg-opacity-70 backdrop-blur-sm">
        <h1 className="text-3xl lg:text-5xl font-heading tracking-widest uppercase">
          Noir Brew
        </h1>
        <nav className="hidden md:flex space-x-8 lg:space-x-12 text-lg lg:text-xl font-body uppercase">
          <a href="#hero" className="hover:text-gold transition-colors duration-300">Home</a>
          <a href="#drinks" className="hover:text-gold transition-colors duration-300">Drinks</a>
          <a href="#about" className="hover:text-gold transition-colors duration-300">About</a>
          <a href="#testimonials" className="hover:text-gold transition-colors duration-300">Testimonials</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Contact</a>
        </nav>
        <button className="md:hidden text-2xl">☰</button> {/* Mobile menu icon */}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="h-screen flex flex-col justify-center items-center text-center p-6 bg-cover bg-center" style={{ backgroundImage: 'url("[images.unsplash.com](https://images.unsplash.com/photo-1541167760495-998db42187b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)")' }}>
          <div className="bg-black bg-opacity-60 backdrop-blur-sm p-8 md:p-12 max-w-4xl border-l border-b border-off-white/30">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading uppercase leading-tight tracking-wider animate-fade-in-up">
              Where Shadows <br />
              Meet <span className="text-gold">Sip</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl font-body max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-1s">
              Experience the untold stories brewed in every cup. A sanctuary for the soul, shrouded in mystery and rich aroma.
            </p>
            <a href="#drinks" className="mt-8 inline-block px-8 py-3 border border-off-white text-off-white text-lg font-body uppercase tracking-wider hover:bg-off-white hover:text-black transition-all duration-500 opacity-0 animate-fade-in-up delay-2s">
              Explore Our Brews
            </a>
          </div>
        </section>

        {/* Featured Drinks */}
        <section id="drinks" className="py-20 md:py-32 px-6 lg:px-20 bg-black min-h-screen grid content-center">
          <h3 className="text-4xl md:text-6xl text-center font-heading uppercase mb-16 md:mb-24">
            Curated Elixirs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Drink Card 1 */}
            <div className="group relative overflow-hidden text-center cursor-pointer">
              <img src="[images.unsplash.com](https://images.unsplash.com/photo-1579735955371-ed170d6a2f7c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" alt="Shadowed Espresso" className="w-full h-80 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className="text-2xl font-heading uppercase tracking-wide text-off-white">Shadowed Espresso</span>
                <p className="mt-2 text-sm font-body text-off-white/80">A profound dark roast, a whispered secret in every drop.</p>
              </div>
              <h4 className="mt-4 text-xl font-heading uppercase tracking-wide group-hover:text-gold transition duration-300">Shadowed Espresso</h4>
            </div>

            {/* Drink Card 2 */}
            <div className="group relative overflow-hidden text-center cursor-pointer">
              <img src="[images.unsplash.com](https://images.unsplash.com/photo-1517256038446-c23f18a221f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" alt="Midnight Bloom Tea" className="w-full h-80 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className="text-2xl font-heading uppercase tracking-wide text-off-white">Midnight Bloom Tea</span>
                <p className="mt-2 text-sm font-body text-off-white/80">Delicate florals entwined with the mystery of the night.</p>
              </div>
              <h4 className="mt-4 text-xl font-heading uppercase tracking-wide group-hover:text-gold transition duration-300">Midnight Bloom Tea</h4>
            </div>

            {/* Drink Card 3 */}
            <div className="group relative overflow-hidden text-center cursor-pointer">
              <img src="[images.unsplash.com](https://images.unsplash.com/photo-1544787216-09a5624ca2fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" alt="Urban Legend Latte" className="w-full h-80 object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                <span className="text-2xl font-heading uppercase tracking-wide text-off-white">Urban Legend Latte</span>
                <p className="mt-2 text-sm font-body text-off-white/80">Layers of rich flavor, a myth whispered in every creamy swirl.</p>
              </div>
              <h4 className="mt-4 text-xl font-heading uppercase tracking-wide group-hover:text-gold transition duration-300">Urban Legend Latte</h4>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 px-6 lg:px-20 bg-black min-h-screen flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-6xl font-heading uppercase mb-12">
              The Art of Shadow
            </h3>
            <p className="text-lg md:text-xl font-body leading-relaxed mb-8">
              Born from the silent alleys of Tokyo's golden age, Noir Brew is more than a cafe. It is a canvas where the artistry of Japanese noir meets the delicate craft of coffee and tea. We invite you to step away from the glare of the world, into a space of quiet contemplation and exquisite taste. Each blend is a carefully composed narrative, a moment stolen from time.
            </p>
            <p className="text-lg md:text-xl font-body leading-relaxed max-w-3xl mx-auto">
              Our minimalist aesthetic, inspired by classic Japanese cinema, allows the nuanced flavors and your own thoughts to take center stage. Discover your personal refuge, where every sip deepens the mystery.
            </p>
          </div>
        </section>

        {/* Quote/Testimonial Section */}
        <section id="testimonials" className="py-20 md:py-32 px-6 lg:px-20 bg-black min-h-screen grid content-center">
          <h3 className="text-4xl md:text-6xl text-center font-heading uppercase mb-16 md:mb-24">
            Echoes in the Dark
          </h3>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Testimonial 1 */}
            <div className="bg-glassmorphism border border-off-white/20 p-8 md:p-10 text-center relative group overflow-hidden">
              <span className="absolute inset-0 border border-off-white/50 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              <p className="text-xl md:text-2xl font-body italic mb-6 relative z-10">
                “A whisper of calm in the chaos. The coffee here isn't just a drink; it's a profound experience. I find myself lost in thought with every visit, surrounded by an atmosphere unlike any other.”
              </p>
              <footer className="text-lg font-heading uppercase text-gold relative z-10">
                — K. Ishikawa, Patron
              </footer>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-glassmorphism border border-off-white/20 p-8 md:p-10 text-center relative group overflow-hidden">
              <span className="absolute inset-0 border border-off-white/50 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
              <p className="text-xl md:text-2xl font-body italic mb-6 relative z-10">
                “Noir Brew is my secret escape. The attention to detail, from the minimalist design to the rich, complex flavors of their tea, creates a truly unforgettable mood. It's cinematic beauty in a cup.”
              </p>
              <footer className="text-lg font-heading uppercase text-gold relative z-10">
                — E. Sato, Artist
              </footer>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 md:py-16 px-6 lg:px-20 bg-black bg-opacity-70 backdrop-blur-sm text-center text-sm md:text-base font-body text-off-white/80">
        <p>&copy; {new Date().getFullYear()} Noir Brew. All Rights Reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
        </div>
        <p className="mt-4">Designed with a whisper of shadows and the scent of brewing dreams.</p>
      </footer>
    </div>
  );
};

export default App;
