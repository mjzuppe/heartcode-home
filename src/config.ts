import type { CollectionEntry } from 'astro:content'

export type CaseStudy = CollectionEntry<'caseStudies'>

export type Site = {
  website: string
  author: string
  description: string
  title: string
  ogImage: string
}

export type Contact = {
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  phone: string
  email: string
}

export type SocialObjects = {
  name: SocialMedia
  href: string
  label: string
  ariaLabel: string
}[]

export type SocialMedia =
  | 'github'
  | 'dribbble'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'mail'
  | 'twitter'
  | 'x'

export const SITE: Site = {
  website: 'https://crator-astro.tailwindawesome.com', // replace this with your deployed domain
  author: 'Rodrigo Aguilar',
  description:
    "Crator is a digital agency with a focus on creative, interactive and innovative design and development. Our team of designers, developers and strategists work together to create customized solutions that are unique to each client's needs.",
  title: 'Crator Studio',
  ogImage: 'crator-og.png',
}

export const CONTACT: Contact = {
  address: {
    street: '123 W. Kanye Street',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90001',
  },
  phone: '+1-202-555-0132',
  email: 'hello@crator.com',
}

export const SOCIALS: SocialObjects = [
  {
    name: 'instagram',
    href: '#',
    label: 'Instagram',
    ariaLabel: 'Follow on Instagram',
  },
  {
    name: 'facebook',
    href: '#',
    label: 'Facebook',
    ariaLabel: 'Follow on Facebook',
  },
  {
    name: 'x',
    href: '#',
    label: 'Twitter / X',
    ariaLabel: 'Follow on X',
  },
]
