import BlogList from '@/components/blogList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '博客列表',
};

function Slug() {
  return <BlogList />;
}

export default Slug;
