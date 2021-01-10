import React from "react";

import Layout from "../components/layout";
import PhotoGallery from "../components/snacks/PhotoGallery";

const IndexPage = () => (
    <Layout>
        <div className="content">
            <p>Welcome to Snacks&Snacks.</p>
            <p>
                Snacks&Snacks is a photo series I started in Fall 2017 to document my college years.
                The name, coined by Dhruv, refers to the two key characteristics of a Snacks&Snacks
                photo:
            </p>
            <ol>
                <li> A snack in the front (the food - with some exceptions)</li>
                <li> A snack in the back (the friends!)</li>
            </ol>
            <br />
            <PhotoGallery />
        </div>
    </Layout>
);

export default IndexPage;
