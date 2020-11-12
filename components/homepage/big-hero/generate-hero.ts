import { getDayOfYear } from 'date-fns';

const getAllHeroImageURLs = (): string[] => {
  const requireAll = (requireContext) => requireContext.keys().map(requireContext);
  const allHeroes = requireAll(require.context('./images', false, /hero\d.+jpg/));
  return allHeroes.map((heroObj) => heroObj.default);
};

export const generateHeroImage = (): string => {
  const heroesArr = getAllHeroImageURLs();
  const dayOfYear = getDayOfYear(Date.now());
  return heroesArr[dayOfYear % heroesArr.length];
};
