import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, WEIGHTS} from '../../constants';
import {formatPrice, pluralize, isNewShoe} from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc}/>
        </ImageWrapper>
        <Spacer size={12}/>
        <Row>
          <Name>{name}</Name>
          {!salePrice && <Price>{formatPrice(price)}</Price>}
          {salePrice && <OriginalPrice>{formatPrice(price)}</OriginalPrice>}
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
        {variant === "new-release" && <NewReleaseFlag>Just
          released!</NewReleaseFlag>}
        {variant === "on-sale" && <OnSaleFlag>Sale</OnSaleFlag>}
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 1 250px;
`;

const Wrapper = styled.article`
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: ${COLORS.gray[700]};
`;

const Flag = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.bold};
  padding-block: 8px;
  padding-inline: 12px;
`

const OnSaleFlag = styled(Flag)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
`

const NewReleaseFlag = styled(Flag)`
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
`

export default ShoeCard;
