export default function News({ params }: { params: { slug: string } }) {
  return <h1>News {params.slug}</h1>;
}
