import styled from 'styled-components';

export type ImageIconProps = {
  url: string,
  onClick: (e?: React.MouseEvent) => void
}

export default function ImageIcon({ url, onClick }: ImageIconProps) {
  return <Image src={url} onClick={onClick} />
}

export const Image = styled.img`
    width:1.5rem;
    cursor:pointer;
    margin-right:1rem;
`;