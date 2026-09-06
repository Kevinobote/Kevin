import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter, FaSquareGithub } from 'react-icons/fa6';
import { SiGooglescholar, SiOrcid, SiHuggingface } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';

// Single source of truth for external links.
export const HUGGINGFACE_URL = 'https://huggingface.co/RareElf';

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevinobote/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Kevinobote', icon: FaSquareGithub },
  { label: 'Hugging Face', href: HUGGINGFACE_URL, icon: SiHuggingface },
  { label: 'X', href: 'https://x.com/KevinObote6', icon: FaXTwitter },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=QzMwc7IAAAAJ&hl=en', icon: SiGooglescholar },
  { label: 'ORCID', href: 'https://orcid.org/0009-0000-7099-2154', icon: SiOrcid },
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:kevinobote49@gmail.com', icon: BiLogoGmail },
  { label: 'WhatsApp', href: 'https://wa.me/254700885748', icon: FaWhatsapp },
];
