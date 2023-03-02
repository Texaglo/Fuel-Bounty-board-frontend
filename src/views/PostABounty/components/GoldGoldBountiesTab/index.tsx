import { useState } from "react";
import ConfirmYourDetails from "../ConfirmYourDetails";
import GoldTier from "../GoldTier";

const GoldGoldBountiesTab = () => {
  const [active, setActive] = useState<"gold-tier" | "confirm-details">(
    "gold-tier",
  );

  return active === "gold-tier" ? (
    <GoldTier onNext={() => setActive("confirm-details")} />
  ) : (
    <ConfirmYourDetails onGoBack={() => setActive("gold-tier")} />
  );
};

export default GoldGoldBountiesTab;
