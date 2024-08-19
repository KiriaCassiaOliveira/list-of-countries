import CountryCard from "@/components/countryCard";
export type Country = {
  name: {
    common: string;
  };
  translations: {
    por: {
      common: string;
    };
  };
  flags: {
    svg: string;
    alt: string;
  };
  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages: {
    [key: string]: string;
  }
  borders?: string[]
  cca3: string
};

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2 mt-16">
      {countries.map((countrie) => (
     <CountryCard key={countrie.name.common} name={countrie.name.common} ptName={countrie.translations.por.common} flag={countrie.flags.svg} flagAlt={countrie.flags.alt} />
      ))}
    </section>
  );
}
