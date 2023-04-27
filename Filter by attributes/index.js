const response = require('./mockExample');

const getUniqueListBy = (arr, key) => {
	return [...new Map(arr.map(item => [item[key], item])).values()]
};

const filteredByModel = response.items.filter((item) => item.model === 'X3');

const uniqueList = getUniqueListBy(filteredByModel, 'modelVersion');
// console.log("🚀 ~ file: index.js:8 ~ uniqueList", uniqueList)

const formatedResponse = {
	modelVersions: uniqueList.map(selectProps('modelVersion')),
};
console.log("🚀 ~ file: index.js:12 ~ formatedResponse", formatedResponse)



function selectProps(...props) {
	return function (obj) {
		return obj[props];
	};
}