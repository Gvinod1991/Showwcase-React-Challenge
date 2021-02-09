import styled from 'styled-components';

export type ImageIconProps = {
  url: string,
  onClick: (e?: React.MouseEvent) => void
}

export default function ImageIcon({ url, onClick }: ImageIconProps) {
  return <Image src={url} onClick={onClick} />
}

export const Image = styled.img`
    width:2rem;
    height:2rem;
    margin-right:1rem;
`;