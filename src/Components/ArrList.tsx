export default function ArrList() {
  return [
    {
      id: 0,
      name: "slice()",
      method: "slice(0, 3)",
      definition:
        "The start and end parameters specifies the part of the string to extract.",
      syntax: "string.slice(start, end)",
    },
    {
      id: 1,
      name: "concat()",
      method: "concat('..', '!')",
      definition: "The concat() method joins two or more strings.",
      syntax: "string.concat(string1, string2, ..., stringX)",
    },
    {
      id: 2,
      name: "charAt()",
      method: "charAt(4)",
      definition:
        "The charAt() method returns the character at a specified index (position) in a string.",
      syntax: "string.charAt(index)",
    },
    {
      id: 3,
      name: "includes()",
      method: "includes('e')",
      definition:
        "The includes() method returns true if a string contains a specified string.otherwise it returns false.",
      syntax: "string.includes(searchvalue, start)",
    },
    {
      id: 4,
      name: "localeCompare()",
      method: "localeCompare('ef')",
      definition:
        "localeCompare() returns one of 3 numbers indicating the sort order: -1 if sorted before, 1 if sorted after and 0 if equal.",
      syntax: "string.localeCompare(compareString)",
    },
    {
      id: 5,
      name: "substr()",
      method: "substr(4, 3)",
      definition:
        "The substr() method begins at a specified position, and returns a specified number of characters.",
      syntax: "string.substr(start, length)",
    },
    {
      id: 6,
      name: "replace()",
      method: "replace(' ', '🧃')",
      definition:
        "The replace() method returns a new string with the value(s) replaced.",
      syntax: "string.replace(searchValue, newValue)",
    },
    {
      id: 7,
      name: "toUpperCase()",
      method: "toUpperCase()",
      definition:
        "The toUpperCase() method converts a string to uppercase letters.",
      syntax: "string.toUpperCase()",
    },
    {
      id: 8,
      name: "padStart()",
      method: "padStart(24,'🍭')",
      definition: "The padStart() method pads a string with another string.",
      syntax: "string.padStart(padding, string2)",
    },
    {
      id: 9,
      name: "split()",
      method: "split('')",
      definition:
        "The split() method splits a string into an array of substrings.",
      syntax: "string.split(separator, limit)",
    },
    {
      id: 10,
      name: "indexOf()",
      method: "indexOf('F')",
      definition:
        "The indexOf() method returns the position of the first occurrence of a value in a string.",
      syntax: "string.indexOf(searchvalue, start)",
    },
    {
      id: 11,
      name: "lastIndexOf()",
      method: "lastIndexOf('F')",
      definition:
        "The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.",
      syntax: "string.lastIndexOf(searchvalue, start)",
    },
    {
      id: 12,
      name: "search()",
      method: "search('oo')",
      definition:
        "The search() method matches a string against a regular expression (strings are converted).",
      syntax: "string.search(searchValue)",
    },
    {
      id: 13,
      name: "match()",
      method: "match(/f/gi)",
      definition:
        "The match() method matches a string against a regular expression.If the search value is a string, it is converted to a regular expression.",
      syntax: "string.match(match)",
    },
    {
      id: 14,
      name: "startsWith()",
      method: "startsWith('Foo')",
      definition:
        "The startswith() method returns True if the string starts with the specified value, otherwise False.",
      syntax: "string.startsWith(value, start, end)",
    },
    {
      id: 15,
      name: "repeat()",
      method: "repeat(2)",
      definition:
        "The repeat() method returns a string with a number of copies of a string.",
      syntax: "string.repeat(count)",
    },
    {
      id: 16,
      name: "match()",
      method: "match(/f/gi)",
      definition:
        "The match() method matches a string against a regular expression (strings are converted).",
      syntax: "string.match(match)",
    },
    {
      id: 17,
      name: "substring()",
      method: "substring(5)",
      definition:
        "The substring() method extracts characters between two indices (positions).",
      syntax: "string.substring(start, end)",
    },
    {
      id: 18,
      name: "Chaining",
      method: "substr(0, 9).concat('..😉')",
      definition:
        "Method chaining is a syntax for invoking multiple method calls.",
      syntax: "string.method1().method2()...methodX()",
    },
  ];
}
