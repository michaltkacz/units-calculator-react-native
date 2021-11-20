export enum UnitsCategories {
  Length = 'Length',
  Mass = 'Mass',
  Speed = 'Speed',
  Volume = 'Volume',
  Time = 'Time',
  Area = 'Area',
  Temperature = 'Temperature',
}

export type Unit = {
  name: string;
  value: number;
};

export type UnitsCollection = Array<Unit>;

export type UnitsSchema = {
  [key in UnitsCategories]: UnitsCollection;
};

// const celsiusToKelvin = (value: number): number => {
//   return value + 273.15;
// };
// const kelvinToCelsius = (value: number): number => {
//   return value - 273.15;
// };
// const celsiusToFahrenheit = (value: number): number => {
//   return ((value - 273.15) * 9) / 5 + 32;
// };
// const fahrenheitToCelsius = (value: number): number => {
//   return ((value - 32) * 5) / 9;
// };
// const kelvinToFahrenheit = (value: number): number => {
//   return celsiusToFahrenheit(kelvinToCelsius(value));
// };
// const fahrenheitToKelvin = (value: number): number => {
//   return fahrenheitToCelsius(celsiusToKelvin(value));
// };

export enum TemperatureConversions {
  CK = 'CK',
  KC = 'KC',
  CF = 'CF',
  FC = 'FC',
  KF = 'KF',
  FK = 'FK',
}

export const temperatureFunctions: {
  [key in TemperatureConversions]: (value: number) => number;
} = {
  [TemperatureConversions.CK]: (value: number): number => value + 273.15,
  [TemperatureConversions.KC]: (value: number): number => value - 273.15,
  [TemperatureConversions.CF]: (value: number): number => (value * 9) / 5 + 32,
  [TemperatureConversions.FC]: (value: number): number =>
    ((value - 32) * 5) / 9,
  [TemperatureConversions.KF]: (value: number): number =>
    ((value - 273.15) * 9) / 5 + 32,
  [TemperatureConversions.FK]: (value: number): number =>
    ((value - 32) * 5) / 9 + 273.15,
};

const unitsSchema: UnitsSchema = {
  [UnitsCategories.Length]: [
    { name: 'km', value: 1000 },
    { name: 'm', value: 1 },
    { name: 'cm', value: 0.01 },
    { name: 'mm', value: 0.001 },
    { name: 'μm', value: 0.0000001 },
    { name: 'nm', value: 0.000000001 },
    { name: 'Mile', value: 1609.34 },
    { name: 'Yard', value: 0.9144 },
    { name: 'Foot', value: 0.3048 },
    { name: 'Inch', value: 0.0254 },
  ],
  [UnitsCategories.Mass]: [
    { name: 'ton', value: 1000000 },
    { name: 'kg', value: 1000 },
    { name: 'g', value: 1 },
    { name: 'mg', value: 0.001 },
    { name: 'μg', value: 0.0000001 },
    { name: 'US Ton', value: 907185 },
    { name: 'Stone', value: 6350.29 },
    { name: 'Pound', value: 453.592 },
    { name: 'Ounce', value: 28.3495 },
  ],
  [UnitsCategories.Speed]: [
    { name: 'm/s', value: 1 },
    { name: 'miles/h', value: 0.44704 },
    { name: 'km/h', value: 0.277778 },
    { name: 'foot/s', value: 0.30480024384 },
    { name: 'knot', value: 0.514444855556 },
  ],
  [UnitsCategories.Volume]: [
    { name: 'l', value: 1.0 },
    { name: 'Cubic km', value: 1000000000000.0 },
    { name: 'Cubic m', value: 1000.0 },
    { name: 'Cubic dm', value: 1.0 },
    { name: 'Cubic cm', value: 0.001 },
    { name: 'ml', value: 0.001 },
    { name: 'Gallon', value: 3.78541 },
    { name: 'Quart', value: 0.9463525 },
    { name: 'Pint', value: 0.47317625 },
    { name: 'Cup', value: 0.236588125 },
  ],
  [UnitsCategories.Time]: [
    { name: 's', value: 1.0 },
    { name: 'ms', value: 0.001 },
    { name: 'μs', value: 0.0000001 },
    { name: 'ns', value: 1.0000000001 },
    { name: 'm', value: 60.0 },
    { name: 'h', value: 3600.0 },
    { name: 'Day', value: 86400.0 },
    { name: 'Week', value: 604800.0 },
    { name: 'Month', value: 2629800.0 },
    { name: 'Year', value: 31557600.0 },
  ],
  [UnitsCategories.Area]: [
    { name: 'Square m', value: 1.0 },
    { name: 'Square km', value: 1000000.0 },
    { name: 'Are', value: 100.0 },
    { name: 'Acre', value: 4046.86 },
    { name: 'Hectare', value: 10000.0 },
    { name: 'Square mile', value: 2589990.0 },
    { name: 'Square yard', value: 0.836127 },
    { name: 'Square foot', value: 0.092903 },
    { name: 'Square inch', value: 0.00064516 },
  ],
  [UnitsCategories.Temperature]: [
    { name: 'C', value: 1 },
    { name: 'K', value: 1 },
    { name: 'F', value: 1 },
  ],
};

export default unitsSchema;
