// About.js
import React from 'react';
import styles from './About.module.css'; // Import CSS module for the About page styles

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.section}>
        <h1 className={styles.heading}>Who We Are</h1> {/* Add a class name for the heading */}
        <div className={styles.underline}></div> {/* Add a div for the underscore */}
        <p>This is the About page content. It provides information about NeuroSphere NI.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lectus nulla. Duis convallis molestie dolor ac tempor. Sed vel pellentesque massa, id placerat urna. In hac habitasse platea dictumst. Sed tristique enim suscipit, porttitor dolor at, ultricies augue. Aliquam velit leo, pharetra id elit vitae, dapibus egestas neque. Praesent dignissim ut augue non mattis. Vivamus convallis iaculis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque at pellentesque tortor, vitae pretium augue. Sed pretium vitae est vel viverra. Morbi sit amet egestas nulla. Duis viverra arcu id quam aliquet lacinia. Nullam malesuada placerat lobortis.</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.subHeading}>Our Mission Statement</h2>
        <div className={styles.underline}></div> {/* Add a div for the underscore */}
        <p>This section describes our mission statement.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed lectus nulla. Duis convallis molestie dolor ac tempor. Sed vel pellentesque massa, id placerat urna. In hac habitasse platea dictumst. Sed tristique enim suscipit, porttitor dolor at, ultricies augue. Aliquam velit leo, pharetra id elit vitae, dapibus egestas neque. Praesent dignissim ut augue non mattis. Vivamus convallis iaculis tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque at pellentesque tortor, vitae pretium augue. Sed pretium vitae est vel viverra. Morbi sit amet egestas nulla. Duis viverra arcu id quam aliquet lacinia. Nullam malesuada placerat lobortis.</p>
      </section>
    </div>
  );
}  

export default About;
