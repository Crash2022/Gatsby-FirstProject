import * as React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const SinglePost = () => (
    <Layout>
        {/*<Seo title="Post 1"/>*/}
        <div>
            <h1>Post 1</h1>
        </div>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
);

export const Head = () => <Seo title="Post 1"/>;

export default SinglePost;
