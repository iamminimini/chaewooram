// app/shop/[id]/page.tsx
import ShopDetailClient from '@/components/shop/ShopDetailClient';

type ShopDetailProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  const ids = ['1', '2', '3'];

  return ids.map((id) => ({
    id,
  }));
}

export default function ShopDetail({ params }: ShopDetailProps) {
  const { id } = params;

  return <ShopDetailClient id={id}></ShopDetailClient>;
}
