export const getImageDimension = (src: string): ImageDimension => {
  const img = new Image();

  img.src = src;

  const naturalWidth = img.naturalWidth;
  const naturalHeight = img.naturalHeight;
  let imgProportions = Number((naturalWidth / naturalHeight).toFixed(3));

  if (naturalHeight === 0) {
    imgProportions = 1;
  }

  return {
    naturalWidth,
    naturalHeight,
    imgProportions,
    src,
  };
};

export type ImageDimension = {
  naturalWidth: number;
  naturalHeight: number;
  imgProportions: number;
  src?: string;
};
