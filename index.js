#!/usr/bin/env node

const COUNTRIES_ENDPOINT = 'https://restcountries.com/v3.1/all?fields=name';

async function fetchCountries() {
  const response = await fetch(COUNTRIES_ENDPOINT);
  if (!response.ok) {
    throw new Error(`Failed to fetch countries: ${response.status} ${response.statusText}`);
  }

  const countries = await response.json();
  if (!Array.isArray(countries)) {
    throw new Error('Unexpected API response when fetching countries');
  }

  return countries
    .map((country) => country?.name?.common)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

async function main() {
  try {
    const countries = await fetchCountries();
    countries.forEach((country) => console.log(country));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

main();
