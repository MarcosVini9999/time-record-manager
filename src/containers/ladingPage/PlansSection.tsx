import { PlanCard } from "@/components";
import { ladingPageData } from "@/data/ladingPage";

export const PlansSection = () => {
  return (
    <>
      <PlanCard
        planTitle={ladingPageData.card.bronze.title}
        information={ladingPageData.card.bronze.information}
        permissions={ladingPageData.card.bronze.hasAccess}
        value={ladingPageData.card.bronze.value}
      />
      <PlanCard
        planTitle={ladingPageData.card.silver.title}
        information={ladingPageData.card.silver.information}
        permissions={ladingPageData.card.silver.hasAccess}
        value={ladingPageData.card.silver.value}
      />
      <PlanCard
        planTitle={ladingPageData.card.gold.title}
        information={ladingPageData.card.gold.information}
        permissions={ladingPageData.card.gold.hasAccess}
        value={ladingPageData.card.gold.value}
      />
    </>
  );
};
