import { useEffect } from "react";

export enum AdType {
  SQUARE,
  HORIZONTAL,
  VERTICAL,
}

const adUnitProps: Record<AdType, any> = {
  [AdType.SQUARE]: {
    "data-ad-slot": "9547820402",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
  },
  [AdType.HORIZONTAL]: {
    "data-ad-slot": "2617727777",
    "data-ad-format": "fluid",
    "data-ad-layout": "in-article",
  },
  [AdType.VERTICAL]: {
    "data-ad-slot": "2426156080",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
  },
};

interface GoogleAdProps {
  variant?: AdType;
}

export function GoogleAd({ variant = AdType.SQUARE }: GoogleAdProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div
      aria-hidden={true}
      // later set minWidth and minHeight to prevent CLP
      // style={{ overflow: "hidden", minWidth: "300px", minHeight: "250px" }}
      style={{ overflow: "hidden" }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9717072844416658"
        data-full-width-responsive="true"
        {...adUnitProps[variant]}
      />
    </div>
  );
}
