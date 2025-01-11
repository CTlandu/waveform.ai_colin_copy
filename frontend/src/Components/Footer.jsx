const Footer = () => {
  return (
    <footer className="bg-primary-30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Title Section */}
        <div className="mb-8">
          <h2 className="text-white text-4xl font-bold mb-2">Waveform.ai</h2>
          <h3 className="text-white text-2xl">The College of William & Mary</h3>
        </div>

        {/* Decorative Line */}
        <div className="relative">
          {/* Background line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary-50/30" />

          {/* Dots */}
          <div className="relative flex justify-between max-w-3xl">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary-50/50"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
