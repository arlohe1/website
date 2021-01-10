import React from "react";

const YearButton = (props) => {
    const { year, cbkSetActiveYear, highlight } = props;
    const color = highlight ? "blue" : "black";
    const border = highlight ? "2px solid black" : "none";
    return (
        <button
            style={{
                color: color,
                background: "none",
                border: border,
                fontSize: "0.8em",
                borderRadius: "5px",
                width: "20%",
            }}
            onClick={() => cbkSetActiveYear(year)}
        >
            {year}
        </button>
    );
};

export default YearButton;
