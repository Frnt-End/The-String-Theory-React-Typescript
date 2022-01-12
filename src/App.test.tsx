import data from '../package.json';


const jsonString = data.name;

test('The name of the app is the-string-theory-react-typescript', () => {
  expect(jsonString).toMatch(/the-string-theory-react-typescript/);
});