import React from 'react';
import { LanguagesNav } from '../../components';
import { appLanguages } from '../../config/Locale.config';
import { HeaderProps } from './Header.props';

export const Header = ({
  appearance = 'primary',
  className,
  ...props
}: HeaderProps): JSX.Element => {
  return (
    <header className={className} {...props}>
      <div className="wrapper">
        {Object.keys(appLanguages).length > 1 && (
          <LanguagesNav appearance={appearance} />
        )}
      </div>
    </header>
  );
};
