export const Button = ({ className = "", size = "default", children, href, ...props }) => {
    const baseClasses = "relative inline-flex overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-4 py-2";

    const classes = `${baseClasses} ${className}`;
    const Component = href ? "a" : "button";

    return (
        <Component className={classes} href={href} {...props}>
            <span className="relative flex items-center justify-center gap-2 text-base">{children}</span>
        </Component>
    );
};