export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Restaurant Owners &amp; Food Operators
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Calculate Real Profit Margins<br />
          <span className="text-[#58a6ff]">for Every Menu Item</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing which dishes make money. Track ingredient costs, portion sizes, labor time, and overhead per dish — and instantly see which items are killing your margins.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to start. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🧾</div>
            <h3 className="font-semibold text-white mb-2">Ingredient Cost Tracking</h3>
            <p className="text-sm text-[#8b949e]">Log every ingredient with unit costs and portion sizes. Costs update across all recipes automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">⏱️</div>
            <h3 className="font-semibold text-white mb-2">Labor &amp; Overhead Allocation</h3>
            <p className="text-sm text-[#8b949e]">Factor in prep time, cook time, and a share of fixed overhead costs to get true per-dish profitability.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="font-semibold text-white mb-2">Margin Dashboard</h3>
            <p className="text-sm text-[#8b949e]">See your full menu ranked by profit margin. Spot low-performers and make data-driven pricing decisions.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple, Honest Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu items & recipes",
              "Ingredient cost database",
              "Labor & overhead allocation",
              "Real-time margin calculations",
              "Low-margin item alerts",
              "CSV export for your accountant"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200 text-center"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need accounting experience to use this?</h3>
            <p className="text-sm text-[#8b949e]">Not at all. Just enter your ingredients, portion sizes, and selling prices. The app handles all the math and shows you clear margin percentages for every dish.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I use this for a food truck or cafe?</h3>
            <p className="text-sm text-[#8b949e]">Yes. The tool works for any food business — restaurants, food trucks, cafes, catering operations, and ghost kitchens. Overhead allocation adapts to your setup.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens if I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">You keep access until the end of your billing period. Your data is exportable at any time, so you never lose your ingredient and recipe records.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-xs text-[#8b949e] border-t border-[#21262d]">
        &copy; {new Date().getFullYear()} Restaurant Menu Profit Margin Calculator. All rights reserved.
      </footer>
    </main>
  );
}
