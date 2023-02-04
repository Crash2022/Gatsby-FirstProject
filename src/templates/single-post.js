import * as React from 'react';
import {Link, graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const SinglePost = ({data}) => {

    const { html } = data.markdownRemark
    const { title, url, category, image } = data.markdownRemark.frontmatter
    const img = getImage(image);

    return (
        <Layout>
            <Seo title={title}/>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <GatsbyImage alt={title} image={img}/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }}/>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};

// export const Head = () => <Seo title={title}/>;

export default SinglePost;

export const query = graphql(`
    query PostQuery($url: String) {
        markdownRemark(frontmatter: {url: {eq: $url}}) {
            html
                frontmatter {
                    title
                    url
                    category
                    image {
                    childImageSharp {
                        gatsbyImageData(width: 600)
                    }
                }
            }
        }
    }
`);
