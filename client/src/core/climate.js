const climateAverages = {
    chess_scape_rcp85_annual_tas_1980: 8.47528374510115,
    chess_scape_rcp85_annual_tas_1990: 8.773299508173311,
    chess_scape_rcp85_annual_tas_2000: 9.247310571302357,
    chess_scape_rcp85_annual_tas_2010: 9.450837360307721,
    chess_scape_rcp85_annual_tas_2020: 10.073751410458435,
    chess_scape_rcp85_annual_tas_2030: 10.294439871546853,
    chess_scape_rcp85_annual_tas_2040: 10.770395991208405,
    chess_scape_rcp85_annual_tas_2050: 11.426687008625025,
    chess_scape_rcp85_annual_tas_2060: 11.802952094096531,
    chess_scape_rcp85_annual_tas_2070: 12.573561596018282,
    chess_scape_rcp85_annual_pr_1980: 3.126007617709834,
    chess_scape_rcp85_annual_pr_1990: 3.1720171300734132,
    chess_scape_rcp85_annual_pr_2000: 3.1073374951504067,
    chess_scape_rcp85_annual_pr_2010: 3.094059447042034,
    chess_scape_rcp85_annual_pr_2020: 3.158012868109238,
    chess_scape_rcp85_annual_pr_2030: 3.139915405483022,
    chess_scape_rcp85_annual_pr_2040: 3.1248788162240304,
    chess_scape_rcp85_annual_pr_2050: 3.149294560937705,
    chess_scape_rcp85_annual_pr_2060: 3.105773289640427,
    chess_scape_rcp85_annual_pr_2070: 3.1224400337323743,
    chess_scape_rcp85_annual_rsds_1980: 107.4339885891756,
    chess_scape_rcp85_annual_rsds_1990: 109.30665762164836,
    chess_scape_rcp85_annual_rsds_2000: 113.98786157529604,
    chess_scape_rcp85_annual_rsds_2010: 117.5385808873768,
    chess_scape_rcp85_annual_rsds_2020: 120.45408958023467,
    chess_scape_rcp85_annual_rsds_2030: 121.2174730363069,
    chess_scape_rcp85_annual_rsds_2040: 122.64884050014244,
    chess_scape_rcp85_annual_rsds_2050: 125.55132514691648,
    chess_scape_rcp85_annual_rsds_2060: 126.30722340432185,
    chess_scape_rcp85_annual_rsds_2070: 128.36263384323132,
    chess_scape_rcp85_annual_sfcWind_1980: 4.4117334890472515,
    chess_scape_rcp85_annual_sfcWind_1990: 4.41681298078711,
    chess_scape_rcp85_annual_sfcWind_2000: 4.366130484455786,
    chess_scape_rcp85_annual_sfcWind_2010: 4.319624216266515,
    chess_scape_rcp85_annual_sfcWind_2020: 4.388094800963524,
    chess_scape_rcp85_annual_sfcWind_2030: 4.331111797032763,
    chess_scape_rcp85_annual_sfcWind_2040: 4.273771166724417,
    chess_scape_rcp85_annual_sfcWind_2050: 4.327299894622219,
    chess_scape_rcp85_annual_sfcWind_2060: 4.2774907339719075,
    chess_scape_rcp85_annual_sfcWind_2070: 4.305441013845572,
    chess_scape_rcp85_summer_tas_1980: 13.82390356410862,
    chess_scape_rcp85_summer_tas_1990: 14.000969977389454,
    chess_scape_rcp85_summer_tas_2000: 14.791174450165016,
    chess_scape_rcp85_summer_tas_2010: 15.124397814504164,
    chess_scape_rcp85_summer_tas_2020: 15.831884334257293,
    chess_scape_rcp85_summer_tas_2030: 15.883351858611654,
    chess_scape_rcp85_summer_tas_2040: 16.389479221756893,
    chess_scape_rcp85_summer_tas_2050: 17.38590563390911,
    chess_scape_rcp85_summer_tas_2060: 17.93450696326702,
    chess_scape_rcp85_summer_tas_2070: 18.74403176410233,
    chess_scape_rcp85_summer_pr_1980: 2.66328496156078,
    chess_scape_rcp85_summer_pr_1990: 2.658177182578378,
    chess_scape_rcp85_summer_pr_2000: 2.4965267278812115,
    chess_scape_rcp85_summer_pr_2010: 2.419787800032907,
    chess_scape_rcp85_summer_pr_2020: 2.34119067851042,
    chess_scape_rcp85_summer_pr_2030: 2.3896139478486282,
    chess_scape_rcp85_summer_pr_2040: 2.415810853486775,
    chess_scape_rcp85_summer_pr_2050: 2.1007004621353347,
    chess_scape_rcp85_summer_pr_2060: 1.9723900158495171,
    chess_scape_rcp85_summer_pr_2070: 1.952208534557474,
    chess_scape_rcp85_summer_rsds_1980: 185.00271896568316,
    chess_scape_rcp85_summer_rsds_1990: 188.1926461333394,
    chess_scape_rcp85_summer_rsds_2000: 198.77723049908928,
    chess_scape_rcp85_summer_rsds_2010: 206.26786420980747,
    chess_scape_rcp85_summer_rsds_2020: 211.16303131810557,
    chess_scape_rcp85_summer_rsds_2030: 210.26289187255537,
    chess_scape_rcp85_summer_rsds_2040: 214.02360412944032,
    chess_scape_rcp85_summer_rsds_2050: 222.0600640516559,
    chess_scape_rcp85_summer_rsds_2060: 223.86263713613403,
    chess_scape_rcp85_summer_rsds_2070: 227.7436423611098,
    chess_scape_rcp85_summer_sfcWind_1980: 3.821830884170656,
    chess_scape_rcp85_summer_sfcWind_1990: 3.7630677460279394,
    chess_scape_rcp85_summer_sfcWind_2000: 3.712234716035752,
    chess_scape_rcp85_summer_sfcWind_2010: 3.681029022126427,
    chess_scape_rcp85_summer_sfcWind_2020: 3.6877702100971925,
    chess_scape_rcp85_summer_sfcWind_2030: 3.6928583836461177,
    chess_scape_rcp85_summer_sfcWind_2040: 3.6232473878931555,
    chess_scape_rcp85_summer_sfcWind_2050: 3.5671051323035394,
    chess_scape_rcp85_summer_sfcWind_2060: 3.5395148752122134,
    chess_scape_rcp85_summer_sfcWind_2070: 3.4963278163161755,
    chess_scape_rcp85_winter_tas_1980: 3.5157656837512876,
    chess_scape_rcp85_winter_tas_1990: 3.9387031678974416,
    chess_scape_rcp85_winter_tas_2000: 4.312120547543418,
    chess_scape_rcp85_winter_tas_2010: 4.194765117692366,
    chess_scape_rcp85_winter_tas_2020: 5.036143710459708,
    chess_scape_rcp85_winter_tas_2030: 5.034466743113786,
    chess_scape_rcp85_winter_tas_2040: 5.406052102210038,
    chess_scape_rcp85_winter_tas_2050: 5.954112000538338,
    chess_scape_rcp85_winter_tas_2060: 6.224178532746043,
    chess_scape_rcp85_winter_tas_2070: 6.853109777759439,
    chess_scape_rcp85_winter_pr_1980: 3.633285785727689,
    chess_scape_rcp85_winter_pr_1990: 3.839592209816628,
    chess_scape_rcp85_winter_pr_2000: 3.7328708429958164,
    chess_scape_rcp85_winter_pr_2010: 3.6521511958287163,
    chess_scape_rcp85_winter_pr_2020: 3.9453004578071447,
    chess_scape_rcp85_winter_pr_2030: 3.8067846580992986,
    chess_scape_rcp85_winter_pr_2040: 3.7894376265844087,
    chess_scape_rcp85_winter_pr_2050: 4.166411533820632,
    chess_scape_rcp85_winter_pr_2060: 4.228785595485088,
    chess_scape_rcp85_winter_pr_2070: 4.330093911775373,
    chess_scape_rcp85_winter_rsds_1980: 31.16548452192725,
    chess_scape_rcp85_winter_rsds_1990: 31.640920828794346,
    chess_scape_rcp85_winter_rsds_2000: 32.872573978165,
    chess_scape_rcp85_winter_rsds_2010: 33.74154130178902,
    chess_scape_rcp85_winter_rsds_2020: 34.09514259310452,
    chess_scape_rcp85_winter_rsds_2030: 34.72315203594508,
    chess_scape_rcp85_winter_rsds_2040: 35.09116793686595,
    chess_scape_rcp85_winter_rsds_2050: 34.644892782538626,
    chess_scape_rcp85_winter_rsds_2060: 35.02208052257968,
    chess_scape_rcp85_winter_rsds_2070: 35.49372621251451,
    chess_scape_rcp85_winter_sfcWind_1980: 4.967957239775904,
    chess_scape_rcp85_winter_sfcWind_1990: 5.077915341956992,
    chess_scape_rcp85_winter_sfcWind_2000: 5.046197258834602,
    chess_scape_rcp85_winter_sfcWind_2010: 4.892205958556179,
    chess_scape_rcp85_winter_sfcWind_2020: 5.052210310314144,
    chess_scape_rcp85_winter_sfcWind_2030: 4.927870173272979,
    chess_scape_rcp85_winter_sfcWind_2040: 4.882324410903651,
    chess_scape_rcp85_winter_sfcWind_2050: 5.1035424098057405,
    chess_scape_rcp85_winter_sfcWind_2060: 5.0500691275210245,
    chess_scape_rcp85_winter_sfcWind_2070: 5.117309093650093,
    chess_scape_rcp60_annual_tas_1980: 8.47528374510115,
    chess_scape_rcp60_annual_tas_1990: 8.773299508173311,
    chess_scape_rcp60_annual_tas_2000: 9.247310571302357,
    chess_scape_rcp60_annual_tas_2010: 9.519236366178637,
    chess_scape_rcp60_annual_tas_2020: 9.758783671448034,
    chess_scape_rcp60_annual_tas_2030: 9.851044961318188,
    chess_scape_rcp60_annual_tas_2040: 10.414931980725479,
    chess_scape_rcp60_annual_tas_2050: 10.498463267085688,
    chess_scape_rcp60_annual_tas_2060: 10.995694946419755,
    chess_scape_rcp60_annual_tas_2070: 11.172175922327952,
    chess_scape_rcp60_annual_pr_1980: 3.126007617709834,
    chess_scape_rcp60_annual_pr_1990: 3.1720171300734132,
    chess_scape_rcp60_annual_pr_2000: 3.1073374951504067,
    chess_scape_rcp60_annual_pr_2010: 3.09462238864463,
    chess_scape_rcp60_annual_pr_2020: 3.157836816219816,
    chess_scape_rcp60_annual_pr_2030: 3.18313729844564,
    chess_scape_rcp60_annual_pr_2040: 3.1306629572938647,
    chess_scape_rcp60_annual_pr_2050: 3.120034456495531,
    chess_scape_rcp60_annual_pr_2060: 3.1913672316372326,
    chess_scape_rcp60_annual_pr_2070: 3.0903599403035757,
    chess_scape_rcp60_annual_rsds_1980: 107.4339885891756,
    chess_scape_rcp60_annual_rsds_1990: 109.30665762164836,
    chess_scape_rcp60_annual_rsds_2000: 113.98786157529604,
    chess_scape_rcp60_annual_rsds_2010: 117.02378287072186,
    chess_scape_rcp60_annual_rsds_2020: 118.61255548503834,
    chess_scape_rcp60_annual_rsds_2030: 119.22123833751719,
    chess_scape_rcp60_annual_rsds_2040: 121.96338166711715,
    chess_scape_rcp60_annual_rsds_2050: 121.20407361347665,
    chess_scape_rcp60_annual_rsds_2060: 123.81793213889908,
    chess_scape_rcp60_annual_rsds_2070: 124.41040844246483,
    chess_scape_rcp60_annual_sfcWind_1980: 4.4117334890472515,
    chess_scape_rcp60_annual_sfcWind_1990: 4.41681298078711,
    chess_scape_rcp60_annual_sfcWind_2000: 4.366130484455786,
    chess_scape_rcp60_annual_sfcWind_2010: 4.36237742016156,
    chess_scape_rcp60_annual_sfcWind_2020: 4.366538446682255,
    chess_scape_rcp60_annual_sfcWind_2030: 4.358299825697685,
    chess_scape_rcp60_annual_sfcWind_2040: 4.316300194115168,
    chess_scape_rcp60_annual_sfcWind_2050: 4.29810793488127,
    chess_scape_rcp60_annual_sfcWind_2060: 4.339972122959076,
    chess_scape_rcp60_annual_sfcWind_2070: 4.261977234285149,
    chess_scape_rcp60_summer_tas_1980: 13.82390356410862,
    chess_scape_rcp60_summer_tas_1990: 14.000969977389454,
    chess_scape_rcp60_summer_tas_2000: 14.791174450165016,
    chess_scape_rcp60_summer_tas_2010: 15.02045588282137,
    chess_scape_rcp60_summer_tas_2020: 15.457597789942753,
    chess_scape_rcp60_summer_tas_2030: 15.617055974698603,
    chess_scape_rcp60_summer_tas_2040: 16.202295697718277,
    chess_scape_rcp60_summer_tas_2050: 16.08629378783656,
    chess_scape_rcp60_summer_tas_2060: 16.61825094058695,
    chess_scape_rcp60_summer_tas_2070: 16.967148944012806,
    chess_scape_rcp60_summer_pr_1980: 2.66328496156078,
    chess_scape_rcp60_summer_pr_1990: 2.658177182578378,
    chess_scape_rcp60_summer_pr_2000: 2.4965267278812115,
    chess_scape_rcp60_summer_pr_2010: 2.4358911527197216,
    chess_scape_rcp60_summer_pr_2020: 2.425111144268882,
    chess_scape_rcp60_summer_pr_2030: 2.4144633216152043,
    chess_scape_rcp60_summer_pr_2040: 2.333220672327304,
    chess_scape_rcp60_summer_pr_2050: 2.4716226036395277,
    chess_scape_rcp60_summer_pr_2060: 2.2151862342773736,
    chess_scape_rcp60_summer_pr_2070: 2.2316100818828697,
    chess_scape_rcp60_summer_rsds_1980: 185.00271896568316,
    chess_scape_rcp60_summer_rsds_1990: 188.1926461333394,
    chess_scape_rcp60_summer_rsds_2000: 198.77723049908928,
    chess_scape_rcp60_summer_rsds_2010: 203.46499003231466,
    chess_scape_rcp60_summer_rsds_2020: 208.0091932467268,
    chess_scape_rcp60_summer_rsds_2030: 209.77652541535136,
    chess_scape_rcp60_summer_rsds_2040: 213.66131936979718,
    chess_scape_rcp60_summer_rsds_2050: 210.29078879394456,
    chess_scape_rcp60_summer_rsds_2060: 217.90966479056632,
    chess_scape_rcp60_summer_rsds_2070: 218.37064911588303,
    chess_scape_rcp60_summer_sfcWind_1980: 3.821830884170656,
    chess_scape_rcp60_summer_sfcWind_1990: 3.7630677460279394,
    chess_scape_rcp60_summer_sfcWind_2000: 3.712234716035752,
    chess_scape_rcp60_summer_sfcWind_2010: 3.7207901148613307,
    chess_scape_rcp60_summer_sfcWind_2020: 3.6900770583023332,
    chess_scape_rcp60_summer_sfcWind_2030: 3.652188415009255,
    chess_scape_rcp60_summer_sfcWind_2040: 3.65950367466514,
    chess_scape_rcp60_summer_sfcWind_2050: 3.6316614790776405,
    chess_scape_rcp60_summer_sfcWind_2060: 3.612144341557396,
    chess_scape_rcp60_summer_sfcWind_2070: 3.5994211355464008,
    chess_scape_rcp60_winter_tas_1980: 3.5157656837512876,
    chess_scape_rcp60_winter_tas_1990: 3.9387031678974416,
    chess_scape_rcp60_winter_tas_2000: 4.312120547543418,
    chess_scape_rcp60_winter_tas_2010: 4.4374232539384675,
    chess_scape_rcp60_winter_tas_2020: 4.6022234808710865,
    chess_scape_rcp60_winter_tas_2030: 4.6631799607915765,
    chess_scape_rcp60_winter_tas_2040: 5.060146382234063,
    chess_scape_rcp60_winter_tas_2050: 5.235118658678935,
    chess_scape_rcp60_winter_tas_2060: 5.793536527407103,
    chess_scape_rcp60_winter_tas_2070: 5.535019407208623,
    chess_scape_rcp60_winter_pr_1980: 3.633285785727689,
    chess_scape_rcp60_winter_pr_1990: 3.839592209816628,
    chess_scape_rcp60_winter_pr_2000: 3.7328708429958164,
    chess_scape_rcp60_winter_pr_2010: 3.7465328725838676,
    chess_scape_rcp60_winter_pr_2020: 3.792485267304297,
    chess_scape_rcp60_winter_pr_2030: 3.762355714488229,
    chess_scape_rcp60_winter_pr_2040: 3.8726009371556,
    chess_scape_rcp60_winter_pr_2050: 3.666512980123118,
    chess_scape_rcp60_winter_pr_2060: 4.137129757018149,
    chess_scape_rcp60_winter_pr_2070: 3.868834915877217,
    chess_scape_rcp60_winter_rsds_1980: 31.16548452192725,
    chess_scape_rcp60_winter_rsds_1990: 31.640920828794346,
    chess_scape_rcp60_winter_rsds_2000: 32.872573978165,
    chess_scape_rcp60_winter_rsds_2010: 33.60743221688165,
    chess_scape_rcp60_winter_rsds_2020: 33.68765210964512,
    chess_scape_rcp60_winter_rsds_2030: 34.4673178363993,
    chess_scape_rcp60_winter_rsds_2040: 34.41339414904226,
    chess_scape_rcp60_winter_rsds_2050: 35.32595350860912,
    chess_scape_rcp60_winter_rsds_2060: 34.600580357409385,
    chess_scape_rcp60_winter_rsds_2070: 35.22954173506089,
    chess_scape_rcp60_winter_sfcWind_1980: 4.967957239775904,
    chess_scape_rcp60_winter_sfcWind_1990: 5.077915341956992,
    chess_scape_rcp60_winter_sfcWind_2000: 5.046197258834602,
    chess_scape_rcp60_winter_sfcWind_2010: 4.9893206865301005,
    chess_scape_rcp60_winter_sfcWind_2020: 4.957186521799321,
    chess_scape_rcp60_winter_sfcWind_2030: 4.933092971922085,
    chess_scape_rcp60_winter_sfcWind_2040: 4.948106884846236,
    chess_scape_rcp60_winter_sfcWind_2050: 4.858150083548132,
    chess_scape_rcp60_winter_sfcWind_2060: 5.101381558343258,
    chess_scape_rcp60_winter_sfcWind_2070: 4.874105864530164,
};

export { climateAverages };
