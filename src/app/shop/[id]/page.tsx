// app/shop/[id]/page.tsx
import ShopDetailClient from '@/components/shop/ShopDetailClient';

export async function generateStaticParams() {
  return [{ id: 'fallback' }];
}

export default function ShopDetail() {
  return <ShopDetailClient></ShopDetailClient>;
}
