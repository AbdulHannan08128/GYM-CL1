import React from "react";
import BlogItem from "./BlogItem";
const Blogs = () => {
  return (
    <div className="w-screen flex lg:px-40 overflow-scroll flex-wrap justify-center align-middle mt-10">
      
        <BlogItem  heading={'Heading 1'} title={'Blog 1'}/>
        <BlogItem  heading={'Heading 2'} title={'Blog 2'}/>
        <BlogItem  heading={'Heading 3'} title={'Blog 3'}/>
        <BlogItem  heading={'Heading 4'} title={'Blog 4'}/>
        <BlogItem  heading={'Heading 5'} title={'Blog 5'}/>
        <BlogItem  heading={'Heading 6'} title={'Blog 6'}/>
        <BlogItem  heading={'Heading 7'} title={'Blog 7'}/>
        <BlogItem  heading={'Heading 8'} title={'Blog 8'}/>
        <BlogItem  heading={'Heading 9'} title={'Blog 9'}/>
        <BlogItem  heading={'Heading 10'} title={'Blog 10'}/>
        <BlogItem  heading={'Heading 11'} title={'Blog 11'}/>
        <BlogItem  heading={'Heading 12'} title={'Blog 12'}/>
       
     
    </div>
  );
};

export default Blogs;
