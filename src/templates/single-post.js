import React from 'react'
import {Link, graphql} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const SinglePost = ({data}) => {

    const {html} = data.markdownRemark
    const {title, image} = data.markdownRemark.frontmatter
    const img = getImage(image);

    return (
        <Layout>
            <div className='singlePost_box'>
                <Seo title={title}/>
                <div>
                    <GatsbyImage alt={title} image={img}/>
                </div>
                <div className='singlePost_post' dangerouslySetInnerHTML={{__html: html}}/>
                <Link to="/">Go back to the homepage</Link>
            </div>
        </Layout>
    );
};

// export const Head = () => <Seo title={title}/>

export default SinglePost

export const query = graphql`
    query PostQuery($url: String) {
        markdownRemark(frontmatter: {url: {eq: $url}}) {
            html
            frontmatter {
                title
                url
                category
                image {
                    childImageSharp {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
    }
`;
