import styled from "styled-components";
import { ReactComponent as AmericanExpress } from "../asset/americanExpress.svg";
import { ReactComponent as Visa } from "../asset/visa.svg";
import { ReactComponent as DinersClub } from "../asset/dinersClub.svg";
import { ReactComponent as Discover } from "../asset/discover.svg";
import { ReactComponent as MasterCard } from "../asset/masterCard.svg";
import { ReactComponent as PayPal } from "../asset/payPal.svg";

import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer>
      <a href="https://zero-base.co.kr/" target="_blank">
        제로베이스
      </a>
      <ul className="card">
        <li>
          <Visa />
        </li>
        <li>
          <MasterCard />
        </li>
        <li>
          <AmericanExpress />
        </li>
        <li>
          <PayPal />
        </li>
        <li>
          <DinersClub />
        </li>
        <li>
          <Discover />
        </li>
      </ul>
      <ul className="SNS">
        <li>
          <BsFacebook size={24} />
        </li>
        <li>
          <BsInstagram size={24} />
        </li>
        <li>
          <BsGithub size={24} />
        </li>
      </ul>
      <p>Copyright © 2022 Zero Base</p>
    </Footer>
  );
};

const Footer = styled.footer`
  position: absolute;
  bottom: -278px;

  width: 100%;
  height: 278px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  gap: 40px;
  font-size: 14px;
  background: ${({ theme }) => theme.footer.background};
  color: ${({ theme }) => theme.footer.text};

  a:hover {
    text-decoration: underline;
  }
  ul {
    display: flex;
  }
  .card {
    gap: 10px;
  }
  .SNS {
    gap: 20px;
  }
`;

export default FooterComponent;
