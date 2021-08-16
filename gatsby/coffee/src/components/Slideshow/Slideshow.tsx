import React, { useState } from 'react';
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


    const [imageIndex, setImageIndex] = useState(0)

    function nextImage() {
        if ( imageIndex === images.length - 1) {
            setImageIndex(0)
        } else {
            setImageIndex(imageIndex+1)
        }
    } 

    function prevImage() {
        if ( imageIndex === 0 ) {
            setImageIndex(images.length-1)
        } else {
            setImageIndex(imageIndex-1)
        }
    }

 
    return (
        <div className="relative flex justify-center">
            <div className="absolute z-10 w-full h-full flex justify-between items-center">
                    <div className="cursor-pointer" onClick={ prevImage }>
                        <svg  xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="cursor-pointer" onClick={ nextImage }>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
            </div>
            <GatsbyImage className="h-216" image={getImage(images[imageIndex].node)} alt="slide" />
        </div>
    );
};

export default Slideshow;