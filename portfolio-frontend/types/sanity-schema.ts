import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Experience
 *
 *
 */
export interface Experience extends SanityDocument {
  _type: "experience";

  /**
   * Company — `string`
   *
   *
   */
  company: string;

  /**
   * Link — `string`
   *
   *
   */
  link: string;

  /**
   * Title — `string`
   *
   *
   */
  title: string;

  /**
   * Tenure — `string`
   *
   *
   */
  tenure: string;

  /**
   * Tech — `string`
   *
   *
   */
  tech: string;
}

export type Documents = Experience;
