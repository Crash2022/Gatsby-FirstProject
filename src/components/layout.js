/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Header from './header'
import './layout.css'

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: `var(--size-content)`,
                    padding: `var(--size-gutter)`,
                }}
            >
                <main>{children}</main>
                <footer
                    style={{
                        marginTop: `var(--space-5)`,
                        fontSize: `var(--font-sm)`,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div>
                        © {new Date().getFullYear()} &middot; Built with
                    </div>
                    <div style={{marginLeft: '5px'}}>
                        <a href="https://www.gatsbyjs.com">Gatsby</a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Layout
