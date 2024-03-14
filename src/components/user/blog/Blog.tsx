import React from 'react'
import './Blog.scss'
import { FaArrowRightLong } from 'react-icons/fa6'

interface BlogProps {
  heading: string;
  content: string;
  image: string;
  createDate: string;
  // Add other properties here if needed
}

const BlogComponent: React.FC<BlogProps> = ({ image, heading, content, createDate }) => {

  // this code using for to short the content letters.
  let displayContent;

  if (content.length <= 10) {
    displayContent = content;
  } else {
    displayContent = (
      <>
        {content.slice(0, 40)}
        <br />
        {content.slice(40, 77)} ...
      </>
    );
  }

  // this fuction using for change date format.
  function formatDate(isoDate: any) {
    const date = new Date(isoDate);
  
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
    return formattedDate;
  }
  
  const formattedDate = formatDate(createDate);

  return (
    <div className='Blog'>

        <img src={image} alt="Vegetables on sale at the market" className='image'/>
        <div className='content'>
        <div className='fs-6 fw-bold' style={{color:'gray'}}>{formattedDate}</div>
        <div className='my-2'>
        <div className='heading'>{heading}</div>
        {/* <div>{content}</div> */}
        <div style={{ whiteSpace: 'pre-line' }}>
          {displayContent}
</div>
        </div>
            <div className='read-more-container'><div className='m-2 text-nowrap'>Read More</div><div><FaArrowRightLong /></div></div>
        </div>
    </div>
  )
}

export default BlogComponent;