


export const renderTimeOptions = (intervalType) => {
  if (intervalType === 'Monthly') {
    return (
      <>
        <option value="">Select Time</option>


        {/* {Array.from({ length: 72 }, (_, index) => { */}
        {Array.from({ length: (2023 - 2018) * 12 + 9 }, (_, index) => {
          const year = 2018 + Math.floor(index / 12);
          const month = index % 12 + 1;
          return (
            <option key={index} value={index}>
              {`${year}-${month.toString().padStart(2, '0')}`}
            </option>
          );
        })}
      </>
    );
  } else if (intervalType === 'Yearly') {
    return (
      <>
        <option value="">Select Time</option>
        {Array.from({ length: 6 }, (_, index) => {
          const year = 2018 + index;
          return (
            <option key={index} value={index}>
              {`${year}`}
            </option>
          );
        })}
      </>
    );
  }
};




export const fillDensityColor = (ColorLegendsDataItem, density) => {
  if (!ColorLegendsDataItem) return null;

  const valueColorsMap = ColorLegendsDataItem.Value.map((value, index) => ({ value, color: ColorLegendsDataItem.Colors[index] }));

  for (let i = 0; i < valueColorsMap.length; i++) {
    if (density > valueColorsMap[i].value) {
      return valueColorsMap[i].color;
    }
  }
  // return valueColorsMap[valueColorsMap.length - 1].color; // Default to the last color
  return ColorLegendsDataItem.Colors[ColorLegendsDataItem.Colors.length - 1]; // Default to the last color
};

export const YearsArray = ["2018", "2019", "2020", "2021", "2022", "2023"]
export const MonthsArray = ["2018-1", "2018-2", "2018-3", "2018-4", "2018-5", "2018-6", "2018-7", "2018-8", "2018-9", "2018-10", "2018-11", "2018-12", "2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12", "2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7", "2020-8", "2020-9", "2020-10", "2020-11", "2020-12", "2021-1", "2021-2", "2021-3", "2021-4", "2021-5", "2021-6", "2021-7", "2021-8", "2021-9", "2021-10", "2021-11", "2021-12", "2022-1", "2022-2", "2022-3", "2022-4", "2022-5", "2022-6", "2022-7", "2022-8", "2022-9", "2022-10", "2022-11", "2022-12", "2023-1", "2023-2", "2023-3", "2023-4", "2023-5", "2023-6", "2023-7", "2023-8", "2023-9"]


export const getAnnualDataFromMonthly = (monthlyData) => {
  const annualData = {};
  monthlyData.forEach((value, index) => {
    const year = Math.floor(index / 12) + 2018;
    if (!annualData[year]) {
      annualData[year] = 0;
    }
    annualData[year] += value;
  });
  return Object.values(annualData).map(value => Math.round(value * 100) / 100);
}

export const calculateAverageOfArray = (arr) => {
  if (arr.length === 0) {
      return 0;
  }

  const sum = arr.reduce((total, num) => total + num, 0);
  const average = sum / arr.length;
  return parseFloat(average.toFixed(3));
};


export const calculateSumOfArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
}



export const SelectedFeaturesAveragePCPTrendFunction = (data) => {
  let sumObject = {
    "PCP_trend": [],
  };


  data.forEach(obj => {
    sumObject["PCP_trend"] = averageArrayOfArrays(data.map(obj => [...obj["PCP_trend"]]));

  });
  return sumObject;
}




export const SelectedFeaturesAverageClimateParaFunction = (data) => {
  let sumObject = {
    "DISTRICT": [],
    "pcp_ssp585": [],
    "pcp_ssp245": [],
    "tdeg_ssp245": [],
    "tdeg_ssp585": [],
  };


  data.forEach(obj => {
    sumObject["pcp_ssp585"] = averageArrayOfArrays(data.map(obj => [...obj["pcp_ssp585"]]));
    sumObject["pcp_ssp245"] = averageArrayOfArrays(data.map(obj => [...obj["pcp_ssp245"]]));
    sumObject["tdeg_ssp245"] = averageArrayOfArrays(data.map(obj => [...obj["tdeg_ssp245"]]));
    sumObject["tdeg_ssp585"] = averageArrayOfArrays(data.map(obj => [...obj["tdeg_ssp585"]]));
    sumObject["DISTRICT"].push(obj["DISTRICT"]);

  });


  return sumObject;
}



export const SelectedFeaturesAverageSPEIFunction = (data) => {
  let sumObject = {
    "DISTRICT": [],
    "spei_03": [],
    "spei_06": [],
    "spei_12": [],
  };

  data.forEach(obj => {
    if (Array.isArray(obj["spei_03"])) {
      sumObject["spei_03"].push(obj["spei_03"]);
    }
    if (Array.isArray(obj["spei_06"])) {
      sumObject["spei_06"].push(obj["spei_06"]);
    }
    if (Array.isArray(obj["spei_12"])) {
      sumObject["spei_12"].push(obj["spei_12"]);
    }
    sumObject["DISTRICT"].push(obj["DISTRICT"]);
  });

  sumObject["spei_03"] = sumObject["spei_03"].length > 0 ? averageArrayOfArrays(sumObject["spei_03"]) : [];
  sumObject["spei_06"] = sumObject["spei_06"].length > 0 ? averageArrayOfArrays(sumObject["spei_06"]) : [];
  sumObject["spei_12"] = sumObject["spei_12"].length > 0 ? averageArrayOfArrays(sumObject["spei_12"]) : [];

  return sumObject;
}


export const WaterProductivityStatsFunction = (data) => {

  let sumObject = {
    "DISTRICT": [],
    "PCP_irrigated": [],
    "AETI_irrigated": [],
    "NPP_irrigated": [],
    "Area_irrigated": 0,

    "PCP_rainfed": [],
    "AETI_rainfed": [],
    "NPP_rainfed": [],
    "Area_rainfed": 0,

    "AETI_overall": [],
    "NPP_overall": [],
    "PCP_overall":[]

  };

  data.forEach(obj => {
    if (Array.isArray(obj["PCP_irrigated"])) {
      sumObject["PCP_irrigated"].push(obj["PCP_irrigated"]);
    }
    if (Array.isArray(obj["AETI_irrigated"])) {
      sumObject["AETI_irrigated"].push(obj["AETI_irrigated"]);
    }
    if (Array.isArray(obj["NPP_irrigated"])) {
      sumObject["NPP_irrigated"].push(obj["NPP_irrigated"]);
    }
    if (Array.isArray(obj["PCP_rainfed"])) {
      sumObject["PCP_rainfed"].push(obj["PCP_rainfed"]);
    }
    if (Array.isArray(obj["AETI_rainfed"])) {
      sumObject["AETI_rainfed"].push(obj["AETI_rainfed"]);
    }
    if (Array.isArray(obj["NPP_rainfed"])) {
      sumObject["NPP_rainfed"].push(obj["NPP_rainfed"]);
    }
    if (Array.isArray(obj["AETI_overall"])) {
      sumObject["AETI_overall"].push(obj["AETI_overall"]);
    }
    if (Array.isArray(obj["NPP_overall"])) {
      sumObject["NPP_overall"].push(obj["NPP_overall"]);
    }
    if (Array.isArray(obj["PCP_overall"])) {
      sumObject["PCP_overall"].push(obj["PCP_overall"]);
    }
    
    sumObject["DISTRICT"].push(obj["DISTRICT"]);
    sumObject["Area_irrigated"] += obj["Area_irrigated"];
    sumObject["Area_rainfed"] += obj["Area_rainfed"];
  });

  sumObject["PCP_irrigated"] = sumObject["PCP_irrigated"].length > 0 ? averageArrayOfArrays(sumObject["PCP_irrigated"]) : [];
  sumObject["AETI_irrigated"] = sumObject["AETI_irrigated"].length > 0 ? averageArrayOfArrays(sumObject["AETI_irrigated"]) : [];
  sumObject["NPP_irrigated"] = sumObject["NPP_irrigated"].length > 0 ? averageArrayOfArrays(sumObject["NPP_irrigated"]) : [];


  sumObject["PCP_rainfed"] = sumObject["PCP_rainfed"].length > 0 ? averageArrayOfArrays(sumObject["PCP_rainfed"]) : [];
  sumObject["AETI_rainfed"] = sumObject["AETI_rainfed"].length > 0 ? averageArrayOfArrays(sumObject["AETI_rainfed"]) : [];
  sumObject["NPP_rainfed"] = sumObject["NPP_rainfed"].length > 0 ? averageArrayOfArrays(sumObject["NPP_rainfed"]) : [];



  sumObject["AETI_overall"] = sumObject["AETI_overall"].length > 0 ? averageArrayOfArrays(sumObject["AETI_overall"]) : [];
  sumObject["NPP_overall"] = sumObject["NPP_overall"].length > 0 ? averageArrayOfArrays(sumObject["NPP_overall"]) : [];
  sumObject["PCP_overall"] = sumObject["PCP_overall"].length > 0 ? averageArrayOfArrays(sumObject["PCP_overall"]) : [];



  return sumObject;
}



export const SelectedFeaturesAverageStatsFunction = (data) => {
  let sumObject = {
    "AREA": 0,
    "DISTRICT": [],
    "PCP": [],
    "AETI": [],
    "NPP": [],
    "RET": [],
    "AridityIndex": [],
    "ETG": [],
    "ETB": [],
  
  };


  data.forEach(obj => {
    sumObject["AREA"] += obj["AREA"];
    sumObject["PCP"] = averageArrayOfArrays(data.map(obj => [...obj["PCP"]]));
    sumObject["AETI"] = averageArrayOfArrays(data.map(obj => [...obj["AETI"]]));
    sumObject["NPP"] = averageArrayOfArrays(data.map(obj => [...obj["NPP"]]));
    sumObject["RET"] = averageArrayOfArrays(data.map(obj => [...obj["RET"]]));
    sumObject["AridityIndex"] = averageArrayOfArrays(data.map(obj => [...obj["AridityIndex"]]));

    sumObject["ETG"] = averageArrayOfArrays(data.map(obj => [...obj["ETG"]]));
    sumObject["ETB"] = averageArrayOfArrays(data.map(obj => [...obj["ETB"]]));
    sumObject["DISTRICT"].push(obj["DISTRICT"]);

  });

  return sumObject;
}




export const SelectedFeaturesCroplandStatFunction = (data) => {
  let sumObject = {
    "DISTRICT": [],
    "AFG_Landcover": [],
    "ESA_Landcover": [],
    "Cropland": [],
  };


  data.forEach(obj => {
    sumObject["AFG_Landcover"] = sumArrayOfArrays(data.map(obj => [...obj["AFG_Landcover"]]));
    sumObject["ESA_Landcover"] = sumArrayOfArrays(data.map(obj => [...obj["ESA_Landcover"]]));
    sumObject["Cropland"] = sumArrayOfArrays(data.map(obj => [...obj["Cropland"]]));
    sumObject["DISTRICT"].push(obj["DISTRICT"]);

  });

  return sumObject;
}

export const sumArrayOfArrays = (arrays) => {
  if (arrays.length === 0 || arrays[0].length === 0) {
    return [];
  }

  const arrayLength = arrays[0].length;
  let sumArray = new Array(arrayLength).fill(0);

  arrays.forEach(array => {
    for (let i = 0; i < arrayLength; i++) {
      sumArray[i] += array[i];
    }
  });

  return sumArray;
}


export const averageArrayOfArrays = (arrays) => {
  if (arrays.length === 0 || arrays[0].length === 0) {
    return [];
  }

  const numArrays = arrays.length;
  const arrayLength = arrays[0].length;

  let sumArray = new Array(arrayLength).fill(0);

  arrays.forEach(array => {
    for (let i = 0; i < arrayLength; i++) {
      sumArray[i] += array[i];
    }
  });

  let averages = sumArray.map(sum => Math.round((sum / numArrays) * 1000) / 1000);
  return averages;
}



// function weightedAverageArray(inputArray) {
//   // console.log(inputArray)
//   if (inputArray.length === 0) {
//       return [];
//   }

//   const numWeights = inputArray.length;
//   const numValues = inputArray[0].length - 1; // Adjust for excluding the weight column
//   const weights = inputArray.map(item => item[0]); // Extract weights from inputArray
//   const values = inputArray.map(item => item.slice(1)); // Extract values from inputArray

//   // Initialize arrays for weighted sum and total weight
//   let weightedSums = new Array(numValues).fill(0);
//   let totalWeight = 0;

//   // Calculate weighted sum and total weight
//   for (let i = 0; i < numWeights; i++) {
//       for (let j = 0; j < numValues; j++) {
//           weightedSums[j] += values[i][j] * weights[i];
//       }
//       totalWeight += weights[i];
//   }

//   // Calculate weighted averages rounded to two decimal places
//   let weightedAverages = weightedSums.map(sum => Math.round((sum / totalWeight) * 100) / 100);
//   return weightedAverages;
// }





