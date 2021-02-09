import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SideNav from '../../components/SideNav';
import Button from '../../components/Button';
import ImageIcon from '../../components/ImageIcon';

import { ShowcaseWrapper, ContentWrapper, ContentBox, RowBox } from '../../styles/showcase.styles';
const menuIconURl = '/menu.svg';

interface RootState {
  HomeReducer: { userName: string }
}

export default function ShowCase() {
  const router = useRouter();
  const [showSideNav, setShowSideNav] = useState<Boolean>(true);
  const userName = useSelector(({ HomeReducer: { userName } }: RootState) => userName);

  useEffect(() => {
    if (!userName || userName === "") {
      router.push('/');
    }
  }, [userName]);

  return (
    <ShowcaseWrapper>
      <RowBox>
        <ImageIcon url={menuIconURl} onClick={() => setShowSideNav(!showSideNav)} />
        <Button onClick={() => { }}>Add new education</Button>
      </RowBox>
      <ContentWrapper>
        <SideNav showSideNav={showSideNav} />
        <ContentBox>
          <div>
            <h1>Full Stack Software Developer</h1>
            <p>Octopolis Technologies(apnaklub.com)
            Oct 2019 - Present
            Bengaluru, India</p>
            <p>Designed and developed the dashboard for the operations team to manage products, inventories, and order details. Operations team
            time saved by 40% when this application is used as compared to manually maintaining the excel sheets for inventory and purchase orders of products from vendors.</p>
          </div>
          <div>
            <h1>Full Stack Software Developer</h1>
            <p>Octopolis Technologies(apnaklub.com)
            Oct 2019 - Present
            Bengaluru, India</p>
            <p>Designed and developed the dashboard for the operations team to manage products, inventories, and order details. Operations team
            time saved by 40% when this application is used as compared to manually maintaining the excel sheets for inventory and purchase orders of products from vendors.</p>
          </div>
        </ContentBox>
      </ContentWrapper>
    </ShowcaseWrapper>
  )
}