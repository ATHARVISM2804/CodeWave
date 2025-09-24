import React from 'react';
import BlogSection from '../components/BlogSection';

const Blog: React.FC = () => {
	return (
		<div>
			<BlogSection limit={100} showAllButton={false} />
		</div>
	);
};

export default Blog;
