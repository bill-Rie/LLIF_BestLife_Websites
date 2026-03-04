import type { Metadata } from 'next'
import UnderConstruction from '@/components/UnderConstruction'

export const metadata: Metadata = { title: 'Our Story' }

export default function Page() {
  return <UnderConstruction title="Our Story" section="About" />
}
