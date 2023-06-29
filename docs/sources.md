# Data sources

All the sources of data used for LCAT, with their authorities, links
to original downloads and instructions for processing with the LCAT
build scripts.

## Climate model
        
| Type              | Notes                                                                   |  Time span                   | Regions             | LCAT postgres table/col                   | Original Format | Coordinate system | Source URL | Authority                  |
|-------------------|-------------------------------------------------------------------------|------------------------------|---------------------|------------------------------------------|-----------------|-------------------|------------|----------------------------|
| Seasonal mean GeoTifs | Means of CHESS-SCAPE RCP6.0/8.5 model runs, one per variable, provided by the Alan Turing Institute. | 1980-2079 averaged by season | Great Britain & IoM | -                                         | GeoTiff         | EPSG 9001         | -          | https://uk-scape.ceh.ac.uk |  
| Decade mean GeoTifs | Intermediate format generated from seasonal means, one per decade/variable | 1980-2079  averaged by decade | Great Britain & IoM | -                                         | GeoTiff         | EPSG 9001         | -          | https://uk-scape.ceh.ac.uk |  
| Air temp annual   | These are all stored in a single table per season/rcp to optimise for reading| 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_annual/tas_<decade>`    | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Rain annual       |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_annual/pr_<decade>`     | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Cloudiness annual |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_annual/rsds_<decade>`   | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Wind annual       |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_annual/sfcWind_<decade>`| GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Air temp summer   |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_summer/tas_<decade>`    | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Rain summer       |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_summer/pr_<decade>`     | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Cloudiness summer |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_summer/rsds_<decade>`   | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Wind summer       |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_summer/sfcWind_<decade>`| GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Air temp winter   |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_winter/tas_<decade>`    | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Rain winter       |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_winter/pr_<decade>`     | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Cloudiness winter |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_winter/rsds_<decade>`   | GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Wind winter       |                                                                         | 1980-2079 averaged by decade | Great Britain & IoM | `chess_scape_<rcp>_winter/sfcWind_<decade>`| GeoTiff         | -                 | -          | https://uk-scape.ceh.ac.uk |  
| Climate data grid | 1km grid, needed to link climate data variables to boundares (converted to EPSG 4326) | n/a                          | Great Britain & IoM | `chess_scape_grid`                         | GeoTiff         | EPSG 4326         | -          | https://uk-scape.ceh.ac.uk | 

## Boundaries

| Type              | Notes                                                                   |  Time span | Regions             | LCAT postgres table/col  | Original Format | Coordinate system | Source URL | Authority                  |
|-------------------|-------------------------------------------------------------------------|------------|---------------------|--------------------------|-----------------|-------------------|------------|----------------------------|
| LSOA              | Areas with average population sizes of 1500 people or 650 households    | 2011       | England and Wales   | `boundary_lsoa`          | ESRI shapefile  | EPSG 27700        | https://datashare.ed.ac.uk/handle/10283/2546 | University of Edinburgh |   
| MSOA              |                                                                         | 2016       | England and Wales   | `boundary_msoa`          | ESRI shapefile  | EPSG 27700        | https://data.gov.uk/dataset/2cf1f346-2f74-4c06-bd4b-30d7e4df5ae7/middle-layer-super-output-area-msoa-boundaries | data.gov.uk |
| Data Zones        | Scottish equivalent of LSOA                                             | 2020       | Scotland            | `boundary_sc_dz`         | ESRI shapefile  | EPSG 4326         | https://simd.scot/#/simd2020/BTTTFTT/12/-4.6223/55.5558/ | scot.gov |   
| Small areas       | Northern Ireland eqv of LSOA (not yet implemented)                      | 2011       | Northern Ireland    | --                       | ESRI shapefile  | --                | Maybe: https://www.nisra.gov.uk/support/output-geography-census-2011/small-areas | NISRA |
| Local Authority Districts |                                                                 | 2022       | UK                  | `boundary_la_districts`  | ESRI shapefile  | EPSG 27700        | https://geoportal.statistics.gov.uk/datasets/ons::local-authority-districts-may-2022-uk-bfc-v3/ | ONS |             
| UK Counties       | Could not find a non-paywalled download on .gov.uk                      | ?          | UK                  | `boundary_uk_counties`   | ESRI shapefile  | EPSG 32630        | https://www.ukpostcode.net/shapefile-of-uk-administrative-counties-wiki-16.html | ukpostcode.net?? |             
| Parishes          | England/Wales only                                                      | 2019       | England and Wales   | `boundary_uk_counties`   | ESRI shapefile  | EPSG 27700        | https://geoportal.statistics.gov.uk/datasets/parishes-and-non-civil-parished-areas-april-2019-ew-bgc/ | ONS |
    
## Vulnerability data

| Type              | Notes                                                                   |  Time span | Regions             | LCAT postgres table/col  | Original Format | Coordinate system | Source URL | Authority                  |
|-------------------|-------------------------------------------------------------------------|------------|---------------------|--------------------------|-----------------|-------------------|------------|----------------------------|
| Climate Just NFVI variables     | Neighbourhood Flood Vulnerability Index (NFVI) Supporting Variables	  |	2017 | UK            | `nfvi` and `<boundary_type>_vulnerabilities` | ESRI Shapefile  | https://www.climatejust.org.uk/map | Climate Just |    
| Indices of Multiple Deprivation | England                                                   | 2019       | England and Wales   | `<boundary_type>_vulnerabilities` | CSV                        | -          |                            |  
| Indices of Multiple Deprivation | Scotland                                                  | 2020       | Scotland            | `<boundary_type>_vulnerabilities` | CSV                        | https://simd.scot/#/simd2020/BTTTFTT/12/-4.6223/55.5558/ | scot.gov |  
| Indices of Multiple Deprivation | Wales                                                     | 2014       | Wales               | `<boundary_type>_vulnerabilities` | CSV                        | https://statswales.gov.wales/Catalogue/Community-Safety-and-Social-Inclusion/Welsh-Index-of-Multiple-Deprivation/WIMD-2019 | Welsh Government |  
| Indices of Multiple Deprivation | Northern Ireland (Currently missing)                                         | ?? | ?? | ?? | ?? | ?? | ?? |  
    
## Impact network data

| Type              | Notes                                                                   |  Time span | Regions             | LCAT postgres table/col  | Original Format | Coordinate system | Source URL | Authority                  |
|-------------------|-------------------------------------------------------------------------|------------|---------------------|--------------------------|-----------------|-------------------|------------|----------------------------|
| Impacts network   | Exported from Kumu, contains reference ID numbers                       | 2022       | n/a                 | `network_nodes` & `network_edges` | JSON   | -                 | -          | LCAT Team                  |                         
| References        | The evidence base for the network conenctions and adaptations           | 2022       | n/a                 | `articles`               | CSV             | -                 | -          | LCAT Team                  |                         
    
## Hazard data 

These will be used to link network adaptations with selected boundaries - need to be binary on/off for each boundary

| Type              | Notes                                                                   |  Time span | Regions             | LCAT postgres table/col  | Original Format | Coordinate system | Source URL | Authority                  |
|-------------------|-------------------------------------------------------------------------|------------|---------------------|--------------------------|-----------------|-------------------|------------|----------------------------|
| Temperature       | TBD/CRI? | ? | ? | ? | ? | ? | ? | ? |
| Heat              | TBD/CRI? | ? | ? | ? | ? | ? | ? | ? |
| Drought           | TBD/CRI? | ? | ? | ? | ? | ? | ? | ? |
| Flooding          | TBD - one of the datasets mentioned by Rhys Hobbs in Feb email | ? | ? | ? | ? | ? | ? | ? |
| Sea Level Rise    | TBD/CRI? | ? | ? | ? | ? | ? | ? | ? |
| Extreme storms    | TBD/CRI? | ? | ? | ? | ? | ? | ? | ? |
| Coastal erosion   | TBD/CRI? | ? | ? | ? | ? | ? | ? | ? |
| Coastal           | Missing NI                                                              |  2023      | GB                  | `<boundary_type>`_hazards | ESRI shapefile | EPSG 4326         | https://zenodo.org/record/7985671 | Exeter University |     
| Air Pollution     | Some possible sources but TBD | ? | ? | ? | ? | ? | ? | ? |     
