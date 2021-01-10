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
                    modifiedTime
                    childImageSharp {
                        id
                        fixed(width: 184) {
                            ...GatsbyImageSharpFixed
                        }
                        fields {
                            exif {
                                meta {
                                    dateTaken
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return data.allFile.nodes
        .filter((node) => node.childImageSharp !== null)
        .map((node) => {
            const dateTaken = node.childImageSharp.fields.exif.meta.dateTaken;
            return {
                id: node.id,
                name: node.name,
                fixed: node.childImageSharp.fixed,
                date:
                    dateTaken !== null && dateTaken < node.modifiedTime
                        ? dateTaken
                        : node.modifiedTime,
            };
        })
        .sort((a, b) => (a.date >= b.date ? 1 : -1))
        .reverse();
};

export default UseGallery;
