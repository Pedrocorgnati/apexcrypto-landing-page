import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const TagLine = ({ children, className }: Props) => {
  return (
    <div className={cn("tagline inline-flex items-center gap-3", className)}>
      <span className="block h-px w-5 bg-n-4" />
      <span className="uppercase text-n-2">{children}</span>
    </div>
  );
};

export default TagLine;
