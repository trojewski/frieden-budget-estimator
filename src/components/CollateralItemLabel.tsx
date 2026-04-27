import styles from "./CollateralItemLabel.module.css";

export type CollateralItemLabelProps = {
  title: string;
  vendorName: string;
  vendorHref: string;
  /** For `aria-labelledby` on a surrounding section */
  titleId?: string;
};

export function CollateralItemLabel({
  title,
  vendorName,
  vendorHref,
  titleId,
}: CollateralItemLabelProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>
      <p className={styles.caption}>
        From{" "}
        <a
          className={styles.vendorLink}
          href={vendorHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {vendorName}
        </a>
      </p>
    </div>
  );
}
