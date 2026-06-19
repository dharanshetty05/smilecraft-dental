function ProofStrip() {
  const items = [
    { stat: "10+", label: "Years of expertise" },
    { stat: "5,000+", label: "Smiles transformed" },
    { stat: "Same-day", label: "Emergency slots" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
      {items.map(({ stat, label }, i) => (
        <div key={stat} className="flex items-center gap-2">
          {i !== 0 && (
            <span aria-hidden="true" className="h-4 w-px bg-neutral-200" />
          )}
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-neutral-900">{stat}</span>
            <span className="text-xs text-neutral-400">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

