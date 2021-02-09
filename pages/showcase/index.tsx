import { useState, ChangeEvent } from 'react';
import SideNav from '../../components/SideNav';
import Button from '../../components/Button';
import ImageIcon from '../../components/ImageIcon';

import { ShowcaseWrapper, ContentWrapper, ContentBox, RowBox } from './showcase.styles';

export default function Home() {
  const [showSideNav, setShowSideNav] = useState<Boolean>(true);
  return (
    <ShowcaseWrapper>
      <RowBox>
        <ImageIcon url="/menu.svg" onClick={() => setShowSideNav(!showSideNav)} />
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

