import { describe, it, expect, vi } from "vitest";
import { generateReportData } from "./data";
// import { jest } from "@jest.globals";

describe("generateReportDat()", () => {
  it("should execute logFn if provided", () => {
    const logger = vi.fn()

    // logger.mockImplementationOnce(() => {
    //   // customize https://pro.academind.com/courses/1763899/lectures/39726450
    // })
    generateReportData(logger)
    expect(logger).toBeCalled()
    expect(logger).toHaveBeenCalled()
    expect(logger).toBeCalledTimes(1)
  });
});
