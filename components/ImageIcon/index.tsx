import { Image } from './imageIcon.styles';

export type ImageIconProps = {
  url: string,
  onClick: (e?: React.MouseEvent) => void
}

export default function ImageIcon({ url, onClick }: ImageIconProps) {
  return <Image src={url} onClick={onClick} />
}