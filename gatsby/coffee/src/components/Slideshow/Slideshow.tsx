import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Slideshow = () => {

    const allImageQuery = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "slides"}, 
            extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
        totalCount
        edges {
            node {
            base
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                )
            }
            }
        }
        }
    }
    `

    const {
        allFile: { edges: images },
    } = useStaticQuery(allImageQuery)

    images.forEach( image => {
        console.log(image.node.base)
        
    });

    const currentImage = getImage(images[0].node)!
 
    return (
        <div>
            <GatsbyImage className="w-96" image={currentImage} alt="slide" />
        </div>
    );
};

export default Slideshow;