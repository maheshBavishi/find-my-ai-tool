import React from 'react'
import styles from './blogdetailsbanner.module.scss';
const BlogdetailsImage = '/assets/images/blog-details.png';
export default function Blogdetailsbanner() {
  return (
    <div className={styles.blogdetailsbanner}>
      <img src={BlogdetailsImage} alt="BlogdetailsImage"/>
    </div>
  )
}
