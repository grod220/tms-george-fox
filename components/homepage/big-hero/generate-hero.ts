import { getDayOfYear } from 'date-fns';
import { StaticImageData } from 'next/image';

const getAllHeroImageURLs = () => {
  const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
  const allHeroes = requireAll(require.context('./images', false, /hero\d.+jpg/)) as { default: StaticImageData }[];
  return allHeroes.map((heroObj) => heroObj.default);
};

export const generateHeroImage = () => {
  const heroesArr = getAllHeroImageURLs();
  const dayOfYear = getDayOfYear(Date.now());
  return heroesArr[dayOfYear % heroesArr.length];
};
