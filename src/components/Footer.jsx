const Footer = () => {
  return (
    <footer className="bg-[var(--black)] text-[var(--white)] w-full">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--accent)]">
            Roddob Crochet
          </h2>
          <p className="mt-3 text-sm text-[var(--grey)] italic">
            Where creativity has no bounds
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--grey)]">
            Handcrafted crochet pieces made with passion, care, and creativity.
            Each design is unique, warm, and beautifully woven.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">
            Useful Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/store"
                className="hover:text-[var(--accent)] transition"
              >
                Crochet Store
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[var(--accent)] transition"
              >
                Contact Roddob Crochet
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[var(--accent)] transition"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Sponsors & Credits */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">
            Sponsors & Credits
          </h3>

          <ul className="space-y-3 text-sm text-[var(--grey)]">
            <li>
              <span className="text-[var(--white)]">Sponsored by:</span>
              <ul className="ml-4 mt-2 space-y-1">
                <li>• Ronkelon Cakes</li>
                <li>• Kelon Consult Ltd</li>
              </ul>
            </li>

            <li className="pt-3">
              <span className="text-[var(--white)]">Website Producer:</span>
              <p className="mt-1">
                Prime Studios
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--grey)]/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-[var(--grey)]">
            © {new Date().getFullYear()} Roddob Crochet. All rights reserved.
          </p>

          <p className="text-[var(--grey)]">
            Crafted with ❤️ using <span className="text-[var(--accent)]">creativity</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
