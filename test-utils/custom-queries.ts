import {
  buildQueries,
  GetErrorFunction,
  Matcher,
  MatcherOptions,
  queryHelpers,
} from "@testing-library/react";

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataVi = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions | undefined
) => queryHelpers.queryAllByAttribute("data-vi", container, id, options);

const getMultipleError: GetErrorFunction<any[]> = (_c, dataViValue) =>
  `Found multiple elements with the data-vi attribute of: ${dataViValue}`;
const getMissingError: GetErrorFunction<any[]> = (_c, dataViValue) =>
  `Unable to find an element with the data-vi attribute of: ${dataViValue}`;

const [
  queryByDataVi,
  getAllByDataVi,
  getByDataVi,
  findAllByDataVi,
  findByDataVi,
] = buildQueries(queryAllByDataVi, getMultipleError, getMissingError);

export {
  findAllByDataVi,
  findByDataVi,
  getAllByDataVi,
  getByDataVi,
  queryAllByDataVi,
  queryByDataVi,
};
