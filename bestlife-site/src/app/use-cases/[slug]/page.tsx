import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Use Case' }

export default function Page({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
  return <UnderConstruction title={title} section="Use Cases" />
}
