import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import {Helmet} from 'react-helmet'
import {Toaster} from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
          <meta name='description' content={description}/>
          <meta name='keywords' content={keywords}/>
          <meta name='author' content={author}/>
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" /> 
      </Helmet>
      <Header/>
      <main style={{minHeight: '80vh'}}>
      <Toaster />
        {children}
      </main>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: "Tấu Hài - Hải Sản",
  description: "MERN stack",
  keywords: "Reactjs, NodeJs, ExpressJs, MongoDB",
  author: "Tú Ngu",
}

export default Layout