import { LegacyNodeRouter } from 'components';

/**
 * note : This file exists for backwards compatibility
 *
 * /content/item-name-9f59c65055fec6cd0292deb993711bf5
 * redirects to new, prettier content url
 */

export default function Content() {
  return <LegacyNodeRouter />;
}
