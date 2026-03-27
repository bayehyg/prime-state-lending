// Source: U.S. Census Bureau ACS 2019-2023 5-Year Estimates via TaxByCounty.com
// Effective rates verified March 2026
// Rate = annual property tax as % of home value (decimal)
// These are county-level averages assigned to zip codes
// Actual rates vary by municipality, exemptions, and local levies

type ZipTaxEntry = {
  rate: number      // effective annual rate as decimal e.g. 0.0084
  county: string    // for display purposes
}

// County effective rates — all 39 WA counties, verified March 2026
const COUNTY_RATES: Record<string, { rate: number }> = {
  'Adams':        { rate: 0.0084 },
  'Asotin':       { rate: 0.0080 },
  'Benton':       { rate: 0.0079 },
  'Chelan':       { rate: 0.0071 },
  'Clallam':      { rate: 0.0074 },
  'Clark':        { rate: 0.0084 },
  'Columbia':     { rate: 0.0086 },
  'Cowlitz':      { rate: 0.0081 },
  'Douglas':      { rate: 0.0079 },
  'Ferry':        { rate: 0.0065 },
  'Franklin':     { rate: 0.0076 },
  'Garfield':     { rate: 0.0061 },
  'Grant':        { rate: 0.0082 },
  'Grays Harbor': { rate: 0.0087 },
  'Island':       { rate: 0.0070 },
  'Jefferson':    { rate: 0.0073 },
  'King':         { rate: 0.0084 },
  'Kitsap':       { rate: 0.0080 },
  'Kittitas':     { rate: 0.0071 },
  'Klickitat':    { rate: 0.0062 },
  'Lewis':        { rate: 0.0071 },
  'Lincoln':      { rate: 0.0060 },
  'Mason':        { rate: 0.0075 },
  'Okanogan':     { rate: 0.0077 },
  'Pacific':      { rate: 0.0082 },
  'Pend Oreille': { rate: 0.0067 },
  'Pierce':       { rate: 0.0094 },
  'San Juan':     { rate: 0.0057 },
  'Skagit':       { rate: 0.0082 },
  'Skamania':     { rate: 0.0072 },
  'Snohomish':    { rate: 0.0079 },
  'Spokane':      { rate: 0.0086 },
  'Stevens':      { rate: 0.0065 },
  'Thurston':     { rate: 0.0090 },
  'Wahkiakum':    { rate: 0.0060 },
  'Walla Walla':  { rate: 0.0090 },
  'Whatcom':      { rate: 0.0071 },
  'Whitman':      { rate: 0.0079 },
  'Yakima':       { rate: 0.0082 },
}

// Zip code to county mapping for Washington State
const ZIP_TO_COUNTY: Record<string, string> = {
  // King County
  '98001':'King','98002':'King','98003':'King','98004':'King','98005':'King',
  '98006':'King','98007':'King','98008':'King','98010':'King','98011':'King',
  '98014':'King','98019':'King','98022':'King','98023':'King','98024':'King',
  '98027':'King','98028':'King','98029':'King','98030':'King','98031':'King',
  '98032':'King','98033':'King','98034':'King','98038':'King','98039':'King',
  '98040':'King','98042':'King','98045':'King','98047':'King','98050':'King',
  '98051':'King','98052':'King','98053':'King','98055':'King','98056':'King',
  '98057':'King','98058':'King','98059':'King','98065':'King','98068':'King',
  '98070':'King','98072':'King','98074':'King','98075':'King','98077':'King',
  '98092':'King','98101':'King','98102':'King','98103':'King','98104':'King',
  '98105':'King','98106':'King','98107':'King','98108':'King','98109':'King',
  '98112':'King','98115':'King','98116':'King','98117':'King','98118':'King',
  '98119':'King','98121':'King','98122':'King','98125':'King','98126':'King',
  '98133':'King','98134':'King','98136':'King','98144':'King','98146':'King',
  '98148':'King','98155':'King','98158':'King','98166':'King','98168':'King',
  '98177':'King','98178':'King','98188':'King','98198':'King','98199':'King',

  // Snohomish County (Prime State's area — Mountlake Terrace is 98043)
  '98012':'Snohomish','98020':'Snohomish','98021':'Snohomish','98026':'Snohomish',
  '98036':'Snohomish','98037':'Snohomish','98043':'Snohomish','98046':'Snohomish',
  '98087':'Snohomish','98201':'Snohomish','98203':'Snohomish','98204':'Snohomish',
  '98205':'Snohomish','98208':'Snohomish','98270':'Snohomish','98271':'Snohomish',
  '98272':'Snohomish','98274':'Snohomish','98275':'Snohomish','98290':'Snohomish',
  '98292':'Snohomish','98294':'Snohomish','98296':'Snohomish','98251':'Snohomish',
  '98252':'Snohomish','98255':'Snohomish','98258':'Snohomish','98259':'Snohomish',
  '98288':'Snohomish',

  // Pierce County
  '98303':'Pierce','98304':'Pierce','98305':'Pierce','98321':'Pierce',
  '98323':'Pierce','98327':'Pierce','98328':'Pierce','98329':'Pierce',
  '98330':'Pierce','98338':'Pierce','98354':'Pierce','98360':'Pierce',
  '98371':'Pierce','98372':'Pierce','98373':'Pierce','98374':'Pierce',
  '98375':'Pierce','98385':'Pierce','98387':'Pierce','98388':'Pierce',
  '98390':'Pierce','98391':'Pierce','98394':'Pierce','98395':'Pierce',
  '98396':'Pierce','98401':'Pierce','98402':'Pierce','98403':'Pierce',
  '98404':'Pierce','98405':'Pierce','98406':'Pierce','98407':'Pierce',
  '98408':'Pierce','98409':'Pierce','98416':'Pierce','98418':'Pierce',
  '98421':'Pierce','98422':'Pierce','98424':'Pierce','98433':'Pierce',
  '98438':'Pierce','98439':'Pierce','98443':'Pierce','98444':'Pierce',
  '98445':'Pierce','98446':'Pierce','98447':'Pierce','98465':'Pierce',
  '98466':'Pierce','98467':'Pierce','98498':'Pierce','98499':'Pierce',

  // Kitsap County
  '98310':'Kitsap','98311':'Kitsap','98312':'Kitsap','98315':'Kitsap',
  '98337':'Kitsap','98340':'Kitsap','98342':'Kitsap','98345':'Kitsap',
  '98346':'Kitsap','98353':'Kitsap','98358':'Kitsap','98359':'Kitsap',
  '98366':'Kitsap','98367':'Kitsap','98370':'Kitsap','98383':'Kitsap',
  '98384':'Kitsap','98386':'Kitsap',

  // Thurston County
  '98501':'Thurston','98502':'Thurston','98503':'Thurston','98505':'Thurston',
  '98506':'Thurston','98512':'Thurston','98513':'Thurston','98516':'Thurston',
  '98531':'Thurston','98532':'Thurston','98579':'Thurston','98589':'Thurston',
  '98597':'Thurston',

  // Clark County
  '98601':'Clark','98604':'Clark','98606':'Clark','98607':'Clark',
  '98629':'Clark','98642':'Clark','98660':'Clark','98661':'Clark',
  '98662':'Clark','98663':'Clark','98664':'Clark','98665':'Clark',
  '98671':'Clark','98674':'Clark','98675':'Clark','98682':'Clark',
  '98683':'Clark','98684':'Clark','98685':'Clark','98686':'Clark',

  // Whatcom County
  '98220':'Whatcom','98225':'Whatcom','98226':'Whatcom','98229':'Whatcom',
  '98230':'Whatcom','98232':'Whatcom','98240':'Whatcom','98244':'Whatcom',
  '98248':'Whatcom','98264':'Whatcom','98266':'Whatcom','98273':'Whatcom',
  '98276':'Whatcom','98281':'Whatcom','98284':'Whatcom',

  // Skagit County
  '98221':'Skagit','98222':'Skagit','98233':'Skagit','98235':'Skagit',
  '98237':'Skagit','98238':'Skagit','98241':'Skagit','98243':'Skagit',
  '98247':'Skagit','98249':'Skagit','98253':'Skagit','98256':'Skagit',
  '98257':'Skagit','98260':'Skagit','98261':'Skagit','98263':'Skagit',
  '98267':'Skagit','98283':'Skagit','98286':'Skagit',

  // Spokane County
  '99001':'Spokane','99003':'Spokane','99004':'Spokane','99005':'Spokane',
  '99006':'Spokane','99009':'Spokane','99016':'Spokane','99017':'Spokane',
  '99018':'Spokane','99019':'Spokane','99021':'Spokane','99022':'Spokane',
  '99023':'Spokane','99025':'Spokane','99026':'Spokane','99027':'Spokane',
  '99029':'Spokane','99030':'Spokane','99031':'Spokane','99036':'Spokane',
  '99037':'Spokane','99039':'Spokane','99201':'Spokane','99202':'Spokane',
  '99203':'Spokane','99204':'Spokane','99205':'Spokane','99206':'Spokane',
  '99207':'Spokane','99208':'Spokane','99212':'Spokane','99213':'Spokane',
  '99214':'Spokane','99216':'Spokane','99217':'Spokane','99218':'Spokane',
  '99223':'Spokane','99224':'Spokane',

  // Yakima County
  '98901':'Yakima','98902':'Yakima','98903':'Yakima','98908':'Yakima',
  '98920':'Yakima','98921':'Yakima','98922':'Yakima','98923':'Yakima',
  '98925':'Yakima','98926':'Yakima','98930':'Yakima','98932':'Yakima',
  '98933':'Yakima','98934':'Yakima','98935':'Yakima','98936':'Yakima',
  '98937':'Yakima','98938':'Yakima','98939':'Yakima','98940':'Yakima',
  '98941':'Yakima','98942':'Yakima','98944':'Yakima','98947':'Yakima',
  '98948':'Yakima','98951':'Yakima','98952':'Yakima','98953':'Yakima',

  // Benton County
  '99320':'Benton','99330':'Benton','99336':'Benton','99337':'Benton',
  '99338':'Benton','99352':'Benton','99353':'Benton','99354':'Benton',

  // Franklin County
  '99301':'Franklin','99302':'Franklin',

  // Grant County
  '98813':'Grant','98822':'Grant','98823':'Grant','98837':'Grant',
  '98843':'Grant','98848':'Grant','98851':'Grant','98857':'Grant',

  // Chelan County
  '98801':'Chelan','98802':'Chelan','98811':'Chelan','98817':'Chelan',
  '98826':'Chelan','98831':'Chelan','98836':'Chelan','98852':'Chelan',

  // Douglas County
  '98807':'Douglas','98821':'Douglas','98824':'Douglas','98828':'Douglas',

  // Okanogan County
  '98812':'Okanogan','98814':'Okanogan','98815':'Okanogan','98816':'Okanogan',
  '98819':'Okanogan','98827':'Okanogan','98829':'Okanogan','98830':'Okanogan',
  '98832':'Okanogan','98833':'Okanogan','98834':'Okanogan','98840':'Okanogan',
  '98841':'Okanogan','98844':'Okanogan','98845':'Okanogan','98846':'Okanogan',
  '98847':'Okanogan','98849':'Okanogan','98850':'Okanogan','98853':'Okanogan',
  '98855':'Okanogan','98856':'Okanogan','98858':'Okanogan','98859':'Okanogan',

  // Island County
  '98236':'Island','98239':'Island','98277':'Island','98278':'Island','98282':'Island',

  // Jefferson County
  '98325':'Jefferson','98339':'Jefferson','98357':'Jefferson',
  '98363':'Jefferson','98365':'Jefferson','98376':'Jefferson',

  // Clallam County
  '98320':'Clallam','98326':'Clallam','98331':'Clallam','98350':'Clallam',
  '98362':'Clallam','98368':'Clallam',

  // Mason County
  '98520':'Mason','98524':'Mason','98526':'Mason','98528':'Mason',
  '98546':'Mason','98548':'Mason','98552':'Mason','98555':'Mason',
  '98560':'Mason','98563':'Mason','98568':'Mason','98575':'Mason',
  '98576':'Mason','98577':'Mason',

  // Grays Harbor County
  '98530':'Grays Harbor','98533':'Grays Harbor',
  '98535':'Grays Harbor','98536':'Grays Harbor','98537':'Grays Harbor',
  '98538':'Grays Harbor','98541':'Grays Harbor','98547':'Grays Harbor',
  '98550':'Grays Harbor','98557':'Grays Harbor','98559':'Grays Harbor',
  '98562':'Grays Harbor','98564':'Grays Harbor',
  '98565':'Grays Harbor','98569':'Grays Harbor','98571':'Grays Harbor',
  '98572':'Grays Harbor','98583':'Grays Harbor',
  '98584':'Grays Harbor','98587':'Grays Harbor','98588':'Grays Harbor',
  '98591':'Grays Harbor','98595':'Grays Harbor',

  // Lewis County
  '98522':'Lewis','98542':'Lewis','98544':'Lewis','98554':'Lewis',
  '98556':'Lewis','98558':'Lewis','98570':'Lewis',
  '98581':'Lewis','98582':'Lewis','98585':'Lewis','98586':'Lewis',
  '98590':'Lewis','98593':'Lewis','98596':'Lewis',

  // Cowlitz County
  '98609':'Cowlitz','98611':'Cowlitz','98612':'Cowlitz',
  '98613':'Cowlitz','98616':'Cowlitz','98619':'Cowlitz','98621':'Cowlitz',
  '98622':'Cowlitz','98625':'Cowlitz','98626':'Cowlitz','98632':'Cowlitz',
  '98645':'Cowlitz','98649':'Cowlitz',

  // Pacific County
  '98614':'Pacific','98624':'Pacific','98631':'Pacific',
  '98637':'Pacific','98638':'Pacific','98640':'Pacific','98641':'Pacific',
  '98643':'Pacific','98644':'Pacific','98592':'Pacific',

  // Wahkiakum County
  '98647':'Wahkiakum',

  // Skamania County
  '98605':'Skamania','98610':'Skamania','98617':'Skamania',
  '98648':'Skamania','98651':'Skamania','98670':'Skamania',

  // Klickitat County
  '98620':'Klickitat','98628':'Klickitat','98635':'Klickitat',
  '98650':'Klickitat','98672':'Klickitat','98673':'Klickitat',

  // Walla Walla County
  '99324':'Walla Walla','99328':'Walla Walla','99329':'Walla Walla',
  '99347':'Walla Walla','99348':'Walla Walla','99360':'Walla Walla',
  '99361':'Walla Walla','99362':'Walla Walla','99363':'Walla Walla',

  // Kittitas County
  '98943':'Kittitas','98946':'Kittitas','98950':'Kittitas',

  // Adams County
  '99103':'Adams','99133':'Adams','99135':'Adams','99137':'Adams',
  '99144':'Adams','99147':'Adams','99154':'Adams','99157':'Adams',
  '99169':'Adams','99173':'Adams',

  // Asotin County
  '99401':'Asotin','99402':'Asotin',

  // Columbia County
  '99346':'Columbia',

  // Garfield County
  '99128':'Garfield','99322':'Garfield',

  // Lincoln County
  '99008':'Lincoln','99014':'Lincoln','99020':'Lincoln',
  '99032':'Lincoln','99033':'Lincoln','99034':'Lincoln',
  '99101':'Lincoln','99102':'Lincoln','99107':'Lincoln','99109':'Lincoln',
  '99111':'Lincoln','99114':'Lincoln','99117':'Lincoln','99118':'Lincoln',
  '99122':'Lincoln','99123':'Lincoln','99124':'Lincoln','99125':'Lincoln',
  '99126':'Lincoln','99129':'Lincoln','99130':'Lincoln','99131':'Lincoln',
  '99134':'Lincoln','99136':'Lincoln','99138':'Lincoln','99139':'Lincoln',
  '99140':'Lincoln','99141':'Lincoln','99143':'Lincoln','99148':'Lincoln',
  '99149':'Lincoln','99150':'Lincoln','99151':'Lincoln','99152':'Lincoln',
  '99153':'Lincoln','99155':'Lincoln','99156':'Lincoln','99158':'Lincoln',
  '99159':'Lincoln','99160':'Lincoln','99161':'Lincoln','99163':'Lincoln',
  '99166':'Lincoln','99167':'Lincoln','99170':'Lincoln','99171':'Lincoln',
  '99174':'Lincoln','99176':'Lincoln','99179':'Lincoln',
  '99180':'Lincoln','99181':'Lincoln','99185':'Lincoln',

  // Stevens County
  '99119':'Stevens','99121':'Stevens',

  // Pend Oreille County
  '99110':'Pend Oreille',

  // Ferry County
  '99116':'Ferry',

  // San Juan County
  '98250':'San Juan','98279':'San Juan','98280':'San Juan',

  // Whitman County
  '99011':'Whitman','99012':'Whitman','99013':'Whitman',
  '99113':'Whitman','99164':'Whitman',
}

// Default fallback rate (WA state average)
const WA_STATE_DEFAULT_RATE = 0.0076

export function getTaxRateByZip(zip: string): {
  rate: number
  county: string | null
  isEstimate: boolean
} {
  const county = ZIP_TO_COUNTY[zip]
  if (!county) {
    return { rate: WA_STATE_DEFAULT_RATE, county: null, isEstimate: true }
  }
  const countyData = COUNTY_RATES[county]
  if (!countyData) {
    return { rate: WA_STATE_DEFAULT_RATE, county: null, isEstimate: true }
  }
  return { rate: countyData.rate, county, isEstimate: false }
}

export function getAnnualTax(homePrice: number, zip: string): number {
  const { rate } = getTaxRateByZip(zip)
  return homePrice * rate
}

export function getMonthlyTax(homePrice: number, zip: string): number {
  return getAnnualTax(homePrice, zip) / 12
}
