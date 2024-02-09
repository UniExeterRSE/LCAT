// General impact icons for impacts data structure
import SvgAdaptationAndOrMutationOfMicroorganisms from "../images/impacts/community/AdaptationAndOrMutationOfMicroorganisms";
import SvgAdverseHealthOutcomesAndMalnutritionAssociatedWithAnUnhealthyDiet from "../images/impacts/general/AdverseHealthOutcomesAndMalnutritionAssociatedWithAnUnhealthyDiet";
import SvgAdverseHealthOutcomesAssociatedWithExposureToChemicalsHeavyMetalsAndMicroplastics from "../images/impacts/general/AdverseHealthOutcomesAssociatedWithExposureToChemicalsHeavyMetalsAndMicroplastics";
import SvgAdversePregnancyOutcomes from "../images/impacts/general/AdversePregnancyOutcomes";
import SvgAntimicrobialResistance from "../images/impacts/general/AntimicrobialResistance";
import SvgCardiovascularDiseases from "../images/impacts/general/CardiovascularDiseases";
import SvgChronicHealthConditions from "../images/impacts/general/ChronicHealthConditions";
import SvgIllnessAndMortalityDueToDampBuildingFabrics from "../images/impacts/general/IllnessAndMortalityDueToDampBuildingFabrics";
import SvgInfectionsCausedByPathogenicOrganisms from "../images/impacts/general/InfectionsCausedByPathogenicOrganisms";
import SvgInjuries from "../images/impacts/general/Injuries";
import SvgMentalHealthDisorders from "../images/impacts/general/MentalHealthDisorders";
import SvgPandemicsAndZoonoticDiseases from "../images/impacts/general/PandemicsAndZoonoticDiseases";
import SvgRespiratoryDiseases from "../images/impacts/general/RespiratoryDiseases";
import SvgVectorBorneDiseases from "../images/impacts/general/VectorBorneDiseases";
import SvgWellbeing from "../images/impacts/general/Wellbeing";

// Community impact icons for communityImpacts data structure
import SvgBiodiversityAndEcologicalBalanceDisruption from "../images/impacts/community/BiodiversityAndEcologicalBalanceDisruption";
import SvgBuildingAndStructuralDamage from "../images/impacts/community/BuildingAndStructuralDamage";
import SvgBuildingPerformance from "../images/impacts/community/BuildingPerformance";
import SvgCascadingInfrastructureFailure from "../images/impacts/community/CascadingInfrastructureFailure";
import SvgDamageOrLossOfCoastalDefences from "../images/impacts/community/DamageOrLossOfCoastalDefences";
import SvgDamageOrLossOfPossessionsOrHome from "../images/impacts/community/DamageOrLossOfPossessionsOrHome";
import SvgDamageOrLossOfTheBuiltAndNaturalEnvironment from "../images/impacts/community/DamageOrLossOfTheBuiltAndNaturalEnvironment";
import SvgDamageToLocalEconomy from "../images/impacts/community/DamageToLocalEconomy";
import SvgFoodSecurity from "../images/impacts/community/FoodSecurity";
import SvgFunctionalityOfHospitalsAndHealthcareServices from "../images/impacts/community/FunctionalityOfHospitalsAndHealthcareServices";
import SvgIllnessFromBiologicalContaminants from "../images/impacts/general/IllnessFromBiologicalContaminants";
import SvgMarineAndCoastalBiodiversityAndEcologicalBalanceDisruption from "../images/impacts/community/MarineAndCoastalBiodiversityAndEcologicalBalanceDisruption";
import SvgNegativeImpactOnTheFishingIndustry from "../images/impacts/community/NegativeImpactOnTheFishingIndustry";
import SvgNegativeImpactsOnAgriculturalAndLivestockProduction from "../images/impacts/community/NegativeImpactsOnAgriculturalAndLivestockProduction";
import SvgOutdoorAirQuality from "../images/impacts/community/OutdoorAirQuality";
import SvgPeopleRequiringCare from "../images/impacts/community/PeopleRequiringCare";
import SvgPublicTransportDisruption from "../images/impacts/community/PublicTransportDisruption";
import SvgReducedWaterAvailability from "../images/impacts/community/ReducedWaterAvailability";
import SvgReductionInWaterQuality from "../images/impacts/community/ReductionInWaterQuality";
import SvgTransportDisruption from "../images/impacts/community/TransportDisruption";
import SvgUrbanHeatIslandEffect from "../images/impacts/community/UrbanHeatIslandEffect";

// Impact pathway names, pathway IDs used in inPathway field, and Kumu map iframe embeds
export const pathways = [
    {
        id: 0,
        name: "Extreme Storms",
        summaryPathwayMap: (
            <iframe
                title="Summary Pathway Map for Extreme Storms"
                src="https://embed.kumu.io/ed69770579fec7ddb5cdea482354e0f4"
                frameborder="0"
            />
        ),
        completePathwayMap: (
            <iframe
                title="Complete Pathway Map for Extreme Storms"
                src="https://embed.kumu.io/8e653cb7f94729468f3b634145fbe7c9"
                frameborder="0"
            />
        ),
    },
    {
        id: 1,
        name: "Coastal Security",
        summaryPathwayMap: (
            <iframe
                title="Summary Pathway Map for Coastal Security"
                src="https://embed.kumu.io/dcfcc101c8680fee0f43e7b912cdeddf"
                frameborder="0"
            />
        ),
        completePathwayMap: (
            <iframe
                title="Complete Pathway Map for Coastal Security"
                src="https://embed.kumu.io/77450eb423d7c26a2ca9eccfd0294576"
                frameborder="0"
            />
        ),
    },
    {
        id: 2,
        name: "Flooding and Drought",
        summaryPathwayMap: (
            <iframe
                title="Summary Pathway Map for Flooding and Drought"
                src="https://embed.kumu.io/83dc6a68ceff92c0dc124c984d4f19a4"
                frameborder="0"
            />
        ),
        completePathwayMap: (
            <iframe
                title="Complete Pathway Map for Flooding and Drought"
                src="https://embed.kumu.io/fc123acf574fe6e789a6cb6255f7eecc"
                frameborder="0"
            />
        ),
    },
    {
        id: 3,
        name: "Food and Personal Security",
        summaryPathwayMap: (
            <iframe
                title="Summary Pathway Map for Food and Personal Security"
                src="https://embed.kumu.io/0af7e916299599d68384abf7a153b63e"
                frameborder="0"
            />
        ),
        completePathwayMap: (
            <iframe
                title="Complete Pathway Map for Food and Personal Security"
                src="https://embed.kumu.io/97d06affef1371cd23724be3e55f8aba"
                frameborder="0"
            />
        ),
    },
    {
        id: 4,
        name: "Pathogenic Marine Microorganisms",
        summaryPathwayMap: (
            <iframe
                title="Summary Pathway Map for Pathogenic Marine Microorganisms"
                src="https://embed.kumu.io/7d23ed338ab4604f1016142daf7bfd52"
                frameborder="0"
            />
        ),
        completePathwayMap: (
            <iframe
                title="Complete Pathway Map for Pathogenic Marine Microorganisms"
                src="https://embed.kumu.io/b6e535790518a1259bc45bcb6880350e"
                frameborder="0"
            />
        ),
    },
    {
        id: 5,
        name: "Temperature",
        summaryPathwayMap: (
            <iframe
                title="Summary Pathway Map for Temperature"
                src="https://embed.kumu.io/bb6423e3bba100e74ace650c18fd4bda"
                frameborder="0"
            />
        ),
        completePathwayMap: (
            <iframe
                title="Complete Pathway Map for Temperature"
                src="https://embed.kumu.io/f4bedccacc8e5bc30c5ce47cb112cf6f"
                frameborder="0"
            />
        ),
    },
];

export const impacts = [
    {
        id: 0,
        name: "Illness and mortality due to damp building fabrics",
        inPathway: [0, 1],
        icon: <SvgIllnessAndMortalityDueToDampBuildingFabrics className="impact-img" />,
    },
    {
        id: 1,
        name: "Respiratory diseases",
        inPathway: [0, 2, 3, 4, 5],
        icon: <SvgRespiratoryDiseases className="impact-img" />,
    },
    {
        id: 2,
        name: "Wellbeing",
        inPathway: [0, 1, 2, 3, 4, 5],
        icon: <SvgWellbeing className="impact-img" />,
    },
    {
        id: 3,
        name: "Mental health disorders",
        inPathway: [0, 1, 2, 3, 5],
        icon: <SvgMentalHealthDisorders className="impact-img" />,
    },
    {
        id: 4,
        name: "Vector-borne diseases",
        inPathway: [0, 1, 2, 3, 5],
        icon: <SvgVectorBorneDiseases className="impact-img" />,
    },
    {
        id: 5,
        name: "Injury",
        inPathway: [0, 1, 2, 5],
        icon: <SvgInjuries className="impact-img" />,
    },
    {
        id: 6,
        name: "Chronic health conditions",
        inPathway: [0, 1, 3, 4],
        icon: <SvgChronicHealthConditions className="impact-img" />,
    },
    {
        id: 7,
        name: "Infections caused by pathogenic organisms",
        inPathway: [0, 1, 2, 3, 4, 5],
        icon: <SvgInfectionsCausedByPathogenicOrganisms className="impact-img" />,
    },
    {
        id: 8,
        name: "Adverse health outcomes associated with exposure to chemicals, heavy metals, and microplastics",
        inPathway: [0, 1, 2, 3, 4],
        icon: (
            <SvgAdverseHealthOutcomesAssociatedWithExposureToChemicalsHeavyMetalsAndMicroplastics className="impact-img" />
        ),
    },
    {
        id: 9,
        name: "Adverse health outcomes and malnutrition associated with an unhealthy diet",
        inPathway: [3],
        icon: <SvgAdverseHealthOutcomesAndMalnutritionAssociatedWithAnUnhealthyDiet className="impact-img" />,
    },
    {
        id: 10,
        name: "Antimicrobial resistance",
        inPathway: [4],
        icon: <SvgAntimicrobialResistance className="impact-img" />,
    },
    {
        id: 11,
        name: "Adverse health outcomes associated with naturally produced toxins in marine environments",
        inPathway: [4],
        icon: <SvgIllnessFromBiologicalContaminants className="impact=img" />,
    },
    {
        id: 12,
        name: "Pandemic and zoonotic diseases",
        inPathway: [4],
        icon: <SvgPandemicsAndZoonoticDiseases className="impact-img" />,
    },
    {
        id: 13,
        name: "Fertility and endocrine function",
        inPathway: [4],
        icon: <SvgAdversePregnancyOutcomes className="impact-img" />,
    },
    {
        id: 14,
        name: "Cardiovascular diseases",
        inPathway: [5],
        icon: <SvgCardiovascularDiseases className="impact-img" />,
    },
];

export const communityImpacts = [
    {
        id: 0,
        name: "Cascading infrastructure failure",
        inPathway: [0, 1, 3],
        icon: <SvgCascadingInfrastructureFailure className="impact-img" />,
    },
    {
        id: 1,
        name: "Damage or loss of possessions and/or home",
        inPathway: [0],
        icon: <SvgDamageOrLossOfPossessionsOrHome className="impact-img" />,
    },
    {
        id: 2,
        name: "Functionality of hospitals and healthcare services",
        inPathway: [0, 2, 3, 4, 5],
        icon: <SvgFunctionalityOfHospitalsAndHealthcareServices className="impact-img" />,
    },
    {
        id: 3,
        name: "Damage or loss of coastal defences",
        inPathway: [0],
        icon: <SvgDamageOrLossOfCoastalDefences className="impact-img" />,
    },
    {
        id: 4,
        name: "Damage or loss of the built and natural environment",
        inPathway: [0, 1],
        icon: <SvgDamageOrLossOfTheBuiltAndNaturalEnvironment className="impact-img" />,
    },
    {
        id: 5,
        name: "People requiring care to maintain wellbeing",
        inPathway: [0],
        icon: <SvgPeopleRequiringCare className="impact-img" />,
    },
    {
        id: 6,
        name: "Marine and coastal biodiversity and ecological balance disruption",
        inPathway: [1, 4],
        icon: <SvgMarineAndCoastalBiodiversityAndEcologicalBalanceDisruption className="impact-img" />,
    },
    {
        id: 7,
        name: "Damage to local economy",
        inPathway: [1, 4],
        icon: <SvgDamageToLocalEconomy className="impact-img" />,
    },
    {
        id: 8,
        name: "Reduction in water availability",
        inPathway: [2],
        icon: <SvgReducedWaterAvailability className="impact-img" />,
    },
    {
        id: 9,
        name: "Reduction in water quality",
        inPathway: [2, 3, 4],
        icon: <SvgReductionInWaterQuality className="impact-img" />,
    },
    {
        id: 10,
        name: "Outdoor air quality",
        inPathway: [2, 4, 5],
        icon: <SvgOutdoorAirQuality className="impact-img" />,
    },
    {
        id: 11,
        name: "Transport disruption",
        inPathway: [2],
        icon: <SvgTransportDisruption className="impact-img" />,
    },
    {
        id: 12,
        name: "Building and structural damage",
        inPathway: [2],
        icon: <SvgBuildingAndStructuralDamage className="impact-img" />,
    },
    {
        id: 13,
        name: "Biodiversity and ecological balance disruption",
        inPathway: [2],
        icon: <SvgBiodiversityAndEcologicalBalanceDisruption className="impact-img" />,
    },
    {
        id: 14,
        name: "Food security",
        inPathway: [3],
        icon: <SvgFoodSecurity className="impact-img" />,
    },
    {
        id: 15,
        name: "Negative impacts on the fishing industry",
        inPathway: [3],
        icon: <SvgNegativeImpactOnTheFishingIndustry className="impact-img" />,
    },
    {
        id: 16,
        name: "Negative impacts on agricultural and livestock production",
        inPathway: [3],
        icon: <SvgNegativeImpactsOnAgriculturalAndLivestockProduction className="impact-img" />,
    },
    {
        id: 17,
        name: "Adaptation and/or mutation of microorganisms to antibiotics, chemicals and environmental stressors",
        inPathway: [4],
        icon: <SvgAdaptationAndOrMutationOfMicroorganisms className="impact-img" />,
    },
    {
        id: 18,
        name: "Public transport disruption",
        inPathway: [5],
        icon: <SvgPublicTransportDisruption className="impact-img" />,
    },
    {
        id: 19,
        name: "Urban Heat Island effect",
        inPathway: [5],
        icon: <SvgUrbanHeatIslandEffect className="impact-img" />,
    },
    {
        id: 20,
        name: "Building performance",
        inPathway: [5],
        icon: <SvgBuildingPerformance className="impact-img" />,
    },
];
