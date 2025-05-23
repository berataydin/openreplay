import React from 'react';
import { Icon } from 'UI';
import { links } from 'App/constants';
import { useTranslation } from 'react-i18next';

export default function ChromePluginMessage({ style }) {
  const { t } = useTranslation();
  return (
    <div
      className="border rounded text-base mb-2 flex items-center p-2 bg-active-blue"
      style={style}
    >
      <div className="flex items-center">
        <Icon name="info-circle" size="14" color="gray-darkest" />
        <div className="ml-2 mr-2 color-gray-darkest">
          {t('Finding it difficult to add steps? Try our Chrome')}{' '}
          <a
            className="color-teal"
            rel="noopener noreferrer"
            target="_blank"
            href={links['chrome-plugin']}
          >
            {t('Test Recorder')}
          </a>
        </div>
        <Icon name="external-link-alt" size="14" color="teal" />
      </div>
    </div>
  );
}
