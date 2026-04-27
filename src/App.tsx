import { useCallback, useMemo, useState } from "react";
import { CollateralItemLabel } from "./components/CollateralItemLabel";
import { QuantitySlider } from "./components/QuantitySlider";
import { TotalBox } from "./components/TotalBox";
import { COLLATERAL_ITEMS, type CollateralId } from "./data/collateral";
import styles from "./App.module.css";

function lineTotal(pricing: readonly { quantity: number; pricePerUnit: number }[], tierIndex: number) {
  const n = pricing.length;
  const idx = ((tierIndex % n) + n) % n;
  const tier = pricing[idx]!;
  return tier.quantity * tier.pricePerUnit;
}

const initialTierById = (() => {
  const o: Record<CollateralId, number> = Object.create(null);
  for (const item of COLLATERAL_ITEMS) {
    o[item.id] = Math.max(0, Math.floor((item.pricing.length - 1) / 2));
  }
  return o;
})();

const initialIncludeById = (() => {
  const o: Record<CollateralId, boolean> = Object.create(null);
  for (const item of COLLATERAL_ITEMS) {
    o[item.id] = true;
  }
  return o;
})();

export default function App() {
  const [tierById, setTierById] = useState<Record<CollateralId, number>>(() => ({ ...initialTierById }));
  const [includeById, setIncludeById] = useState<Record<CollateralId, boolean>>(() => ({
    ...initialIncludeById,
  }));

  const setTier = useCallback((id: CollateralId, index: number) => {
    setTierById((prev) => ({ ...prev, [id]: index }));
  }, []);

  const setIncluded = useCallback((id: CollateralId, included: boolean) => {
    setIncludeById((prev) => ({ ...prev, [id]: included }));
  }, []);

  const { grandTotal, breakdownLines } = useMemo(() => {
    let sum = 0;
    const lines: { id: string; label: string; amountUsd: number }[] = [];
    for (const item of COLLATERAL_ITEMS) {
      if (!includeById[item.id]) continue;
      const idx = tierById[item.id] ?? 0;
      const sub = lineTotal(item.pricing, idx);
      sum += sub;
      lines.push({ id: item.id, label: item.title, amountUsd: sub });
    }
    return { grandTotal: sum, breakdownLines: lines };
  }, [tierById, includeById]);

  return (
    <main className={styles.main}>
      <header className={styles.pageHeader}>
        <img
          className={styles.brandLogo}
          src={`${import.meta.env.BASE_URL}frieden-logo.svg`}
          alt="Frieden"
          width={1000}
          height={308}
          decoding="async"
          draggable={false}
        />
        <h1 className={styles.pageTitle}>Budget Estimator</h1>
        <p className={styles.lede}>Adjust quantities to estimate your collateral spend.</p>
      </header>
      <div className={styles.layout}>
        <div className={styles.primary}>
          <div className={styles.cards}>
            {COLLATERAL_ITEMS.map((item) => {
              const titleId = `line-${item.id}`;
              const idx = tierById[item.id] ?? 0;
              const subtotal = lineTotal(item.pricing, idx);
              return (
                <section key={item.id} className={styles.card} aria-labelledby={titleId} draggable={false}>
                  <label className={styles.cardInclude}>
                    <input
                      className={styles.toggleInput}
                      type="checkbox"
                      role="switch"
                      checked={includeById[item.id] ?? true}
                      onChange={(e) => setIncluded(item.id, e.target.checked)}
                      aria-label={`Include ${item.title} in estimate total`}
                    />
                    <span className={styles.toggleTrack}>
                      <span className={styles.toggleThumb} />
                    </span>
                  </label>
                  <CollateralItemLabel
                    titleId={titleId}
                    title={item.title}
                    vendorName={item.vendor.name}
                    vendorHref={item.vendor.href}
                  />
                  <QuantitySlider
                    id={`${item.id}-quantity`}
                    tiers={item.pricing}
                    valueIndex={idx}
                    onValueIndexChange={(i) => setTier(item.id, i)}
                  />
                  <TotalBox
                    variant="section"
                    label="Line total"
                    amountUsd={subtotal}
                  />
                </section>
              );
            })}
          </div>
        </div>
        <aside className={styles.summary} aria-label="Estimate summary">
          <div className={styles.stickyTotal}>
            <TotalBox
              amountUsd={grandTotal}
              label="Est. total"
              breakdownLines={breakdownLines}
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
