import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CallToAction from "../CallToAction/CallToAction";
import Specials from "../Specials/Specials";
import CustomersSay from "../CustomersSay/CustomersSay";
import Chicago from "../Chicago/Chicago";

export default function Homepage() {
  const { hash } = useLocation();

  // Nav and Footer only scroll by themselves when already on Home,
  // so arriving from another page with #menu or #about scrolls here.
  // Instant jump: ScrollTrigger.refresh() would cut a smooth scroll halfway
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}
