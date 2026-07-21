import styles from "./CollateralItemLabel.module.css";

export type CollateralItemLabelProps = {
  title: string;
  productUrl: string;
  /** For `aria-labelledby` on a surrounding section */
  titleId?: string;
};

export function CollateralItemLabel({
  title,
  productUrl,
  titleId,
}: CollateralItemLabelProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>
      <p className={styles.caption}>
        <a
          className={styles.vendorLink}
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View product
        </a>
      </p>
    </div>
  );
}
