import { useModal } from "../contexts/ModalContext";


export const useModalHandles = () => {
    const { openModal } = useModal();





    const handleET = () => {
        openModal('ET and Ref. ET',
            <>
                <p>
                    <strong> Evapotranspiration (ET)</strong> refers to the water that is lost to the atmosphere through the vaporisation process. Water that becomes evapotranspired is
                    no longer available for further use, hence it is commonly referred to as consumed water in the water accounting terminology.
                </p>
                <p>
                    <strong>  Reference evapotranspiration (Ref. ET) </strong>
                    is a theoretical concept representing the rate of evapotranspiration from an extensive surface of 8 to 15 cm tall, green grass cover of uniform height, actively growing, completely shading the ground and not short of water (Doorenbos and Pruitt, 1977).

                </p>
            </>
        );
    };

    const handlePCP = () => {
        openModal('PCP and Ref. ET',
            <>
                <p>
                    <strong> Precipitation (PCP) </strong>
                    is the key water source in the hydrological cycle. It refers to all  forms of condensation of atmospheric water vapor
                    that falls from clouds. The  main forms of  precipitation include drizzling, rain, sleet, snow, ice  pellets, graupel and hail. In the river basins, where there is no  other inflow (e.g. through surface or  subsurface flow), the total precipitation accounts for
                    the entire total gross inflow, in  the water accounting terms, in any given time period


                </p>
                <p>
                    <strong>  Reference evapotranspiration (Ref. ET)</strong> represents the rate at which water evaporates from a standardized reference
                    crop under specified climatic conditions.
                </p>
            </>
        );
    };


    const handleAridityIndex = () => {
        openModal('Aridity Index',
            <>
                <p>
                    <strong> The aridity index </strong>
                    classifies the type of climate in relation to water availability.

                    It is calculated by dividing the annual precipitation by the potential evapotranspiration (the amount of water that could be evaporated and transpired if there was sufficient water available)
                </p>
            </>
        );
    };







    const handleBiomassProduction = () => {
        openModal('Biomass Production',
            <p>
                Biomass refers to organic matter derived from living or recently living organisms. Biomass production in agriculture refers to the harvesting of organic matter from plants, including crops, grasses, and trees, which can be used for various purposes such as food, feed, fiber and biofuels.

            </p>
        );
    };

    const handleBiomassWaterProductivity = () => {
        openModal('Biomass Water Productivity',
            <p>
                The  Water Productivity indicator gives an estimate about the crop production per unit of  water use. In this case seasonal TBP is  used representing the overall biomass growth rate. The biomass water productivity was computed using the below formula:
                <br />

                Annual WPb  = Annual TBP / Annual ETa


            </p>
        );
    };

    const handleWaterFootprint = () => {
        openModal('Water Footprint',
            <p>
                <strong>Water footprint</strong> refers to the total volume of water used in the production process of goods or services, including both direct water use (e.g., irrigation, processing water) and indirect water use (e.g., water embedded in inputs like raw materials and energy). Here water footprint only refers direct water use. The data is output of the global simulation of crop water footprints (WFs) with a process-based gridded crop model ACEA (see model description in references). The model is based on FAO’s AquaCrop and covers 175 widely-grown crops in the 1990–2019 period at a 5 arcminute resolution. The WFs is partitioned into green and blue and differentiate between rainfed and irrigated production systems. Below is description of individual WFs component.
                <ol>
                    <li>
                        <strong>Irrigated Blue:</strong> The volume of surface irrigation water consumed in an irrigation production system.
                    </li>
                    <li>
                        <strong>Rainfed Blue:</strong> The volume of water consumed from shallow aquifers via capillary rise in a rainfed irrigated system.</li>
                    <li><strong>Irrigated Green:</strong> The volume of precipitation water consumed in an irrigation production system.</li>
                    <li><strong>Rainfed Green:</strong> The volume of precipitation water consumed in a rainfed production system.</li>
                </ol>




            </p>
        );
    };





    const handleBlueAndGreenET = () => {
        openModal('Blue and Green ET',
            <p>
                The  annual actual ETa is divided into green and blue water. Green water represents the fraction of  precipitation that infiltrates into the soil  and is  available to plants; while blue water comprising runoff, groundwater, and stream base flow.
            </p>
        );
    };

    const handleLCC = () => {
        openModal('Land Cover classes',

            <p>
                WorldCover provides the first global land cover products for 2020 and 2021 at 10 m resolution, developed and validated in near-real time based on Sentinel-1 and Sentinel-2 data.

            </p>
        );
    };

    const handleHydronomicZones = () => {
        openModal('Hydronomic Zones',

            <p>
                Hydronomic zones are regions classified based on their water usage, availability, and socio-economic activities. They help in managing water resources efficiently by considering specific hydrological conditions and needs.

            </p>
        );
    };

    const handleSPEI = () => {
        openModal('SPEI',

            <p>
                The SPEI is a multiscalar drought index based on climatic data. It can be used for determining the onset, duration and magnitude of drought conditions with respect to normal conditions in a variety of natural and managed systems such as crops, ecosystems, rivers, water resources, etc.

            </p>
        );
    };






    return {
        handleBiomassProduction,
        handleBiomassWaterProductivity,
        handleBlueAndGreenET,
        handleET,
        handlePCP,
        handleAridityIndex,
        handleWaterFootprint,
        handleLCC,
        handleHydronomicZones,
        handleSPEI

    };
};
