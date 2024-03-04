import React from "react";

const HighlightSearchText = React.memo(
  ({
    text,
    highlightSearchText,
  }: {
    text: string;
    highlightSearchText: string;
  }) => {
    const parts = text.split(new RegExp(`(${highlightSearchText})`, "gi"));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightSearchText.toLowerCase() ? (
            <mark key={i}>{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </span>
    );
  },
);
export default HighlightSearchText;
