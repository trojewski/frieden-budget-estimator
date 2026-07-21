import artPrintTShirtCsv from "../../csv/Art Print T-Shirt.csv?raw";
import businessCardsCsv from "../../csv/Business Cards.csv?raw";
import cabinClubTShirtCsv from "../../csv/Cabin Club T-Shirt.csv?raw";
import coastersCsv from "../../csv/Coasters.csv?raw";
import doorHangersCsv from "../../csv/Door Hangers.csv?raw";
import envelopesCsv from "../../csv/Envelopes.csv?raw";
import keychainsCsv from "../../csv/Keychains.csv?raw";
import letterheadCsv from "../../csv/Letterhead.csv?raw";
import matchbooksCsv from "../../csv/Matchbooks.csv?raw";
import mugCsv from "../../csv/Mug.csv?raw";
import notepadsCsv from "../../csv/Notepads.csv?raw";
import pensCsv from "../../csv/Pens.csv?raw";
import postcardsCsv from "../../csv/Postcards.csv?raw";
import qrSheetsCsv from "../../csv/QR Sheets.csv?raw";
import rackCardCsv from "../../csv/Rack Card.csv?raw";
import staffShortSleeveShirtCsv from "../../csv/Staff Short Sleeve Shirt.csv?raw";
import stickersCsv from "../../csv/Stickers.csv?raw";

export type PricingTier = {
  quantity: number;
  pricePerUnit: number;
};

const PRODUCT_CSVS = [
  { id: "art-print-t-shirt", title: "Art Print T-Shirt", csv: artPrintTShirtCsv },
  { id: "business-cards", title: "Business Cards", csv: businessCardsCsv },
  { id: "cabin-club-t-shirt", title: "Cabin Club T-Shirt", csv: cabinClubTShirtCsv },
  { id: "coasters", title: "Coasters", csv: coastersCsv },
  { id: "door-hangers", title: "Door Hangers", csv: doorHangersCsv },
  { id: "envelopes", title: "Envelopes", csv: envelopesCsv },
  { id: "keychains", title: "Keychains", csv: keychainsCsv },
  { id: "letterhead", title: "Letterhead", csv: letterheadCsv },
  { id: "matchbooks", title: "Matchbooks", csv: matchbooksCsv },
  { id: "mug", title: "Mug", csv: mugCsv },
  { id: "notepads", title: "Notepads", csv: notepadsCsv },
  { id: "pens", title: "Pens", csv: pensCsv },
  { id: "postcards", title: "Postcards", csv: postcardsCsv },
  { id: "qr-sheets", title: "QR Sheets", csv: qrSheetsCsv },
  { id: "rack-card", title: "Rack Card", csv: rackCardCsv },
  {
    id: "staff-short-sleeve-shirt",
    title: "Staff Short Sleeve Shirt",
    csv: staffShortSleeveShirtCsv,
  },
  { id: "stickers", title: "Stickers", csv: stickersCsv },
] as const;

export type CollateralId = (typeof PRODUCT_CSVS)[number]["id"];

type CollateralItem = {
  id: CollateralId;
  title: string;
  url: string;
  pricing: readonly PricingTier[];
};

function parseProductCsv(
  id: CollateralId,
  title: string,
  csv: string,
): CollateralItem {
  const pricing = csv
    .split(/\r?\n/)
    .slice(1)
    .flatMap((line): PricingTier[] => {
      const [quantityValue, unitPriceValue] = line.split(",");
      const quantity = Number(quantityValue?.trim());
      const pricePerUnit = Number(unitPriceValue?.replace("$", "").trim());

      if (
        !Number.isFinite(quantity) ||
        !Number.isFinite(pricePerUnit) ||
        quantity <= 0
      ) {
        return [];
      }

      return [{ quantity, pricePerUnit }];
    });
  const url = csv.match(/https?:\/\/[^\s,]+/)?.[0];

  if (pricing.length === 0 || !url) {
    throw new Error(`Invalid product CSV: ${title}`);
  }

  return { id, title, url, pricing };
}

export const COLLATERAL_ITEMS: readonly CollateralItem[] = PRODUCT_CSVS.map(
  ({ id, title, csv }) => parseProductCsv(id, title, csv),
);
