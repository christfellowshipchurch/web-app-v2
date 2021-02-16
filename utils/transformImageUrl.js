import isString from 'lodash/isString';

/**
 *
 * @param {String} coverImage Image URL
 * @return {String}
 * @ex
 * let url = 'https://cloudfront.christfellowship.church/GetImage.ashx?guid=b69a5625-9786-444b-b3dc-6f15a438051a';
 * transformImageUrl(url, { w: 768, h: 768 })
 * // --> 'https://cloudfront.christfellowship.church/GetImage.ashx?guid=b69a5625-9786-444b-b3dc-6f15a438051a&w=768&h=768';
 */
export default function transformImageUrl(url, params) {
  if (!isString(url)) {
    return url;
  }

  const urlSearchParams = new URLSearchParams(params);
  return `${url}&${urlSearchParams.toString()}`;
}
