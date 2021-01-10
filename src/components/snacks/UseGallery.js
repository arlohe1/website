import { useStaticQuery, graphql } from "gatsby";

const UseGallery = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: { sourceInstanceName: { eq: "snacks" } }
                sort: { fields: [modifiedTime], order: DESC }
            ) {
                nodes {
                    id
                    name
                    childImageSharp {
                        id
                        fixed(width: 184) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        }
    `);

    return data.allFile.nodes
        .filter((node) => node.childImageSharp !== null)
        .map((node) => {
            return {
                id: node.id,
                name: node.name,
                fixed: node.childImageSharp.fixed,
            };
        })
        .sort((a, b) => (a.name >= b.name ? 1 : -1))
        .reverse();
};

export default UseGallery;
