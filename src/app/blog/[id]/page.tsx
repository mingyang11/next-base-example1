import { Card } from 'antd';

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `博客详情${params.id}`,
  };
}

function Slug({ params }: { params: { id: string } }) {
  return (
    <Card
      title={`Default size card${params.id}`}
      extra={<a>More</a>}
      style={{ width: 300 }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
}

export default Slug;
