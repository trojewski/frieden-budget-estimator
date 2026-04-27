import styles from "./TotalBox.module.css";

export type TotalBoxBreakdownLine = {
  id: string;
  label: string;
  amountUsd: number;
};

export type TotalBoxProps = {
  label?: string;
  amountUsd: number;
  /** `section` = compact line total inside a collateral card; `default` = full-width summary (e.g. est. total) */
  variant?: "default" | "section";
  /** Shown above the main label/amount when `variant` is `default` (e.g. sticky order summary). */
  breakdownLines?: readonly TotalBoxBreakdownLine[];
};

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

export function TotalBox({
  label = "Line total",
  amountUsd,
  variant = "default",
  breakdownLines,
}: TotalBoxProps) {
  const rootClass = variant === "section" ? styles.rootSection : styles.root;
  const showBreakdown = variant === "default" && breakdownLines && breakdownLines.length > 0;

  return (
    <div className={rootClass} role="status" aria-live="polite">
      {showBreakdown ? (
        <ul className={styles.breakdown} aria-label="Subtotals by item">
          {breakdownLines.map((line) => (
            <li key={line.id} className={styles.breakdownRow}>
              <span className={styles.breakdownLabel}>{line.label}</span>
              <span className={styles.breakdownAmount}>{currency(line.amountUsd)}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div
        className={
          variant === "section"
            ? styles.sectionFooter
            : showBreakdown
              ? styles.grandFooter
              : styles.grandFooterOnly
        }
      >
        <span className={variant === "section" ? styles.labelSection : styles.label}>{label}</span>
        <span className={variant === "section" ? styles.amountSection : styles.amount}>
          {currency(amountUsd)}
        </span>
      </div>
    </div>
  );
}
