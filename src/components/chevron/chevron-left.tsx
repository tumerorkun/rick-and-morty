import { memo } from "react";
const style = {
    transform: "rotate(180deg)",
};
const ChevronLeft = memo(function ChevronLeft() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            transform="rotate(180)"
            style={style}
            fill="currentColor"
            viewBox="0 0 48 48"
        >
            <path d="M20 12l-2.83 2.83 9.17 9.17-9.17 9.17 2.83 2.83 12-12z" />
        </svg>
    );
});

export { ChevronLeft };
