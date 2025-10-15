export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 flex items-center justify-center overflow-hidden relative">
      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img
            src="/logo.png"
            alt="EZvnts"
            className="w-48 h-48 drop-shadow-[0_0_40px_rgba(147,51,234,0.6)] animate-pulse"
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-white mb-4 font-semibold">
          Book everything for your event.
        </p>
        <p className="text-xl md:text-2xl text-purple-300 mb-12">
          Or get paid to do what you do.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-3">🎪</div>
            <div className="text-white font-semibold">Venues</div>
            <div className="text-slate-400 text-sm">Spaces for any size</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-3">🎵</div>
            <div className="text-white font-semibold">Entertainment</div>
            <div className="text-slate-400 text-sm">DJs, bands, performers</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-3">🍔</div>
            <div className="text-white font-semibold">Food</div>
            <div className="text-slate-400 text-sm">Catering, food trucks</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
            <div className="text-4xl mb-3">💡</div>
            <div className="text-white font-semibold">Production</div>
            <div className="text-slate-400 text-sm">A/V, lighting, staging</div>
          </div>
        </div>

        {/* Launch Cities */}
        <div className="text-slate-400 mb-8">
          <p className="text-lg mb-2">Launching in</p>
          <p className="text-white font-semibold">
            Las Vegas • Los Angeles • Chicago • New York • Atlanta
          </p>
        </div>

        {/* Footer */}
        <div className="text-slate-500 text-sm">
          <a href="mailto:brandon.dune@ezvnts.com" className="hover:text-purple-400 transition-colors">
            brandon.dune@ezvnts.com
          </a>
          {' • '}
          <span>© 2025 EZvnts</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
