import { calculateWinningTikets } from "../../../../app/controllers/powerball-lottery/calculate-winning-tickets";


test("invalid input", (): void => {
  const winnings = calculateWinningTikets(6, false);

  expect(winnings).toBe(0);
});

test("no matches", (): void => {
  const winnings = calculateWinningTikets(0, false);

  expect(winnings).toBe(0);
});

test("three matches with powerball", (): void => {
  const winnings = calculateWinningTikets(3, true);

  expect(winnings).toBe(100);
});

test("all matches (jackpot)", (): void => {
  const winnings = calculateWinningTikets(5, true);

  expect(winnings).toBe(0);
});

