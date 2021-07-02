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
        <div className="relative flex justify-center">
            <div className="absolute z-10 w-full h-full flex justify-between items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
            </div>
            <GatsbyImage className="h-216" image={currentImage} alt="slide" />
        </div>
    );
};

export default Slideshow;