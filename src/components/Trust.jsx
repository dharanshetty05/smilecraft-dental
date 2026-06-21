"use client";

import CountUp from "react-countup";
import { Star, Users, Clock } from "lucide-react";

export default function Trust() {
  const items = [
    {
      icon: Users,
      value: 5000,
      suffix: "+",
      label: "Patients Treated",
    },
    {
      icon: Star,
      value: 4.8,
      decimals: 1,
      label: "Google Rating",
    },
    {
      icon: Clock,
      text: "Same Day",
      label: "Emergency Care",
    },
  ];

  return (
    <section className="relative bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 divide-y divide-neutral-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 p-8 transition-all duration-300 hover:bg-neutral-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <div>
                    <div className="text-3xl font-bold tracking-tight text-neutral-900">
                      {item.text ? (
                        item.text
                      ) : (
                        <>
                          <CountUp
                            end={item.value}
                            duration={2}
                            decimals={item.decimals || 0}
                          />
                          {item.suffix}
                        </>
                      )}
                    </div>

                    <p className="mt-1 text-sm text-neutral-500">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}