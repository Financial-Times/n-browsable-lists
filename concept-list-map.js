export const sources = {
	EDITORIAL: 'editor',
	PROFESSOR: 'professor'
};

const covidList = {
	id: '3730c9e4-d2d5-4dd0-9e77-59d6121a9869',
	source: sources.EDITORIAL
};

const ukraineList = {
	id: '100fa2f1-8c59-4aaf-90e9-69e383f4d2ef',
	source: sources.EDITORIAL
};

const twitterList = {
	id: '8a295234-041e-4924-a73d-effd317bd737',
	source: sources.EDITORIAL
};

const cryptoList = {
	id: '44a24834-eae9-4fe4-9eeb-b28c511579b1',
	source: sources.EDITORIAL
};

const usPoliticsList = {
	id: '9395c85b-0bd6-407b-b6a4-1d350f4d5060',
	source: sources.EDITORIAL
};

const usInflationList = {
	id: 'd82b88d2-c6e6-47eb-b884-b621249857b1',
	source: sources.EDITORIAL
};

const ftxList = {
	id: '53b9544a-9aba-43e8-9c3a-f389ec1420a0',
	source: sources.PROFESSOR
};

const usMercantList = {
	id: '3b0e2e3e-63ce-4aaf-94be-d5bc779a3b23',
	source: sources.PROFESSOR
};

const finTechList = {
	id: 'b89ac3a1-5287-4052-a731-8383108e2e50',
	source: sources.PROFESSOR
};

const bankingUnionList = {
	id: '56c9c3a6-e4a1-4d11-8b11-40b8f76fea2e',
	source: sources.PROFESSOR
};

const hrmList = {
	id: '8639abe7-d18d-41eb-b43c-7aa5173f4047',
	source: sources.PROFESSOR
};

const lawList = {
	id: '69a63b22-25db-470e-af97-ad7bc21d6c55',
	source: sources.PROFESSOR
};

const chinaList = {
	id: '5982a6b3-20b2-4f31-a135-c40744113de3',
	source: sources.PROFESSOR
};

const gsList = {
	id: '12f5f315-59d7-4655-b6b7-37a971a1194a',
	source: sources.PROFESSOR
};

const globalStrategyList = {
	id: '8e056408-bc06-4976-b084-0970ceaf4164',
	source: sources.PROFESSOR
};

const priceMechanismList = {
	id: 'a655a110-d88d-459b-9b27-06cfe74804ee',
	source: sources.PROFESSOR
};

const concepts = {
	coronavirusPandemic: {
		id: '87e110e6-2170-408b-b267-d3b6bdbfeaa3'
	},
	energySector: {
		id: '5216ff2e-a6ed-42b2-a613-109fc6491ba2'
	},
	globalEconomy: {
		id: '29e67a92-a3b8-410c-9139-15abe9b47e12'
	},
	foodSecurity: {
		id: '9ab8e36c-4b79-4e96-9aae-cc586b7d19c4'
	},
	technologySector: {
		id: '6b32f2c1-da43-4e19-80b9-8aef4ab640d7'
	},
	usCanadianCompanies: {
		id: '1248b3d3-1d4c-4454-af23-c0b4707ed412'
	},
	mergersAquisitions: {
		id: '9d13b836-df76-4445-b599-10ae378680f0'
	},
	cryptoFinance: {
		id: '6c503953-7ee0-45d7-b316-f7834be9ff90'
	},
	financialMarketsRegulation: {
		id: 'baf2d326-7e13-4309-9f87-3eb1708468ff'
	},
	bitcoin: {
		id: 'a072c32f-42de-4cc6-8e77-c468d681e5db'
	},
	nonFungibleTokens: {
		id: '72709ae9-1963-4d08-a153-8a5746accb20'
	},
	investments: {
		id: '56f3a4f4-2a28-4a03-8bcc-cabf82c4015b'
	},
	usPoliticsPolicy: {
		id: '6f7d5d90-ac15-41fe-9e31-e69b42a013c6'
	},
	oilGasIndustry: {
		id: '9f991f8b-1d17-4d99-82f4-0cd8fe50b59b'
	},
	usBanks: {
		id: '456d01ad-ea50-4aa7-8d7f-b9737216d453'
	},
	usEconomy: {
		id: '6aa143a2-7a0c-4a20-ae90-ca0a46f36f92'
	}
};

export const conceptListMap = [
	{
		conceptId: concepts.coronavirusPandemic.id,
		listId: covidList.id,
		source: covidList.source
	},
	{
		conceptId: concepts.coronavirusPandemic.id,
		listId: chinaList.id,
		source: chinaList.source
	},
	{
		conceptId: concepts.energySector.id,
		listId: ukraineList.id,
		source: ukraineList.source
	},
	{
		conceptId: concepts.energySector.id,
		listId: priceMechanismList.id,
		source: priceMechanismList.source
	},
	{
		conceptId: concepts.globalEconomy.id,
		listId: ukraineList.id,
		source: ukraineList.source
	},
	{
		conceptId: concepts.globalEconomy.id,
		listId: bankingUnionList.id,
		source: bankingUnionList.source
	},
	{
		conceptId: concepts.foodSecurity.id,
		listId: ukraineList.id,
		source: ukraineList.source
	},
	{
		conceptId: concepts.foodSecurity.id,
		listId: chinaList.id,
		source: chinaList.source
	},
	{
		conceptId: concepts.technologySector.id,
		listId: twitterList.id,
		source: twitterList.source
	},
	{
		conceptId: concepts.technologySector.id,
		listId: hrmList.id,
		source: hrmList.source
	},
	{
		conceptId: concepts.usCanadianCompanies.id,
		listId: twitterList.id,
		source: twitterList.source
	},
	{
		conceptId: concepts.usCanadianCompanies.id,
		listId: finTechList.id,
		source: finTechList.source
	},
	{
		conceptId: concepts.mergersAquisitions.id,
		listId: twitterList.id,
		source: twitterList.source
	},
	{
		conceptId: concepts.mergersAquisitions.id,
		listId: lawList.id,
		source: lawList.source
	},
	{
		conceptId: concepts.cryptoFinance.id,
		listId: cryptoList.id,
		source: cryptoList.source
	},
	{
		conceptId: concepts.cryptoFinance.id,
		listId: ftxList.id,
		source: ftxList.source
	},
	{
		conceptId: concepts.financialMarketsRegulation.id,
		listId: cryptoList.id,
		source: cryptoList.source
	},
	{
		conceptId: concepts.financialMarketsRegulation.id,
		listId: finTechList.id,
		source: finTechList.source
	},
	{
		conceptId: concepts.bitcoin.id,
		listId: cryptoList.id,
		source: cryptoList.source
	},
	{
		conceptId: concepts.bitcoin.id,
		listId: ftxList.id,
		source: ftxList.source
	},
	{
		conceptId: concepts.nonFungibleTokens.id,
		listId: cryptoList.id,
		source: cryptoList.source
	},
	{
		conceptId: concepts.nonFungibleTokens.id,
		listId: finTechList.id,
		source: finTechList.source
	},
	{
		conceptId: concepts.investments.id,
		listId: cryptoList.id,
		source: cryptoList.source
	},
	{
		conceptId: concepts.investments.id,
		listId: globalStrategyList.id,
		source: globalStrategyList.source
	},
	{
		conceptId: concepts.usPoliticsPolicy.id,
		listId: usPoliticsList.id,
		source: usPoliticsList.source
	},
	{
		conceptId: concepts.usPoliticsPolicy.id,
		listId: gsList.id,
		source: gsList.source
	},
	{
		conceptId: concepts.oilGasIndustry.id,
		listId: usPoliticsList.id,
		source: usPoliticsList.source
	},
	{
		conceptId: concepts.oilGasIndustry.id,
		listId: lawList.id,
		source: lawList.source
	},
	{
		conceptId: concepts.usBanks.id,
		listId: usInflationList.id,
		source: usInflationList.source
	},
	{
		conceptId: concepts.usBanks.id,
		listId: globalStrategyList.id,
		source: globalStrategyList.source
	},
	{
		conceptId: concepts.usEconomy.id,
		listId: usInflationList.id,
		source: usInflationList.source
	},
	{
		conceptId: concepts.usEconomy.id,
		listId: usMercantList.id,
		source: usMercantList.source
	}
];
