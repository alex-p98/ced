'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, LucideProps } from 'lucide-react';
import { ComponentProps, PropsWithChildren, createElement } from 'react';

export function ClientLink(props: PropsWithChildren<ComponentProps<typeof Link>>) {
  return <Link {...props} />;
}

export function ClientImage(props: ComponentProps<typeof Image>) {
  return <Image {...props} />;
}

export function ClientChevronDown(props: LucideProps) {
  return createElement(ChevronDown, props);
} 