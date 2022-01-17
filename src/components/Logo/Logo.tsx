import Link from 'next/link';
import { AppConfig } from '../../config/App.config';
import { LogoProps } from './Logo.props';

export const Logo = (props: LogoProps): JSX.Element => {
  return (
    <div>
      <Link href="/">
        <a>
          {/* logo */}
          {props.isSiteName && AppConfig.en.site_name}
        </a>
      </Link>
    </div>
  );
};
