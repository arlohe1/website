import React, { useState } from "react";
import Img from "gatsby-image";
import UseGallery from "./UseGallery";

import YearButton from "./YearButton";

const PhotoGallery = () => {
    const [activeYear, setActiveYear] = useState(0);

    const images = UseGallery();

    const years = [2017, 2018, 2019, 2020, 2021];
    const yearButtons = years.map((year) => (
        <YearButton
            key={year}
            year={year}
            cbkSetActiveYear={setActiveYear}
            highlight={year === activeYear}
        />
    ));

    return (
        <div>
            {yearButtons}
            <br />
            <br />
            {images
                .filter(({ id, name, fixed, date }) => date.substr(0, 4) === "" + activeYear)
                .map(({ id, name, fixed }) => (
                    <Img style={{ margin: "5px" }} key={id} fixed={fixed} title={name} />
                ))}
            {activeYear === 2021 && (
                <div>
                    <br />
                    <div style={{ marginLeft: "40%" }}>Coming soon!</div>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
