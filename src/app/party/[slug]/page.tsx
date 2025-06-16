export default function PartyPage({ params }: { params: { slug: string } }) {
  return <div>Product ID: {params.slug}</div>;
}