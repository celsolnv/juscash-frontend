import React from "react";

interface SectionContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  description,
  children,
  className = ""
}) => {
  return (
    <div
      className={`flex p-6 flex-col items-start gap-6 w-full rounded-lg border border-[#E7E5E4] bg-white shadow-sm ${className}`}
    >
      <div className="flex flex-col items-start gap-1.5 w-full">
        <h2 className="text-[#0C0A09] text-xl font-semibold leading-none tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-[#78716C] text-sm font-normal">{description}</p>
        )}
      </div>

      <div className="flex flex-col items-start gap-6 w-full">{children}</div>
    </div>
  );
};
