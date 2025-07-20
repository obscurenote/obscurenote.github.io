
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async action
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setEmail("");
    // You can add your actual submit logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl gap-4">
      <input
        type="email"
        required
        placeholder="Enter your email address"
        className="flex-1 px-6 py-4 rounded-lg border-2 border-indigo-500 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={submitting}
      />
      <button
        type="submit"
        className="px-8 py-4 rounded-lg bg-indigo-600 text-white text-lg font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center min-w-[150px]"
        disabled={submitting}
      >
        {submitting ? (
          <svg className="animate-spin h-7 w-7 text-indigo-500" viewBox="0 0 50 50">
            <circle className="opacity-20" cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="6" fill="none" />
            <path fill="currentColor" d="M25 5a20 20 0 0 1 20 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        ) : (
          "Join Waitlist"
        )}
      </button>
    </form>
  );
};

export { WaitlistForm };
