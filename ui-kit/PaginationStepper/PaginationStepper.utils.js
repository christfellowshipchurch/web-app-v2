/**
 * PaginationStepper.js
 *
 * Author: Caleb Panza
 * Created: Aug 27, 2021
 *
 * Component that visually displays the current state of a paginated collection of data. It also enables a UI to allow the user to manually progress or regress between pages.
 */

/**
 * Given the current configuration of the pagination UI, can the user continue to step backward?
 * @param {number} total  | Total number of pages
 * @param {number} cursor | Current page
 * @param {number} stepBy | Increment that the pages increase by
 * @returns {boolean}
 */
export const canStepBackward = (total, cursor, stepBy) => {
  return cursor - stepBy > 0;
};

/**
 * Given the current configuration of the pagination UI, can the user continue to step forward?
 * @param {number} total  | Total number of pages
 * @param {number} cursor | Current page
 * @param {number} stepBy | Increment that the pages increase by
 * @returns {boolean}
 */
export const canStepForward = (total, cursor, stepBy) => {
  return cursor + stepBy <= total;
};
