
import { useState } from "react";


const osProgress = [
  { name: "Windows", status: "Finished" },
  { name: "Mac", status: "Not started" },
  { name: "Linux", status: "Not started" },
];

const features = [
  "Local-only storage, zero tracking",
  "Instant search and tagging",
  "Rich text and markdown support",
  "Dark mode and custom themes",
  "Lightning fast, minimal UI",
];

const statusStyles = {
  Finished: "bg-green-100 text-green-700 border-green-200",
  "Not started": "bg-gray-100 text-gray-500 border-gray-200",
};

const statusDot = {
  Finished: "bg-green-500",
  "Not started": "bg-gray-400",
};

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center px-2 pb-8 overflow-x-hidden">
      {/* Floating Glassy Control Bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 flex flex-row items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 rounded-lg bg-white/70 backdrop-blur-md shadow-lg border border-gray-200 max-w-xs sm:max-w-full min-w-0 whitespace-nowrap">
        <span className="font-medium text-xs sm:text-base md:text-lg text-gray-900 whitespace-nowrap">Beta ready for Windows</span>
        <a
          href="#"
          className="px-3 sm:px-6 py-1 rounded-lg bg-black text-white font-semibold text-xs sm:text-base md:text-lg hover:bg-gray-900 transition-all focus:outline-none sm:ml-6"
        >
          Get
        </a>
      </div>
      {/* Main Content */}
      <main className="w-full max-w-2xl mt-24 sm:mt-32 md:mt-40 flex flex-col gap-8 sm:gap-10 px-2">
        <section>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">Obscure</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl">The privacy-first note app that stores notes locally with zero tracking—your thoughts stay on your device, always.</p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">What is Obscure?</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4">Obscure is a minimal, privacy-first note-taking app. Your notes are stored locally, never sent to a server, and there’s zero tracking. Enjoy instant search, tagging, markdown support, and a beautiful distraction-free UI.</p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Features</h2>
          <ul className="space-y-2 sm:space-y-3 pl-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 rounded-full bg-indigo-400 inline-block" />
                {feature}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">OS Progress</h2>
          <ul className="space-y-3 sm:space-y-4">
            {osProgress.map((os) => (
              <li key={os.name} className="flex items-center gap-2 sm:gap-3">
                <span className={`w-3 h-3 rounded-full inline-block ${statusDot[os.status]}`}></span>
                <span className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">{os.name}</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full border text-xs font-semibold ${statusStyles[os.status]}`}>{os.status}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      {/* Waitlist Form at the bottom */}
      <div className="w-full flex flex-col items-center justify-center mt-8 sm:mt-12 px-2 gap-3">
        {/* Pill-shaped waitlist form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-row items-center bg-white shadow-lg rounded-lg border border-gray-200 px-2 py-2 gap-2"
        >
          <input
            type="email"
            required
            placeholder="john.doe@gmail.com"
            className="flex-1 px-4 sm:px-4 h-10 sm:h-12 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none text-sm sm:text-base rounded-l-full border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            style={{ minWidth: 0 }}
          />
          <button
            type="submit"
            className="h-10 sm:h-12 px-4 sm:px-6 rounded-lg bg-black text-white text-sm sm:text-base font-semibold hover:bg-gray-900 transition-all focus:outline-none whitespace-nowrap"
            disabled={submitting}
          >
            {submitting ? (
              <svg className="animate-spin h-5 w-5 text-white mx-auto" viewBox="0 0 50 50">
                <circle className="opacity-20" cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="6" fill="none" />
                <path fill="currentColor" d="M25 5a20 20 0 0 1 20 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            ) : (
              "Join wait list"
            )}
          </button>
        </form>
        {/* Avatars and launch label */}
        <div className="flex items-center gap-2 mt-1">
          {/* Overlapping avatars */}
          <div className="flex -space-x-3">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold border-2 border-white z-10">+25</span>
            <span className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white z-9" />
            <span className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white z-8" />
            <span className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white z-7" />
            <span className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white z-6" />
          </div>
          <span className="text-gray-500 text-sm font-medium ml-2">Be Part of the Launch!</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
