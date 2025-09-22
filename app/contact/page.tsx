import { Metadata } from 'next';
import { ContactView } from '@/components/pages/ContactView';
import { studioInfo } from '@/data/studio';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Stay in touch with ${studioInfo.name} across our cozy corners of the internet.`
};

export default function ContactPage() {
  return <ContactView />;
}
