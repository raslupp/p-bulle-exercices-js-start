// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
const MAX = 9999;
const MIN = 1000;

export function randomShipRegistryNumber() {
  const RANDOM_NUM = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return `NCC-${RANDOM_NUM}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000.0 - 41000.0) + 41000.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const planetClasses = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
  const randomIndex = Math.floor(Math.random() * planetClasses.length);
  return planetClasses[randomIndex];
}
