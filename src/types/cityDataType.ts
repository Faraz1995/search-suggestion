interface Name {
  fa: string
  en: string
}

interface Iso {
  iso2: string
  iso3: string
}

interface Country {
  id: string
  name: Name
  iso: Iso
}

interface City {
  id: string
  name: Name
  country: Country
}

interface Airport {
  id: string
  iata: string
  name: Name
}

export interface CityData {
  city: City
  airports: Airport[]
}
