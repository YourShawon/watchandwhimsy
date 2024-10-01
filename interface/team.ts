export interface SocialMedia {
  twitter: string
  instagram: string
  linkedIn: string
  github: string
}

export interface TeamMember {
  name: string
  image: string
  role: string
  media: SocialMedia
}

export interface LiProps {
  children: React.ReactNode
  icon: string
  delay: string
}
