import React from 'react'
import  BlogBg from '../../images/pexels-pixabay-159519.jpg';
import './blog.css';
import loading from '../../images/loadinggif.gif'


const Blog = () => {


  const backgroundStyle = {
    backgroundImage: `url(${BlogBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundPosition: 'center',
    width: '100%',
  };

  return (

    <>
    <section className='hero1' style={backgroundStyle}>

      <div className='blogbg'>
        <h1 className='h1blog'>Coming soon...</h1>
        <img src={loading} alt='loading' className='loading'/>
      </div>
      </section>
      
    </>
  )
}

export default Blog
