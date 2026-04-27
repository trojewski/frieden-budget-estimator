import styles from "./QuantitySlider.module.css";
import type { PricingTier } from "../data/collateral";

export type QuantitySliderProps = {
  /** Ordered tiers: quantity and price at each snap point */
  tiers: readonly PricingTier[];
  /** Index into `tiers` (controlled) */
  valueIndex: number;
  onValueIndexChange: (index: number) => void;
  id?: string;
};

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

const formatQty = (n: number) => n.toLocaleString("en-US");

export function QuantitySlider({
  tiers,
  valueIndex,
  onValueIndexChange,
  id = "collateral-quantity",
}: QuantitySliderProps) {
  const max = tiers.length - 1;
  const safeIndex = Math.min(Math.max(0, valueIndex), max);
  const tier = tiers[safeIndex]!;

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <label className={styles.label} htmlFor={id}>
          Quantity
        </label>
        <div className={styles.meta}>
          <span className={styles.qtyValue}>{formatQty(tier.quantity)}</span>
          <span className={styles.ppu} aria-label="Price per unit">
            {currency(tier.pricePerUnit)} <span className={styles.ppuLabel}>/ unit</span>
          </span>
        </div>
      </div>
      <input
        id={id}
        className={styles.range}
        type="range"
        min={0}
        max={max}
        step={1}
        value={safeIndex}
        onChange={(e) => onValueIndexChange(Number(e.target.value))}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuetext={`${formatQty(tier.quantity)} units at ${currency(tier.pricePerUnit)} each`}
        aria-label="Quantity, snaps to available order quantities"
      />
      <div className={styles.ticks} aria-hidden>
        {tiers.map((t, i) => (
          <span
            key={t.quantity}
            className={i === safeIndex ? styles.tickActive : styles.tick}
            style={{ left: `${(i / max) * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}
