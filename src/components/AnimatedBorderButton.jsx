export const AnimatedBorderButton = ({
  children,
  href = "#",
  download,
  variant = "default",
}) => {
  const isDownload = typeof download === "string";

  return (
    <a
      href={href}
      download={isDownload ? download : undefined}
      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-foreground rounded-full bg-transparent border border-border overflow-hidden group"
    >
      {/* Animated glowing border */}
      <span className="absolute inset-0 rounded-full p-[2px]">
        <span className="absolute inset-0 rounded-full animate-spin-slow bg-[conic-gradient(var(--color-primary),transparent,transparent,var(--color-primary))]" />
      </span>

      {/* Inner background mask */}
      <span className="absolute inset-[2px] rounded-full bg-background" />

      {/* Hover glow effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-500 bg-primary blur-xl" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </a>
  );
};